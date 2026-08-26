# HANDOFF — al-nizam-web

## 2026-08-26 — ERSALTP (a second website asked to live here; it doesn't, and checking that cost more than answering it)
**Built:** no code in this repo — fourth consecutive session. What landed: **DECISION-013** (ersatechsolutions.com
becomes its own greenfield project `ersa/ersatechsolutions`; reuse the stack, never the palette), the Steward's
**former-names ruling** for Signalwright registered in `al-sijill/tenants/personal.json` and framework canon, and
two memory writes.

**The correction worth carrying:** I told the Steward a retired-name state tree was "a fork, not a leftover" —
inferred from **mtimes**. A concurrent session on this strand opened the files and disproved it: the mtimes are
sync artifacts, the content is pre-rename text, and it is the **peer strand's** tree, stale because the rename
commit sat local-only for 30 days. **The remedy was the push, not the delete.** A proxy signal did not overstate,
it *inverted the action*. `feedback_verify_staleness_via_git_history_not_mtime_2026_07_02` already forbade exactly
this and I violated it 55 days after it was written; folded in as a recurrence.

**Measured and worth acting on:** the cadence is **not** blocked on writing. `~/the-chronicle/outward/leadership-drafts/`
holds 15 drafts and 7 are published — **8 are authored and unpublished**. Item 2b converts directly into eight
shipped articles. Also verified again on disk: no promote step exists, and the three `centre` spellings are still
live at `confidant.astro:34`, `:37`, `trust-comes-from-structure.mdx:94`.

**Stopped:** framework canon written and committed via this close; nothing in `src/` touched; foreign WIP untouched.

**Next:** **Item 2b — the Chronicle→web promote step.** Read `project_content_publishing_derivation_and_content_model_resolved_2026_07_21`
first (the AUTHORING-vs-RENDER split is already resolved; do not re-derive). Eight drafts are waiting behind it.

> Transfer candidate → every strand: a fix verified by re-checking the finding it targeted cannot see the violation it
> introduced — the oracle has to be the governing model, not the old symptom. Banked as
> `praxis_a_fix_verified_against_the_violation_it_targeted_will_not_see_the_one_it_creates_2026_08_26`.
> Second: **mtime carries no authorship and no ordering across a synced tier** — two dirs in a mirrored tree tell you
> nothing about which was written later, or by whom.

## 2026-08-22 — ERSALTP (a research session, partitioned; most of it was never web work)
**Built:** no code. Researched how enterprise systems build admin/management UIs, then the Steward
partitioned the result — *"keep whatever is useful for web and forward everything else to the
framework."* **The split is lopsided: most went to the framework**, recorded as
`reference_enterprise_admin_console_landscape_and_the_five_levels_of_hub_consistency_2026_08_22`.

**Three web keeps only:** (1) **semantic** token count is the metric, not raw — bears on **DEC-012**,
the identity/brand config split, when it finally happens; (2) never encode status in colour alone,
and pair relative age with an absolute timestamp — applies if any status/badge UI lands here;
(3) a new standing constraint in PROJECT_STATE — **the admin console is a different surface**, so no
console component library lands in this repo and this site's design language does not decide the
console's.

**One live fact worth not re-deriving:** **Clarity — the design system behind the vSphere/VCF
consoles — was archived 2026-02-17**, read-only, no successor named. I nearly asserted the opposite
from memory.

**Stopped:** the three British spellings are still live in published copy (framework locale decision
still open). No deploy, no code, foreign WIP untouched. **Steward moved to the framework** to
continue — the forwarded thread is the canon-contract ratification (D1–D5), plus a **D6 that does not
exist yet**: the noun set for runtime state.

**Next:** unchanged — **item 2b**, the Chronicle→web `promote` step, written fresh from
`.claude/ITEM-2-RENDERER-SPEC.md`.

> **Cadence flag: last article published 2026-07-27 — 26 days.** This is now the **third consecutive**
> session to open this project and close its substance elsewhere. The next one should ship item 2b.

## 2026-08-20 — ERSALTP (the question was framework-shaped; the finding was on this site's own pages)
**Built:** no code here. Resumed, then answered a framework-altitude question about AI-spend
accounting across vendors and users — which closed to **framework canon**, not to this project,
per `praxis_a_session_closes_where_the_work_happened`.

What this project actually got: two verifications and one defect. **Verified on disk** that the
Chronicle→web promote step genuinely does not exist (`tools/` holds only `visual-verify`; no
promote script in `package.json`) — so item 2b is real unbuilt work, not a card whose work
quietly shipped. And **measured a live-copy defect**: the framework's open locale decision
(`project_no_locale_is_declared_anywhere_and_the_canon_drifted_british_2026_08_18`) is not
theoretical here — **three British spellings sit in published reader-visible text**, at
`src/pages/confidant.astro:34` (`aria-label`), `:37` (visible `<text>`), and
`src/content/leadership/trust-comes-from-structure.mdx:94` (figure alt text). **Two are
accessibility surfaces**, so they are read aloud. Everything else matching in `src/` is a code
comment and is not published.

**Stopped:** the locale fix is **deliberately not applied** — the framework has not declared a
locale yet, and correcting published copy ahead of that decision is guessing at it. No deploy, no
code touched, foreign WIP untouched.

**Next:** unchanged — item 2b, the Chronicle→web `promote` step, written fresh from
`.claude/ITEM-2-RENDERER-SPEC.md` after reading
`project_content_publishing_derivation_and_content_model_resolved_2026_07_21`. Fold the three
locale fixes into whichever pass adopts the declared locale.

> **Cadence flag:** last article published 2026-07-27 — **24 days**. Two consecutive sessions have
> now closed here without shipping content. The next one should either ship item 2b or say why not.

## 2026-08-16 — ERSALTP (the capability was already declared; nobody had built the instrument)
**Built:** no code. Resumed the project, then answered a Steward question — *"a visitor counter, and
where the user originated from… are we recreating the wheel?"* The answer was a **recall finding**:
al-Tarwij's `B1-publication-and-promotion-plan.md` §5 already defines an *"al-nizam.ai referral
sessions"* ledger field, already carries **B1-R5** (*"Search Console before week 4, so referral data
isn't guessed"*), and `week-01-mention-vs-use/RUN-REPORT.md` already logged the miss verbatim:
`N/A week 1 — Search Console not connected`. Declared 2026-07-26, unmet since 2026-07-27. The
duplicated wheel was his own requirement, not a vendor product.

Recommendation scoped in **three tiers separated by privacy cost** — (1) read the Cloudflare zone
dashboard, zero code; (2) connect **Search Console**, no site code and **no privacy-page change**,
and the only source of search *queries*; (3) only then the Cloudflare Web Analytics beacon, the one
tier that makes `privacy.astro`'s published *"no tracking"* copy **false** and so ships its copy edit
in the **same commit**. Rejected: building any counter (the real reinvention), and a visible on-page
counter.

Recorded in four channels: framework canon `project_the_measurement_slot_was_declared_and_left_empty_2026_08_16`
(verified on the board at **p3**, declared `horizon: 30d` registered in the ledger) · a B1-R5 row in
`.claude/ADVISORIES-FROM-AL-TARWIJ.md` · `.claude/PROJECT_STATE.md` → Open Questions · and
`~/ersa/al-tarwij/advisory/ADVISORIES-FROM-WEB.md` (**new file, `WEB-001`**).

**Stopped:** nothing built — **execution deferred by the Steward** (*"we'll visit this when I'm
ready"*). No code touched, no deploy. Foreign WIP UNTOUCHED (`.claude/CLAUDE.md`,
`public/platform-graph-data.js`, `public/vendor/`). Two things found and left open: the
marketing↔web advisory edge was **asymmetric** (web had an inbox, al-Tarwij had none — counterpart
created), and **item 2b's stated inputs no longer exist** — the `migrate-clean.mjs`/`migrate-rich.mjs`
scripts lived in the 2026-08-03 scratchpad and are gone.

**Next:** item 2b — the Chronicle→web `promote` step, **written fresh** from
`.claude/ITEM-2-RENDERER-SPEC.md`, after reading
`project_content_publishing_derivation_and_content_model_resolved_2026_07_21` (it already defines the
AUTHORING-vs-RENDER field split — do not re-derive it). If measurement comes first instead, the
cheapest real move is **Search Console alone**.

> Transfer candidate → al-Tarwij (Marketing Channel): a **UTM convention** for campaign links is owed
> before the cadence resumes — referrers give the domain, never the thread, and web can only consume
> what the links carry.

## ⤵ Older blocks pruned to archive (2026-08-26)
2026-08-03, 2026-07-27, 2026-07-08 and earlier → `HANDOFF-ARCHIVE.md` (read-on-demand, NOT loaded at /resume).
Prior prune (2026-08-16) archived 2026-07-06 and earlier.

<!-- previous session blocks (import 2026-07-01) metabolized into PROJECT_STATE; older flat handoff superseded -->
