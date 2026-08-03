---
title: "Your security scanner can't tell doing a dangerous thing from writing about one."
description: "Every string-matching guard conflates doing a dangerous thing with writing about one — and the false alarms corrode the documentation discipline it exists to protect. The fix: scan the surface that will actually run."
series: "Introducing al-Nizam"
cluster: "Trust & Correctness"
kicker: "Mention versus use"
date: "2026-07-27"
tags: ["Trust","Correctness","Security"]
theme: "light"
poster: "/heroes/mention-vs-use-poster.svg"
canonicalSource: "the-chronicle/outward/leadership-drafts/mention-vs-use.md"
---

> **Lead.** You just handled a dangerous command safely — cleaned up a stray file, forced a branch you own, scripted a delete with the right guardrails. Now you write the commit message that documents what you did, because a good log is a security asset. You type `git commit`, and your own safety tooling blocks you — not from *running* anything, but from *writing down* that you ran it. The guard meant to protect you is now standing between you and the record of being protected.

---

## The tool that blocked me from documenting the tool

Here is the incident that started this, stripped to its shape. A command guard — a hook that inspects every shell command before it runs and blocks the genuinely destructive ones — sat in front of a working framework. It worked: it caught the real `rm -rf ~`, the real force-push to the main branch, the real `curl | sh`. Then, over a single working session, it blocked three commits in a row. Not one of them ran a dangerous command. Every one of them was a commit *message* that happened to describe a dangerous command.

| What I typed | Which rule fired | What it actually was |
|---|---|---|
| `git commit -m "fix: stop blocking scoped deletes like rm -rf ~/tmp"` | recursive-delete-home (HARD) | A message *quoting* the pattern the fix is about |
| `git commit -m "docs: note the eval() sink we removed"` | eval-exec (PENTEST) | The English word "eval," inside prose |
| `git commit -m "DEC: git push -f main is blocked; here's why"` | force-push-main (HARD) | A decision note *documenting* the block |

**Table 1.** Three false positives, one session, two severity tiers — every one a commit message, none an executed command. *(Representative — real incident shape, message text stand-in.)*

The guard was scanning the entire command string. And for `git commit -m "…"`, that string *includes the message* — which is prose. A commit message is data the version-control system stores and never executes. Scanning it for dangerous commands is a category error: it treats a sentence *about* an action as if it were the action.

That's the bug in one line. The interesting part is what the bug costs.

## The cope that makes it worse

Everyone who has run a string-matching security control knows it throws false positives. The WAF blocks the blog post that contains a SQL keyword. The secret-scanner flags the example key in the documentation. The DLP filter quarantines the policy that *explains* the policy. This is such a familiar tax that we have a reflex for paying it: reword until the tool goes quiet. Rename the variable. Break up the keyword. Soften the commit message until the scanner stops complaining.

Look closely at what that reflex actually does. To satisfy a control that was never at risk — the commit was never going to run anything — you make your *documentation worse*. You write `git push -f` as "force-push (redacted)" so the hook stays calm. You stop quoting the exact dangerous pattern in the decision log, so the next person who hits it can't grep for it. The scanner has trained you to degrade the precise artifact it exists to defend: the clear, searchable, honest record of what your system does and does not allow.

That is the second-order cost, and it is the one nobody names. "False positives are annoying" is a truism. *False positives corrode your documentation discipline, and documentation discipline is a security asset* is a defensible claim with teeth. A guard that makes your security notes vaguer has a negative return past a certain false-positive rate, no matter how many real threats it catches — because it is quietly taxing the thing that lets humans reason about the system at all.

So the false-positive rate is not a comfort setting. It is a security property. Which means the fix is not "learn to live with it." The fix is to make the control see the right thing.

## Mention versus use

The distinction the guard was missing is old, and it is not originally a security idea — it's from logic and philosophy of language: the difference between **using** a word and **mentioning** it. *Go delete the file* uses the instruction. *He told me to delete the file* mentions it. The first is an act; the second is a report of an act. A control that fires on both is not being careful — it is being imprecise, in a direction that happens to feel like caution.

For a command guard, the equivalent distinction is: what will this command **run**, versus what does it merely **say**? The fix is to compute the *executable surface* of a command — the part that will actually be handed to the interpreter — and scan that, not the raw text. For `git commit -m "message"`, the message body is provably not executable: git stores it and never runs it. Strip it from the scanned copy *before* the rules run, and the guard fires on the delete, not on the sentence about the delete.

![A raw command carries a data region (a commit message that mentions rm -rf) and a code region (an actual rm -rf). A flat scan reads the whole string and fires on both. A normalize stage first strips the provably-inert message, leaving an executable surface of only the real command; the same rules then fire once, correctly, and the message is never scanned.](/figures/mention-vs-use.svg)

**Figure 1.** The raw command carries both code and data. A flat scan sees one undifferentiated string and fires on either. Inserting a *normalize* stage first — strip the provably-inert regions, keep every executable token — means the same rules now scan only what will run. The message body is *mentioned*; the `rm` is *used*.

Note what did **not** change: the rules. The same patterns that catch `rm -rf ~` and `git push -f main` are untouched. All that changed is the *surface* they read. This matters, because the rules are the part you dare not weaken — and this fix never touches them.

## The fork: two ways to be more precise, and only one is proper

There were two ways to cut those false positives, and the choice between them is the actual lesson.

The obvious one is to make the *patterns* smarter — anchor each dangerous keyword so it only matches at a command boundary, not inside a quoted string. Require `rm` to sit where a command goes, not where a message goes. This looks thorough. It is also a trap.

| | Approach A — anchor the patterns | Approach B — normalize the surface |
|---|---|---|
| **What changes** | Every dangerous regex, rewritten with position logic | One pre-processing stage; the rules untouched |
| **Architectural layer** | Still regex over a flat string — same layer, more of it | A new layer: separate data from code *before* matching |
| **Complexity added** | Spread across every HARD rule (~10 of them) | Isolated in one seam, behind one contract |
| **Failure mode it risks** | **False negative** — a cleverer quoting fools the anchor and a real command slips through | **False positive** — if the seam is unsure, it scans anyway |
| **On a security control** | A miss is a **breach** | A miss is **friction** |
| **Verdict** | Surface fix in an enterprise costume | The provably-safe increment |

**Table 2.** The two fixes are not equally good "options." On a control where a false negative is a breach and a false positive is only friction, the approach whose *failure mode* is a false positive is the correct one — and it happens to be the simpler one.

This is the counter-intuitive core. We are trained to distrust the simple fix — it feels like we cut a corner, and the elaborate one feels like diligence. But Approach A adds complexity to the exact rules a miss would be catastrophic in, and buys a *false-negative* risk with it. Approach B is simpler *and* safer, because its worst case is that it occasionally over-scans a message and blocks a commit — the friction we started with, never a breach. On a security control, **complexity is a false-negative liability.** Simple-but-provably-correct beats complex-but-probably-correct, and the reason is the asymmetry of the two ways to be wrong.

## The safety contract: how you prove you didn't open a hole

"Make the control less trigger-happy" is a dangerous sentence to say near a security boundary, because the naive version of it is just *scan less* — and scanning less is how you get a breach. The move is only legitimate if you can **prove** that making it quieter did not make it blind. That proof is a contract, and it is short enough to state in full:

```
normalize(command) -> scan_surface

  CONTRACT (load-bearing):
    1. Every executable token in `command` MUST survive into `scan_surface`.
       (You may remove data. You may never remove code.)
    2. Only strip a region that is PROVABLY inert —
       a git-commit message body with no command-substitution ( $( … ) or backticks ).
    3. On ANY uncertainty — parse ambiguity, an unrecognized consumer,
       a malformed input, the parser itself unavailable —
       return `command` UNCHANGED. Fail toward scanning.
```

Rule 1 is the whole safety story: because every executable token survives, the normalizer *cannot hide a real command from the rules*. The worst it can do is fail to strip a message it could have stripped — which reproduces the original false positive, not a new false negative. Rule 3 is the same instinct applied to the unknown: when the seam isn't certain a region is inert, it does not guess in the direction of silence. It scans. **Fail toward scanning** is the security-critical default — the version of "fail closed" that belongs on a control whose job is to catch things.

And the scope follows from the contract, not from laziness. The seam strips exactly one consumer's data — the `git commit` message — because `git commit` is the one case whose data-versus-code boundary is characterizable *without writing a parser*. A heredoc fed to `bash` is code and is never stripped. A message containing `$( … )` could execute and is never stripped. The guard learned to ignore one specific, provably-inert kind of text, and nothing else.

You verify a claim like this the only way such claims can be verified: a table of commands that **must** still block and commands that **must** now pass, run through the real hook. Seventeen must-block — including the evasions that matter: `&& rm -rf ~` appended *after* a clean commit, a `$( … )` substitution inside a message, a heredoc piped to a shell. Twelve must-pass — the three original false positives plus the benign variants. Two more for the invisible-character case below. **Thirty-one for thirty-one**, with zero of the original blocks weakened. A false-positive fix that quietly loosened a real block would show up here as a must-block case gone green. None did.

## The invisible-character question, and why it doesn't reopen the hole

There is a sharp objection to any "strip the inert part" scheme: could an attacker *disguise* code as the inert part? Slip a zero-width space or a Unicode look-alike into `$(` so the seam's "does this contain a substitution?" check says no, and the payload rides through in a region you then strip?

The answer here is not "we filter those characters" — it is a measurement, and the measurement is more reassuring than a filter would be. The check that decides whether a region is inert and the interpreter that would run the payload are looking at the *same bytes*. If a zero-width space splits `$(` well enough to fool the inertness check, it *also* splits `$(` for the shell — which then throws a syntax error and runs nothing. A zero-width space inside `rm` hides it from a scanner and turns it into a command the shell reports as *not found*.

```
$ echo $(⟨ZWSP⟩whoami)      # zero-width char after $(
bash: command substitution: line 1: syntax error near unexpected token ...

$ r⟨ZWSP⟩m -rf /tmp/x        # zero-width char inside rm
bash: rm: command not found
```

<p class="fig-note"><em>⟨ZWSP⟩ marks where an invisible zero-width character sits in the input — shown visibly here; on the page it would be unseen, which is the whole point.</em></p>

This is **symmetric breakage**: the same invisible character that defeats the detection also defeats the execution. So the thing you stripped was inert after all — not because you sanitized it, but because it could never have run. That reasoning is worth more than a character filter, because it doesn't depend on your blocklist of dangerous characters being complete. It is locked in as two of the thirty-one cases, so a future change can't quietly break the assumption.

(The general defense against invisible-character smuggling still matters — but its home is the *ingestion* boundary, where downloaded skills and fetched content enter the system and a hidden instruction can steer the model *before* any command exists. That's a different piece, and an honest one has to admit that defense is still being built. Bolting it onto this fix would have scope-crept both.)

## The principle

**Fire on use, not on mention — and when you make a security control quieter, prove you removed only what could never fire.** The measure of a guard is not how much it blocks. It is whether it blocks the right surface: the part of the input that will actually act. A control that scans everything, including the parts that only *describe* actions, is not more careful — it is less precise, and it pays for that imprecision twice: once in false alarms, and once in the vaguer documentation those alarms train you to write.

The method is portable to any string-matching control you own. A WAF that flags a blog post about SQL injection, a secret-scanner that trips on the example key in the README, a DLP rule that quarantines the policy explaining the policy — each is firing on a *mention*. The fix is the same shape every time: find the surface that actually acts (the query that hits the database, the credential that authenticates, the payload that leaves the building), scan that, and hold yourself to the contract — remove only what is provably inert, and when unsure, scan. You get fewer false alarms *and* a proof you didn't trade them for a real miss.

## What this does not claim

The fix that prompted this is **scoped**, and the scope is the honest bound. It separates data from code for exactly one consumer — the `git commit` message — because that is the one case whose boundary can be drawn without a parser. The general problem — knowing, for *any* command, which regions are data and which are code — is unsolved here, and solving it means writing a real parser for the shell. That work is **queued, not done**, and deliberately so: a *partial* parser dropped into a hard security path is not a step toward safety, it is a false-negative generator wearing the costume of one. It would confidently declare regions "data" that a fuller grammar would know are code. Better a small provably-correct seam that handles one case than a broad probably-correct one that handles many and misses the one that matters.

So: this catches the mention-versus-use error for commit messages, provably. It does not yet catch it for every command shape, and the piece would be dishonest to imply otherwise. The seam is the architectural slot the fuller solution drops into later — built debt-free, so the end-state is an extension, not a rewrite. That is the whole of the claim, and the boundary is the part that makes the rest trustworthy.

## The reframe

The question we ask of a security control is usually "how much does it catch?" — as if blocking more were always safer. It isn't. A control that blocks the mention along with the use catches more and protects less, because it spends your trust on false alarms and your documentation on appeasing them. The better question is quieter: *is it scanning the thing that will actually act?*

A guard that fires on every mention of danger feels vigilant, right up until you notice it has taught you to stop writing danger down. Precision isn't the opposite of caution. On a control that matters, precision is what caution looks like when it grows up.

---

*Part of a series introducing al-Nizam, an operating framework for working with AI. It sits in the trust-and-correctness cluster alongside the pieces on layered defense and "tests pass ≠ works" — this one is about a single layer learning to see truly. Its sibling, on invisible-payload attacks at the ingestion boundary, is where the symmetric-breakage idea gets its darker workout.*
