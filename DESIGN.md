---
name: Доктор Вет
description: Two 24/7 veterinary clinics in Minsk; a calm pine-green front desk with the next free time on the counter.
colors:
  pine: "#1F5A4C"
  pine-deep: "#174538"
  pine-night: "#12342C"
  pine-mist: "#EAF4EF"
  slot-mist: "#F0F4F2"
  tint: "#F5F8F6"
  white: "#FFFFFF"
  ink: "#15232B"
  ink-soft: "#4D5C64"
  label-sage: "#5B7169"
  rule: "#DDE4E1"
  rule-strong: "#C5D0CB"
  crimson: "#C6204A"
  crimson-deep: "#A5183B"
  rose: "#FBEFF2"
  status-green: "#1E8A5A"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(32px, 4vw, 46px)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  numeral:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(104px, 14vw, 168px)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(28px, 3.2vw, 36px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  ui:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.25
  label:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  control: "12px"
  md: "16px"
  lg: "24px"
  xl: "28px"
  round: "50%"
spacing:
  gutter-mobile: "16px"
  gutter-tablet: "28px"
  gutter-desktop: "32px"
  container: "1240px"
  section-mobile: "56px"
  section-wide: "80px"
  row-min: "62px"
components:
  button-primary:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.white}"
    typography: "{typography.ui}"
    rounded: "{rounded.control}"
    padding: "13px 18px"
  button-primary-hover:
    backgroundColor: "{colors.pine-deep}"
  button-ghost:
    backgroundColor: "{colors.slot-mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "13px 18px"
  button-ghost-hover:
    backgroundColor: "{colors.pine-mist}"
    textColor: "{colors.pine}"
  button-urgent:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    height: "40px"
    padding: "0 13px"
  button-urgent-hover:
    backgroundColor: "{colors.crimson-deep}"
  time-slot:
    backgroundColor: "{colors.slot-mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 0"
  time-slot-selected:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.white}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  booking-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "62px"
    padding: "0 16px"
  booking-row-hover:
    backgroundColor: "{colors.pine-mist}"
  content-card:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "18px"
  urgent-panel:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px 18px"
  night-note:
    backgroundColor: "{colors.pine-night}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "16px"
---

# Design System: Доктор Вет

## Overview

**Creative North Star: "The Open Front Desk"**

The page behaves like the reception of a large, well-run 24/7 clinic: light, quiet, and organised, with the next free appointment already lying on the counter. A big real-scene photograph carries the warmth; a white card set over it carries the work (headline, the emergency number, and the full booking block). Everything after the first screen is calm reference material: who we treat, directions, when to come without booking, one big proof number, the two clinics, reviews, articles, and a deep-pine footer with every phone number.

The palette is white and pale green-grey with one pine green for action and one crimson reserved for emergencies. Type pairs a bookish serif (Spectral) for headings and big numbers with a clear Cyrillic grotesque (Golos Text) for every interface word. Corners are soft and nested (10 / 12 / 16 / 24 / 28px); surfaces are flat tinted panels, and only the things you act on (the booking panel, the hero card, popovers) lift off the page.

Density is moderate and mobile-first: large tap targets (62px booking rows, 40–42px header controls), ruled lists instead of card grids for anything that is a list of links, and generous section spacing (56px mobile, 80px from 760px).

**Key Characteristics:**
- White page, pine green for action, crimson only for "now".
- Spectral headings and numerals over Golos Text interface.
- Booking card over a large photograph on desktop; photo-then-sheet on mobile.
- Flat tinted panels; shadow only on action surfaces.
- Hairline-ruled rows for services, articles, hours, phones.
- Soft nested radii, never pills.

## Colors

A cool white-and-sage clinic palette: one deep pine for doing, one crimson for urgency, and pale green-greys for every resting surface.

### Primary
- **Pine** (#1F5A4C): every primary action (Записаться, Записаться сюда, the booking submit), selected time slot, text links and "more" arrows, the big proof numeral, focus outlines, and the browser theme colour.
- **Deep Pine** (#174538): hover and pressed state of pine actions only.
- **Pine Night** (#12342C): large dark bands: the footer and the after-21:00 night note. Also the tint behind photo captions.

### Secondary
- **Crimson** (#C6204A): the logo's cross colour, carried into the "Срочно" header button, the urgent 7031 strip in the hero, the cross bullets and the 64px phone numeral in the urgent section, map-pin icons there.
- **Deep Crimson** (#A5183B): hover of crimson buttons.
- **Rose** (#FBEFF2): the background of every urgent surface (hero urgent strip, urgent section panel).

### Neutral
- **White** (#FFFFFF): page, hero card, booking panel, inputs.
- **Tint** (#F5F8F6): resting content cards (species, clinics, reviews), row hover in ruled lists.
- **Slot Mist** (#F0F4F2): unselected time slots, pet buttons, ghost buttons, the clinic segmented-control track.
- **Pine Mist** (#EAF4EF): hover on booking rows and slots, the booking summary box, selected pet, the input focus halo.
- **Ink** (#15232B): text and headings.
- **Ink Soft** (#4D5C64): secondary text, sub-lines, metadata, chevrons.
- **Label Sage** (#5B7169): small tracked field labels.
- **Rule** (#DDE4E1): hairlines between rows and around panels.
- **Rule Strong** (#C5D0CB): outlined controls (header phone and menu buttons, input borders).
- **Status Green** (#1E8A5A): the "open" dot and the confirmation stamp.

### Named Rules
**The Crimson Means Now Rule.** Crimson and rose appear only where the message is "come or call now": the urgent button, the 7031 strip, the urgent section. Never on promotions, decoration, or ordinary errors.

**The Pine Acts Rule.** If it is pine, it can be pressed or it is the one proof number. Resting surfaces are white or pale sage, never pine-filled except the footer and the night note.

**The Logo Is Untouched Rule.** The existing logo (crimson cross with paw, blue wordmark) is used as delivered; its blue is not part of the interface palette.

## Typography

**Display Font:** Spectral 500/600 (with Georgia, serif)
**Body Font:** Golos Text 400–700 (with system-ui, sans-serif)

**Character:** A calm book serif gives headings a considered, medical-record seriousness; Golos Text, drawn for Cyrillic, keeps every field, time and phone number plain and legible for older owners.

### Hierarchy
- **Display** (600, 32px mobile to 46px desktop, 1.06, -0.015em): the hero H1 only, balanced wrapping.
- **Numeral** (600, 104px to 168px, 0.9, -0.04em): one big proof number per page, in pine. The urgent 7031 uses the same face at 64px in crimson.
- **Headline** (600, 28px to 36px from 760px, 1.1, -0.012em): section H2s, balanced wrapping.
- **Title** (600, 22–24px): card titles (species, clinic address, featured article, booking block heading, confirmation).
- **Body** (400, 16px, 1.5): running text; review quotes at 17px; lead under the hero at 17px on desktop; long paragraphs capped near 34em.
- **UI** (600, 14.5–16px): buttons, slot times, list-row titles, nav (500, 15px).
- **Label** (600, 11.5px, 0.08em, uppercase, Label Sage): field labels in the booking block and form, footer column heads, the phone-sheet heading. Never placed above a headline.

### Named Rules
**The Serif Speaks, Sans Works Rule.** Spectral is for headings and numbers that persuade; anything you read to act (fields, times, phones, buttons) is Golos Text.

**The Tabular Times Rule.** Times, phone numbers and hours use tabular figures so columns of slots and numbers align.

## Layout

A single centred column, max 1240px, with 16px gutters on phones, 28px from 760px, 32px from 1024px. Sections are stacked with 56px top spacing on phones and 80px from 760px; the footer sits 72px below the last section.

Breakpoints: 760px (tablet: two-column clinics, reviews, articles; three-column species; urgent panel splits list / call) and 1024px (desktop: full nav, header Записаться, hero overlay).

The hero changes form across breakpoints. On phones the photograph runs full-bleed at 300px tall and the white hero card slides over its bottom edge by 28px with top-only 24px corners, like a sheet. On desktop the photograph becomes a 28px-rounded panel at least 760px tall, offset 300px from the left, and the white hero card (max 560px) overlaps its left edge, holding H1, sub-line, the urgent strip, and the booking block.

Lists of links are ruled rows: services in two columns (three on desktop), articles beside one featured image, clinic hours as a two-column definition list, phones as label/value rows. Horizontal swipe with scroll-snap is used once, for the species cards on phones (80% card width); it becomes a grid from 760px.

**The Ruled List Rule.** A list of destinations is a stack of hairline-ruled rows with an arrow, not a grid of cards. Cards are for things with a photograph or a body of text.

## Elevation & Depth

Mostly flat and tonal: content cards sit on Tint without shadow, and separation comes from hairline rules and pale fills. Shadow is reserved for surfaces you operate: the booking panel, the floating hero card on desktop, the phone popover, and the selected segment in the clinic switch. The sticky header is translucent white with a 10px backdrop blur and a single bottom rule.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 2px rgba(21,35,43,.05), 0 14px 36px rgba(21,35,43,.09)`): booking panel on mobile, phone popover.
- **Hero lift** (`box-shadow: 0 2px 4px rgba(21,35,43,.05), 0 30px 60px rgba(21,35,43,.16)`): the desktop hero card over the photograph only.
- **Segment** (`box-shadow: 0 1px 3px rgba(21,35,43,.12)`): the selected option in a segmented control.

### Named Rules
**The Lift Means Act Rule.** A shadow says "you can work here". Informational cards (species, clinics, reviews) stay flat on Tint.

## Shapes

Soft, nested corners that step down as elements nest: 28px for the hero card and hero photo on desktop, 24px for content cards, the urgent panel and featured images, 16px for photo tiles and the night note, 12px for every control (buttons, inputs, header controls, segmented track, summary box), 10px for time slots and pet buttons, 50% only for doctor avatars and the status dot. Borders are 1px hairlines in Rule; outlined controls use Rule Strong. Icons are hand-drawn SVG line icons at 1.8 stroke with round caps; the emergency cross and stars are solid.

**The Nested Radius Rule.** An inner element always has a smaller radius than its container (hero 28 > card 24 > tile 16 > control 12 > slot 10). No full-pill shapes.

## Components

### Buttons
Quiet and solid; colour carries meaning, not size.
- **Shape:** gently rounded rectangle (12px); the booking submit uses a slightly softer 14px and spans the panel.
- **Primary:** Pine with white UI text, 13px 18px padding; header version 42px tall.
- **Hover / Focus:** background shifts to Deep Pine over 0.2s; focus is a 2px Pine outline offset 2px.
- **Ghost:** Slot Mist with Ink text; hover turns Pine Mist with Pine text. Used beside a primary (Маршрут next to Записаться сюда).
- **Urgent:** Crimson with white text and a solid cross icon, 40px tall, hover Deep Crimson. Only in the header.
- **Outlined control:** white with a Rule Strong border (header 7031 and menu buttons).
- **Disabled:** flat #C9D3CF with not-allowed cursor.
- **Text link ("more"):** Pine 15px 600 with a line arrow that nudges 3px right on hover.

### Booking Panel (signature)
The core of the system: a white panel (20px corners, Rule border, Panel shadow on mobile; borderless inside the hero card on desktop) holding, in order:
- **Clinic switch:** a three-way segmented control on a Slot Mist track (12px), selected segment white with Pine text and the Segment shadow.
- **Choice rows:** service, doctor, date as 62px rows with a 70px tracked label column, the current value with a muted sub-line, and a chevron; the native select is invisible over the whole row. Hover or focus fills Pine Mist. Doctor rows show a 36px round portrait.
- **Time grid:** four columns of Slot Mist slots (10px), tabular 15px 600; hover Pine Mist, selected solid Pine. Slots enter with a 0.32s rise.
- **Summary:** Pine Mist box (12px) restating the choice; then a full-width Pine submit that names the time ("Записаться на 16:30").
- **Contact step:** 17px inputs with Rule Strong border; focus turns the border Pine with a 3px Pine Mist halo. Pet type is three Slot Mist buttons; selected gets Pine Mist with an inset 1.5px Pine ring.
- **Confirmation:** a round line stamp "ЗАПИСАН" in Status Green, rotated -10deg, above the summary.

### Urgent Strip and Urgent Panel
- **Strip:** a Rose row (14px corners) with a crimson cross, a one-line promise, and 7031 in crimson at 17px; the whole row is a tel: link.
- **Panel:** Rose (24px), list of signs with crimson cross bullets on rose-tinted hairlines; on tablet a vertical rule splits off the call column with the 64px crimson 7031 and route links.

### Night Note
A Pine Night block (16px) with a pale-mint moon icon that replaces urgency anxiety after 21:00: "можно приезжать без записи". Appears in the hero card only at night.

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** Tint, flat.
- **Border:** none; inner hours and lists use Rule hairlines.
- **Internal Padding:** 16–20px; photograph first, edge to edge, then body.
- **Photo tiles:** 16px corners with a caption on a pine-black gradient at the bottom.

### Inputs / Fields
- **Style:** white, 1px Rule Strong, 12px corners, 12px 14px padding, 17px text.
- **Focus:** Pine border plus 3px Pine Mist halo; no default outline.

### Navigation
- **Header:** sticky, 62px (72px desktop), translucent white with blur and a bottom rule. Logo, then (desktop) five text links in Ink Soft 15px 500 turning Pine on hover, a green "Круглосуточно" status dot, the outlined 7031 button that opens a phone popover, the crimson Срочно, and the Pine Записаться.
- **Mobile:** logo, Срочно, and a 42px outlined menu button opening a full-width sheet of 18px 600 ruled links followed by all phone numbers.

### Footer
Pine Night band with mint-tinted text (#E3EEE9 body, #9CC2B2 labels), four columns from 760px: brand, all call-centre phones as ruled label/value rows, clinics and client links, company links; legal line under a translucent rule.

## Do's and Don'ts

### Do:
- **Do** put the next free time and the booking block in the first screen, inside the white card over the photograph.
- **Do** keep crimson (#C6204A) and rose (#FBEFF2) for emergency content only; show 7031 wherever urgency is mentioned.
- **Do** use Spectral 600 for headings and the single proof numeral, Golos Text for every control, time and phone.
- **Do** nest radii downward (28 / 24 / 16 / 12 / 10px) and keep controls at 12px.
- **Do** set link lists as hairline-ruled rows with a line arrow.
- **Do** keep content cards flat on Tint; reserve shadow for the booking panel, the hero card and popovers.
- **Do** keep tap targets at 40px or more and booking rows at 62px.
- **Do** caption any temporary photograph as temporary on the image itself.

### Don't:
- **Don't** build the clinic-template hero: headline left, photo right, two buttons, a row of four stat boxes (rejected by the user).
- **Don't** use pill-shaped chips or tags (rejected by the user); segmented controls and slots stay rounded rectangles.
- **Don't** put an uppercase kicker above a headline; tracked labels belong to fields and footer columns only.
- **Don't** move the interface to navy, blue-plus-grey, navy-plus-crimson or cream palettes (rejected by the user).
- **Don't** present stock animals or staff as the clinic's own; real clinic photography replaces stock, and stock stays labelled until then.
- **Don't** use crimson for decoration, sales or star ratings.
- **Don't** recolour or redraw the logo.
