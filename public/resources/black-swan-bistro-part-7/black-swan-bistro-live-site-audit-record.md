# Black Swan Bistro Live-Site Audit Record

Use this record for Black Swan Bistro Part 7. Audit the deployed website before changing code.

## Site and Test Details

- Live URL:
- Audit date:
- Tester:
- Browser and version:
- Device or viewport sizes tested:
- Deployed version, branch, or commit if known:
- Coverage limits or checks still pending:
- Record type: Real audit / Local rehearsal / Hypothetical practice

## Audit Checklist

Record positive evidence as well as issues. A tick means you performed the check, not necessarily that it passed. Record the outcome in the findings table. Mark checks you could not perform as pending and explain why; use not applicable only with a reason.

- [ ] Home page loads over HTTPS
- [ ] Menu, About, Contact, header, and footer navigation work
- [ ] Mobile layout checked
- [ ] Tablet layout checked
- [ ] Desktop layout checked
- [ ] Keyboard navigation checked
- [ ] Focus states checked
- [ ] Headings checked
- [ ] Link text checked
- [ ] Image alt text checked
- [ ] Colour contrast checked where relevant
- [ ] Contact details and restaurant content checked
- [ ] Page title and meta description checked
- [ ] One clear H1 per page checked
- [ ] Console errors checked
- [ ] Network 404s or failed assets checked
- [ ] Large images or suspicious asset sizes checked
- [ ] Maintainability notes reviewed in source files

## Findings Table

| ID   | Area | Page or location | Observation | Impact | Evidence | Severity | Next action |
| ---- | ---- | ---------------- | ----------- | ------ | -------- | -------- | ----------- |
| F-01 |      |                  |             |        |          |          |             |
| F-02 |      |                  |             |        |          |          |             |
| F-03 |      |                  |             |        |          |          |             |

## Worked example (hypothetical)

These entries illustrate the lesson; they are not findings about the published Bistro. Keep example entries separate from your real audit. Record your actual full URLs, browser, date, version, and test conditions.

| ID   | Area          | Page or location       | Observation                                                                                   | Impact                                         | Evidence                                                                                                           | Severity                     | Next action                                                      |
| ---- | ------------- | ---------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------------------- |
| F-01 | Links         | Home footer Menu link  | At 390 × 844, Tab then Enter and a mouse click both open Contact. The header Menu link works. | Footer users must backtrack to reach the menu. | Starting and destination URLs; recorded steps; F-01-footer-menu-before.png; inspected href points to contact.html. | Medium: another route works. | Confirm intended destination, then correct and retest in Part 8. |
| F-02 | Accessibility | Home header navigation | Tab and Shift+Tab follow reading order, focus is visible, and Enter on Menu opens the menu.   | This tested path is usable by keyboard.        | Tested URL and keyboard sequence; F-02-header-focus.png.                                                           | No action                    | Preserve and retest this path after related edits.               |

The observation describes what happened. The inspected href supports a likely cause. A screenshot alone cannot show a keyboard sequence. F-02 does not establish accessibility across the whole site.

## Severity Guide

- High: blocks a key task, excludes users, breaks the live site, exposes private information, or creates a serious trust problem.
- Medium: makes an important task harder, weakens search or performance, or risks future breakage if ignored.
- Low: small polish or maintainability work that can wait.
- Monitor: not enough evidence yet, or worth checking again later.
- No action: working as intended or not worth changing.

## Evidence Notes

Use names that will make sense later.

| Evidence name | Tool or method | Viewport or condition | Related finding |
| ------------- | -------------- | --------------------- | --------------- |
|               |                |                       |                 |

## Findings to Carry Into Part 8

Choose up to three genuine candidate findings for prioritisation. If none needs action, explain which tests support leaving the site unchanged and what remains untested. Use the separate Part 8 practice exercise to rehearse a fix without inventing live defects.

1.
2.
3.

## Summary

- What is working well?
- What needs attention first?
- What should not change yet?
- What evidence is missing or uncertain?
