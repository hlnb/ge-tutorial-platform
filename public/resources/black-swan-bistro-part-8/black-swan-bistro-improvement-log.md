# Black Swan Bistro Improvement Log

Use this log for Black Swan Bistro Part 8. Start from the Part 7 audit record.

## Improvement Pass Details

- Live URL:
- Local project folder:
- Date:
- Branch:
- Starting commit:
- Tester:
- Record type: Real improvement / Separate practice exercise
- Release status: Not yet verified / Locally verified, deployment pending / Verified on deployed version
- Deployed URL, commit, test date, and results (if deployed):

## Prioritisation Matrix

Review up to three genuine candidates. One justified change is enough; no change may also be the right decision. Record coverage limits before deciding. If no real change is needed, complete the lesson's isolated link exercise and label its entries Practice only. Keep that exercise out of your real audit and production deployment.

Use 1-5 for each criterion; 2 and 4 sit between the anchors below. Keep scores separate rather than adding a total. Explain the decision in words. Investigate or escalate severe issues even when effort or risk is high.

| Criterion       | 1                               | 3                                   | 5                                               |
| --------------- | ------------------------------- | ----------------------------------- | ----------------------------------------------- |
| Impact          | Minor cosmetic issue            | Task harder with a workaround       | Key task blocked or users excluded              |
| Effort          | One small edit and short retest | Several related edits and checks    | Broad work beyond this session                  |
| Confidence      | Untested suspicion              | Observed once; more checking needed | Repeatable result with supporting evidence      |
| Regression risk | Isolated change with clear test | Shared code affects several pages   | Wide impact with poorly understood dependencies |

| Finding ID | Summary | Impact | Effort | Confidence | Regression risk | Decision                         |
| ---------- | ------- | -----: | -----: | ---------: | --------------: | -------------------------------- |
|            |         |        |        |            |                 | Do first / Plan / Polish / Defer |
|            |         |        |        |            |                 | Do first / Plan / Polish / Defer |
|            |         |        |        |            |                 | Do first / Plan / Polish / Defer |

## Worked prioritisation (hypothetical)

These are practice decisions, not live audit results. F-01 continues the Part 7 example; F-03 and F-04 are additional hypothetical candidates.

| Finding                                             | Impact | Effort | Confidence | Risk | Decision and reason                                                                 |
| --------------------------------------------------- | -----: | -----: | ---------: | ---: | ----------------------------------------------------------------------------------- |
| F-01: footer Menu opens Contact                     |      3 |      1 |          5 |    1 | Do first: reproduced by keyboard and mouse; isolated destination change.            |
| F-03: matching opening hours repeated in four files |      2 |      3 |          5 |    3 | Plan: no incorrect hours observed; shared-source change needs checks on every page. |
| F-04: footer spacing feels uneven                   |      1 |      1 |          2 |    2 | Defer: no blocked task observed; check other widths before editing shared CSS.      |

## Worked log entry (hypothetical)

- Related audit finding: F-01, home footer Menu link.
- Why now: customers using the footer must backtrack to reach the menu.
- Smallest sensible change: correct the href from contact.html to menu.html, after confirming menu.html exists in the same folder.
- Files changed: index.html in this static example. A Vue project must use its own confirmed source and route.
- Before evidence: F-01-footer-menu-before.png plus recorded home URL, destination URL, and keyboard/mouse steps from Part 7.
- Test steps: at 390 × 844, use Tab and Enter on the footer Menu link; return and repeat with a mouse. Confirm menu URL and content, visible focus, the working header path, and the desktop footer path. Record desktop dimensions; check Console, Network, and existing project validation. Retest other pages if source is shared.
- Example after evidence: F-01-footer-menu-after-local.png and test notes show Menu opens by keyboard and mouse; header navigation and focus remain working on tested paths.
- Example result: locally verified, deployment pending. These are scenario results, not tests of the live Bistro.
- Remaining risk: production, real mobile devices, and other untested paths remain unverified.
- Commit message: Fix home footer Menu link destination.
- Commit ID: record your actual ID after reviewing the diff, running the checks, and committing; do not invent one.

## Improvement Entries

Use as many entries as needed, up to three. Mark unused entries not applicable. For no-change decisions, complete the decision section below and keep the required practice log separately labelled.

### Improvement 1

- Related audit finding:
- Why this is worth doing now:
- Smallest sensible change:
- Files changed:
- Before evidence:
- Test steps:
- After evidence:
- Result:
- Remaining risk or follow-up:
- Commit message:
- Commit ID (or drafted message for practice only):
- Verification and release status:

### Improvement 2

- Related audit finding:
- Why this is worth doing now:
- Smallest sensible change:
- Files changed:
- Before evidence:
- Test steps:
- After evidence:
- Result:
- Remaining risk or follow-up:
- Commit message:
- Commit ID (or drafted message for practice only):
- Verification and release status:

### Improvement 3

- Related audit finding:
- Why this is worth doing now:
- Smallest sensible change:
- Files changed:
- Before evidence:
- Test steps:
- After evidence:
- Result:
- Remaining risk or follow-up:
- Commit message:
- Commit ID (or drafted message for practice only):
- Verification and release status:

## No-change Decision (if applicable)

- Tested areas and evidence supporting no change:
- Checks not performed and why:
- Pending or uncertain findings and next action:
- Separate practice exercise location and log:
- Practice commit ID or drafted message:

## Checks Run

Retest every completed improvement with methods suited to the change. Record starting page, expected and actual result, browser, viewport, version, and evidence filenames. Use comparable before/after conditions and record differences. If a check fails, retain the failure and resolve it before claiming completion. A screenshot alone does not verify a link destination or keyboard behaviour.

- [ ] Local page opened and inspected
- [ ] Mobile viewport retested
- [ ] Desktop viewport retested
- [ ] Keyboard path retested where relevant
- [ ] Console checked
- [ ] Network checked where relevant
- [ ] Build or project validation run where available
- [ ] Diff reviewed; only relevant files staged and committed (practice-only work may use a drafted message)
- [ ] Every completed change has relevant before/after tests and results
- [ ] If deployed: affected tests repeated on the public URL; deployed version, date, and results recorded
- [ ] If not deployed: explicitly marked locally verified, deployment pending

Live retesting is required whenever changes are deployed. Local checks alone do not verify production. Keep practice files separate and do not deploy them.

## Deferred Work

| Finding ID | Reason deferred | Suggested next action |
| ---------- | --------------- | --------------------- |
|            |                 |                       |

## Summary

- What improved?
- What evidence proves the improvement?
- What is still unresolved?
- What would you explain to the client or future maintainer?
