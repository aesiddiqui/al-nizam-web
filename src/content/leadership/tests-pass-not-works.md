---
title: "All ten tests passed. The feature never ran."
description: "A test that builds its own fixtures can encode the exact wrong assumption as the code it checks. Green is not verified — it's self-consistent."
series: "Introducing al-Nizam"
cluster: "Trust & Correctness"
kicker: "Green is not verified"
date: "2026-07-07"
tags: ["Correctness", "Testing", "Verification"]
theme: "light"
poster: "/heroes/tests-pass-poster.svg"
canonicalSource: "the-chronicle/outward/leadership-drafts/tests-pass-not-works.md"
---

> **Lead.** A green test suite tells you the code agrees with the test. It does not tell you the code agrees with reality. When the same person wrote both, those are not the same statement — and the gap between them is where the confident, fully-tested, completely-broken deploy lives.

---

## The deploy that passed everything

I shipped a change with ten of ten tests green and a clean end-to-end run in a sandbox. It was, in production, completely inert. Not flaky — *inert*. The feature did nothing, every time, on the platform half my work runs on.

Here is the whole failure, because it is smaller and more embarrassing than "hallucination" or "flaky CI" would suggest. The code stored a working directory and later compared it against the current one to decide whether two things matched. On one operating system a path looks like `/c/Users/…`; on Windows the same location is `C:\Users\…`. The code assumed the first form. Real operation handed it the second. They never matched, so the code silently took its fallback path — forever.

The tests did not catch it for a reason worth sitting with: **the tests built their own fixtures in the same path-form the code assumed.** They minted a directory in the POSIX form, fed it to the code, and checked that the POSIX form matched the POSIX form. It did. Ten times. The suite was not testing whether the code handled reality. It was testing whether the code agreed with a fixture that shared its exact blind spot.

## Why green felt like done

The seduction of a green suite is that it *feels* like external verification, and it is not. It is the code checked against expectations written by the same mind, often in the same hour, carrying the same assumptions. When the assumption is correct, the tests are genuinely useful. When the assumption is *wrong*, the tests don't just fail to catch it — they actively certify it, because the fixture was manufactured to satisfy the buggy code's worldview.

This is the trap under "it passed, so it works." A test constructs a small world and asks the code to behave in it. If the test-author's model of the real world is off in exactly the way the code's model is off, the small world is internally consistent and externally false. Everything agrees. Nothing is verified.

![Two lanes divided by a form boundary. The test lane stays on one side: code assumes a POSIX path, the test mints its fixture in the same POSIX form, compares POSIX to POSIX, and reports ten of ten green. The reality lane crosses the boundary: the runtime supplies a Windows path, compared against the code's POSIX assumption, which never equals, so the feature is inert.](/figures/same-form-fixture.svg)

**Figure 1.** The test lane never leaves its own side of the form boundary — it mints and compares in one form, so it can only agree. Reality enters from the other side and must cross that boundary to be compared; that crossing is exactly what the suite is built never to make. Green proved self-consistency, not correctness.

The tell is that both the fixture and the assertion live inside the same file, minted by the same hand:

![A console with two runs. In the test run a stored path is minted in POSIX form and compared to a POSIX form, they match, and the suite reports ten of ten green. In the production run the OS hands the stored path in Windows form, compared against the code's POSIX assumption, which never equals, so the feature is inert and falls back every time.](/figures/green-vs-real-run.svg)

**Figure 2.** Paraphrased — real failure shape, referential names and paths. The path-form duality is the actual bug; the surrounding identifiers are generalized stand-ins for the internal mechanism.

The boundary that breaks — one path-form meeting the other — is the one line the test was structured never to cross. Not from carelessness. From the ordinary fact that a fixture is a guess about reality, and this guess was wrong in the same direction as the code.

## What actually caught it

Not a better test — at least, not first. What caught it was checking the *live* result on the real platform at the end of the session: does the resolver, running for real, actually resolve? It did not. The environment boundary — the same-location-two-forms duality between the two shells — is precisely the kind of thing fixtures paper over, because you have to *be* in the messy environment to see it, and a fixture's whole job is to escape the messy environment.

That reframes the discipline. The suite is necessary and it is not sufficient. The missing step is a verification that touches reality the suite cannot manufacture: run the thing where it will actually run, on the boundary that actually bites, and look at what happens. Then — and only then — write the test that crosses the form boundary, so the regression is caught by machine next time. Reality first, fixture second.

| What a green suite proves | What it does *not* prove |
|---|---|
| The code matches the fixtures | The fixtures match reality |
| The assumptions are internally consistent | The assumptions are *correct* |
| This behavior is pinned against regression | This behavior was ever exercised on the real boundary |
| The author's model is self-coherent | The author's model isn't wrong in the same way the code is |

**Table 1.** Every row on the left is real value. Not one of them is "it works." The right column is the half a self-built fixture cannot reach.

## The principle

**Self-consistent is not correct.** A test written by the author of the code inherits the author's blind spots for free; when it builds its own fixtures, it can encode the very assumption the code got wrong and then certify it ten times over. So do not let green stand in for verified. For anything that crosses a real boundary — an operating system, a locale, a clock, an encoding, another team's API — verify once *against reality*, in the environment that will actually run it, before you trust the suite that says it's fine.

That principle needs no framework. It is a habit: when a change touches an environment boundary, the definition of done includes *watched it work where it really runs* — not *the tests are green*. The suite guards the second deploy. Something has to guard the first, and it can't be the fixtures, because the fixtures are on the code's side of the line.

## What this does not claim

This is not an argument against tests, and it is not a claim that manual verification scales. Tests are how you afford *not* to re-verify by hand every time; the failure here was trusting them for something they structurally cannot do, not writing them at all. Manual reality-checking is the expensive, non-scalable complement you spend *once*, at the boundary, to earn the right to trust the cheap automated check forever after — and the honest bound is that it depends on the operator recognizing that a boundary is even present. Miss that a change touches the environment, and you'll trust green exactly when you shouldn't. I have no structural cure for that recognition step yet; naming it as the live risk is the most I can claim. What I *can* say is that the fix, once you see it, is boringly reliable: cross the boundary for real, once, then encode the crossing.

## The reframe

"The tests pass" answers a narrower question than the one you're actually asking. It says the code is consistent with what you *expected*. "It works" says the code is consistent with what is *true*. Those coincide exactly when your expectations were right — which is exactly the case where you didn't need the reassurance. It's the other case, the one where you were wrong in a way your fixtures shared, that a green checkmark is engineered to hide.

Trust the suite to catch what you already understand. Trust reality to show you what you don't. Only one of them can surprise you, and it isn't the one that's green.

---

*Part of a series introducing al-Nizam, an operating framework for working with AI. A companion idea from the same failure — replacing a fragile proxy for identity (a path, a time-window, a heuristic) with the real thing — is drafted separately; this piece stays on the one lesson: green is not verified.*
