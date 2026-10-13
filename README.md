# Decay Series of Uranium-238 (class interactive)

A digital version of the Ch4 U-238 decay series card sort, built for make-up work and for teachers without the physical card sets. It runs on Chromebooks, and students can work in English, Spanish, Traditional Chinese, or Arabic. Key terms always appear in English with the translation beside them.

## Flow and timing

| Step | What students do | Check before moving on | Time |
|---|---|---|---|
| 1 Learn | Watch, Read, and Example on the left, Quick check on the right, all visible at once. When the example scrolls into view, each mass number gets a ring and drops into the number directly below it; the Mass numbers row turns green once it balances; then the same for the atomic numbers. A Replay button follows, then a naming note (thorium-234, not thorium-90) | 3 questions (must all be right; first-try score recorded) | ~15 min |
| 2 Practice | Fill in the missing card for Pu-239 (α) and Ra-228 (β), then write and say the sentence frame for each | Each card and each sentence must be right | ~6 min |
| 3 Build the chain | Decays 2–14. Each decay shows the α/β piles and 4 isotope cards (1 right + 3 traps). Students write and say the sentence frame for the first two β decays (2, 3), the first two α decays (4, 5), and the last β and α decays (13, 14) | Balanced check every decay; sentence on 6 of them | ~15 min |
| 4 Patterns | The chain is drawn on a mass number vs. atomic number map; 7 questions on the α/β patterns, helium, the stable endpoint, and half-life | Auto-checked items must be right; written items need a full sentence | ~8 min |
| 5 New chain | Am-241 → Np-237 → Pa-233 → U-233 as missing cards (transfer check) | Each card must be right | ~5 min |
| 6 Send | Summary goes to you by Google Form, or "Copy my work" for Classroom | | ~2 min |

The whole lesson is about 50–55 min, which fits a 72-min block. For a 46-min period, stop after step 3. The completed chain and the summary's check and hint counts are that day's formative check. Do steps 4–6 the next day.

Progress saves automatically in the browser, so a student who switches to a different Chromebook starts over.

## Settings (CONFIG block at the top of the script)

| Setting | Default | What it does |
|---|---|---|
| `formPrefillUrl` | blank | Your Google Form prefill link. If blank, students get "Copy my work" only. |
| `cardsPerDecay` | 4 | Isotope cards per decay (1 right + traps). Range 3–6. |
| `firstDecayAsExample` | true | U-238 → Th-234 is pre-filled, like the paper worksheet. |
| `sayFirstAlpha`, `sayFirstBeta` | 2, 2 | How many of the first α and first β decays in the chain ask for the sentence. |
| `sayLastAlpha`, `sayLastBeta` | true, true | The last α and last β decay also ask for the sentence. |
| `sayInPractice` | true | The Pu-239 and Ra-228 practice decays ask for the sentence too. |
| `hintAfterWrongChecks` | 1 | Unbalanced checks before the Hint button appears (3 tiers; the last tier gives the target numbers). |
| `soundOnByDefault` | false | Sound effects on the first visit. |
| `videos` | 2 | Titles, links, and watch ranges. |

## Google Form setup (once, about 2 minutes)

`make-form.gs` builds the Form, its response Sheet, and the prefill link for you:

1. Go to script.google.com > New project, delete the starter code, and paste in `make-form.gs`.
2. Click Run and approve the permissions.
3. In the Execution log, copy the link after the word PREFILL and paste it into `formPrefillUrl` (or send it to Claude to push).

The script records students' school Google accounts (`collectEmail: true`), so a name can't be faked. It's reusable for other games: change the title and the field list in its SETTINGS block.

The summary is always in English. It records first-try scores, total checks and hints, each trap card a student placed (with the mistake it represents), every sentence they wrote, their written explanations, the language they used, and the time on task.

## Trap cards

Each decay's traps come from the classic mistakes listed below. The most common mistake is always included (α: changed only the mass number; β: lowered the atomic number), and the other traps are chosen at random for each student. Trap cards never balance with that decay's parent, so exactly one card works.

| Decay | Mistake rule | Example (from U-238 or Th-234) |
|---|---|---|
| α | Changed only the mass number (A−4, Z) | U-234 |
| α | Subtracted 4 from both numbers | Ra-234 |
| α | Switched the 2 and the 4 (A−2, Z−4) | Ra-236 |
| α | Changed only the atomic number (A, Z−2) | Th-238 |
| α | Added 2 to the atomic number | Pu-234 |
| β | Lowered the atomic number (A, Z−1) | Ac-234 |
| β | Also lowered the mass number (A−1, Z+1) | Pa-233 |
| β | Lowered the mass number instead (A−1, Z) | Th-233 |
| β | Raised the atomic number by 2 | U-234 |

The card order is shuffled with Fisher–Yates. An 8,000-student simulation put the correct card in each of the 4 positions 24–26% of the time, at every decay.

## Data notes (corrections from the paper materials)

- **Pa-234:** the chain uses Pa-234m, half-life 1.17 min. Th-234's beta decay makes the high-energy form about 99.8% of the time. It has the same mass and atomic numbers as ground-state Pa-234, so the equations and everything after it in the chain are unchanged. A short note appears on that row. The physical card's 6.7 hours is the ground-state value.
- **Po-214:** 1.64 × 10⁻⁴ s, as on your card. The TPT key's 0.0000016 s is 100× too short.
- **Pb-210:** 22.2 years (the TPT key rounds to 21).
- **Alpha cards:** the physical cards say "He nuclei". It should be "nucleus". The digital cards don't print this label.

## Alignment (teacher-facing only)

- **PEs:**
  - HS-PS1-8 ✓ (SFUSD places it in Unit 2): α and β decay as changes to the nucleus, with mass and atomic number conserved.
  - HS-ESS1-6 ✓, partial (SFUSD places it in Unit 2): half-life interpretation only. This lesson does no radiometric dating.
- **SEPs:** 2 Developing and Using Models (nuclide notation, the decay map); 5 Using Mathematics and Computational Thinking (balancing mass and atomic numbers); 4 Analyzing and Interpreting Data (patterns on the map, half-life comparisons).
- **CCCs:** Energy and Matter (conservation of nucleons); Patterns (on the map, α moves 4 left and 2 down, β moves 1 up); Stability and Change (half-life, the stable endpoint).
- **Flags:**
  - Pa-234m is a nuclear isomer, which is *beyond the NGSS assessment boundary*. It appears only as an enrichment note.
  - Gamma decay is in the PS1-8 boundary but is not practiced here.

## Numbering

Only one numbering system shows at a time. The stepper uses ✓ and lock icons instead of numbers, "Decay n of 14" appears only while students build the chain, Learn section headings have no numbers, and questions are numbered "1)".

## Balance rows and the chain list

Everywhere an equation is checked (Learn example, Practice, Build the chain, New chain), the mass-number and atomic-number rows sit directly under the equation: each number under its own card, "=" (or "≠") under the arrow, "+" under the plus, and the row label and status at the right. In "Your chain so far," narrow arrows run from each daughter isotope down to the same isotope as the next parent, like the in-class scaffold. The Pa-234m note is behind an ⓘ button on that row.

## Sentence frame feedback

Each blank has helper text under it ("alpha or beta"; "English element name-mass number, like hydrogen-2"). Feedback is specific: atomic number used instead of mass number, missing name or number, wrong element. A one-letter typo is fixed automatically ("We fixed a small spelling mistake"), and two letters off gets a spelling nudge. After 3 misses, the answer is shown, and the summary reports how many answers were shown.

## Tapping and phones

Tapping a card puts it straight into its box (each card fits only one box), so students don't need to drag. Dragging still works, and so does the keyboard (Enter on a card).

Chromebooks get the two-column layout. On phones, or any screen narrower than 1000px or shorter than 520px, Build the chain stacks: a short "Your chain so far" on top, then the equation, then the cards in a dock pinned to the bottom of the screen. During the sentence step, the dock shows the element-name strip instead. After both boxes are filled, the page scrolls just enough to keep Check above the dock. On narrow phones, each balance row's label moves above its numbers, half-lives are hidden from the chain list, and any equation that still doesn't fit scales down instead of running off the screen.

## Card shapes

The α card is a pink pentagon pointing down, because both numbers go down. The β card is the same pentagon turned 180° (light blue, pointing up), because the atomic number goes up. Colors follow the class code: pink/red = positive (α is +2), blue = negative (β is −1), green = correct. Card-related highlights (selected card, drop slot, parent card) are neutral gray so blue only ever means β. The slot for the decay particle is a plain rounded rectangle, so it doesn't hint which one belongs. The map uses the same idea: mass number runs across the bottom and atomic number up the side, so α arrows run down-left and β arrows run straight up.

Greek letters come from a small embedded font in the shared theme (Noto Serif Italic, Greek letters only, OFL license). Atkinson Hyperlegible has no Greek, so before this, each device substituted its own font and α often looked like an "a".

## Language and discourse notes

- During the sentence step, an Element names box (atomic numbers 82–92, English names) replaces the card tray, so students can spell names like protactinium. No tile is highlighted; students still find the atomic number. A near-miss spelling (up to 2 letters off) gets "check the spelling" feedback instead of the generic hint.
- The interface, reading, questions, and feedback are translated. The sentence frame ("Parent isotope ___ undergoes ___ decay to form daughter isotope ___.") must be written in English. If a student types *alfa*, *ألفا*, or *阿爾法*, the feedback asks for the English word.
- Translations are my drafts. Have a native speaker spot-check the Arabic and Chinese before wide use.
- The sentence frame appears on 8 decays (2 practice + 6 in the chain), not every one, so it stays a language routine instead of copy work.
- "Say it out loud" works on the honor system for solo make-up work. The "Hear it" button models the sentence first with the browser's English voice. In class, pair students: one says the sentence, and the partner taps Hear it to compare. The written sentences in the summary are the accountability artifact.

## Test on a real Chromebook before launch

- Drag with the trackpad and with touch; test tap-a-card, then tap-a-box.
- Speech voices: "Hear it" (English) and "Read aloud" in each language. These buttons hide when the device has no matching voice.
- Atkinson Hyperlegible and Noto fonts load (the sandbox screenshots used fallback fonts).
- The YouTube and Khan Academy links get through the district filter.
- Arabic: the layout mirrors, while equations and the map stay left to right.

## Files

- `index.html`: the activity.
- `make-form.gs`: the Form builder (runs in Google Apps Script, not on the page).
- `theme-v1.css`: a fallback copy of the shared theme. The page loads `gibsonm1.github.io/theme/theme-v1.css` first and uses this copy only if that fails. Create the `theme` repo once and every class interactive can share it.

Version: Oct 12, 2026, update 11
