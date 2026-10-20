# Cielo Magno for Senator 2028 — Official Campaign Build

## Status

This is the **official campaign website** of Dr. Cielo Magno for Senator 2028.

- `campaign.publicRelease` is **true**.
- `campaign.authorized` is **true**.
- `campaign.candidateConfirmed` is **true**.
- The site presents Dr. Magno as a candidate for Senator in 2028.
- `index.html` carries `index, follow`.
- `public/robots.txt` allows all crawlers.
- `public/_headers` does not add an `X-Robots-Tag`.
- There are **no analytics, no donation links, and no data collection**. The optional sign-up form renders only when `VITE_CAMPAIGN_FORM_ENDPOINT` is configured.
- The “Private review build” chip is suppressed while all three release flags remain `true`.

## Preview

```bash
npm install
npm run dev
```

Production check:

```bash
npm run typecheck
npm run build
npm run preview
```

## What is verified

The following figures come from the 19-page source CV and the existing data layer:

- 25+ years in economics.
- 39 research outputs.
- 86 speaking engagements: 25 international, 61 domestic, 17 international cities.
- 19 CV pages and 125 CV entries.
- 1 resignation on principle (Department of Finance, September 2023).

The following quotes and public-record claims are linked in the build:

- **“I miss teaching.”** — Cielo Magno, Facebook post, Sept. 1, 2023, reported by Interaksyon, Sept. 8, 2023:
  https://interaksyon.philstar.com/politics-issues/2023/09/08/259905/cielo-magnos-exit-a-closer-look-at-facebook-post-that-sparked-her-dof-departure/
- **“Hindi naman pwedeng manahimik na lang ako para mag stay ako…”** — Cielo Magno, 24 Oras interview, GMA Integrated News, Sept. 12, 2023:
  https://www.gmanetwork.com/news/topstories/nation/881959/cielo-magno-says-she-had-to-speak-up-vs-rice-price-cap/story/
- **₱89.9-billion PhilHealth transfer** — Inquirer, Aug. 2, 2024; Cielo Magno is listed among the petitioners:
  https://newsinfo.inquirer.net/1968876/petition-filed-at-sc-vs-philhealth-fund-transfer-cites-constitutionality
- **OVP confidential funds** — Philstar, Nov. 8, 2023; the Nov. 7, 2023 petition challenged the 2022 ₱125-million transfer, and the case is a challenge, not a court finding:
  https://www.philstar.com/headlines/2023/11/08/2309742/sc-asked-declare-saras-secret-funds-unconstitutional
- **₱26-billion AKAP allocation** — News5, July 3, 2025:
  https://news.tv5.com.ph/breaking/read/groups-professors-ask-sc-to-declare-parts-of-2025-budget-unconstitutional
- **Political dynasty petition** — Supreme Court press briefer, Apr. 8, 2025:
  https://sc.judiciary.gov.ph/press-briefer-april-08-2025/
- **2025 General Appropriations Act** — Department of Budget and Management:
  https://www.dbm.gov.ph/index.php/budget-documents/2025/2025-general-appropriations-act

The following verified official social media accounts are exposed across the site (audited against the live profiles in October 2026):

- **Facebook**: `https://www.facebook.com/cielomagno` (`cielomagno`) — 211,711 followers, active.
- **TikTok**: `https://www.tiktok.com/@profcielomagno` (`@profcielomagno`) — 141.7K followers, latest indexed video October 10, 2026.
- **X (formerly Twitter)**: `https://x.com/profcielomagno` (`@profcielomagno`) — 19K followers; reachable, latest public posts dated September 2025.
- **Instagram**: `https://www.instagram.com/profcielomagno` (`@profcielomagno`) — active, indexed posts through October 2026.
- **YouTube**: `https://www.youtube.com/@Profcielomagno` (`@Profcielomagno`) — active, daily uploads.
- **Linktree (Official Hub)**: `https://linktr.ee/cielomagno` (`cielomagno`) — live, but its own outbound X, TikTok, and legacy `@Profcielo` YouTube links are stale and must be updated by the campaign team.

> **Handle audit (Oct 2026):** the previous `tiktok.com/@profcielo`, `x.com/cielo_magno`, and `instagram.com/magno.cielo` links were dead or dormant. The site now points at the active `profcielomagno` handles on TikTok, X, Instagram, and YouTube; Facebook remains `facebook.com/cielomagno`.

The build intentionally does **not** claim “100+ papers,” “0 compromises,” or any electoral mandate.

## Photo credits & licensing

The campaign build uses one official campaign portrait plus six openly licensed or public-domain context photographs. All files are served locally under `public/images/` and indexed in `src/data/imageCredits.ts`:

- **Candidate portrait (3 derivatives)** — the official 863 × 863 profile photo from Dr. Magno’s verified [Linktree profile](https://linktr.ee/cielomagno), used for the dossier banner, the full-frame download, and the 1200 × 630 social card. The portrait is **campaign media**, not an openly licensed image; final publication approval and photographer credit are pending.
- **Institutions (2)** — UP School of Economics, José Encarnación Jr. Hall by **Brly31415** (**CC BY-SA 4.0**); Supreme Court of the Philippines by **Mike Gonzalez (TheCoffee)** (**CC BY-SA 3.0**).
- **Policy pillars (4)** — barangay health workers in General Trias by **Avito C. Dalan / Philippine News Agency** (**public domain**); palay drying in Angat by **FBenjr123** (**CC BY-SA 4.0**); Eagle Cement quarry by **Lawrence Ruiz** (**CC BY-SA 4.0**); UP Diliman Academic Oval by **Ralff Nestor Nacor** (**CC BY-SA 4.0**).

The footer’s **Photo credits & licenses** modal lists every file, source, rights status, and change note. It links to the full-resolution official portrait and to the official profile hub. Attribution does not imply that any photographer, publisher, or institution endorses Dr. Magno or this campaign.

All web files were resized or recompressed (the dossier portrait was also cropped) and had metadata stripped. The six context derivatives remain available under their original licenses. The official portrait is campaign media and is **not** covered by those open licenses.

## What is draft and needs sign-off

1. **The five policy pillars** — Kalusugan, Hindi Negosyo; Bawal ang Budol sa Budget; Pagkain at Magsasaka; Yaman ng Bayan para sa Bayan; Kabataan at Marangal na Sahod.
2. **Hero language** — “May Bagong Option Na Kayo.” and the line “Ekonomista. Propesor. Dating Undersecretary. May resibo. May prinsipyo. May plano.”
3. **The positioning line** — “Not a celebrity. Not a dynasty. A public finance professor.”
4. **The campaign tone** — “Bawal ang budol,” “May resibo,” and the youth-organizing calls to action.
5. **The 2028 agenda details** — the planks are anchored to public sources, but the final policy language has not been approved.
6. **The visual system** — typographic masthead, original SVG stickers, and the refined Plus Jakarta Sans / Newsreader / Instrument Serif / JetBrains Mono editorial palette. The campaign build now uses Dr. Magno’s official Linktree profile photo; an approved campaign logo and party mark are still absent.
7. **The contact path** — the site currently uses Dr. Magno’s academic email for press and invite requests. A campaign email and form endpoint are not configured.
8. **Any statement that she is a candidate** — `candidateConfirmed` is now `true`, so the site presents the candidacy as confirmed; the final announcement language still needs sign-off.

## Release checklist

1. `publicRelease`, `authorized`, and `candidateConfirmed` are set to `true` in `src/data/campaignData.ts`.
2. `index.html` carries `index, follow`; `public/robots.txt` allows crawlers; `public/_headers` omits `X-Robots-Tag`.
3. Confirm written approval for the official profile portrait and social card, confirm the photographer credit, convert the root-relative `og:image` and `twitter:image` paths in `index.html` to absolute production URLs, and add the approved logo/party mark.
4. Replace the original sticker pack with approved campaign assets if required.
5. Copy `.env.example` to `.env.local`, then add a campaign email and, if needed, `VITE_CAMPAIGN_FORM_ENDPOINT`.
6. Run a Philippine election-law and campaign-finance review, including the paid-for disclaimer and social-media disclosure rules.
7. Run `npm run typecheck && npm run build`; smoke-test CV PDF/ZIP, external source links, keyboard access, and mobile layouts.

## If Dr. Magno declines

Do not publish. The cleanest removal path is:

1. Restore the prior portfolio snapshot, if available.
2. Otherwise remove the campaign layer:
   - `src/data/campaignData.ts`, `socialLoreData.ts`, `platform2028Data.ts`, `budgetData.ts`, `youthMovementData.ts`
   - `src/components/Why2028.tsx`, `ViralMoments.tsx`, `Platform2028.tsx`, `BudolDecoder.tsx`, `YouthJoinPanel.tsx`, `SupplyDemandCard.tsx`, `CampaignTicker.tsx`, `PrivatePreviewBadge.tsx`, `ReleaseGuard.tsx`, `CampaignSignup.tsx`
   - `public/campaign/`
3. Revert the campaign imports and section order in `src/App.tsx`, `Hero.tsx`, `Navbar.tsx`, `MobileMenu.tsx`, `Footer.tsx`, `ImpactStrip.tsx`, `ResearchVault.tsx`, `SpeakingSection.tsx`, `MediaSection.tsx`, `ContactSection.tsx`, `siteData.ts`, `types.ts`, `index.html`, and `index.css`.
4. Keep the 19-page CV PDF/ZIP and the CV modal if the portfolio is retained.

## QA log

- `npm run typecheck` — passes.
- `npm run build` — passes.
- No console or page errors.
- No horizontal page overflow at 1536, 1440, 1280, 1024, 768, 640, 390, 375, or 320 px.
- CV PDF and ZIP still serve; 19 page options still work.
- Chart toggle, quiz verdicts, source links, budget allocator, research-topic jump, join-tab CTA, and pledge state work.
- The sign-up form is gated behind `publicRelease`, `authorized`, `candidateConfirmed`, and `VITE_CAMPAIGN_FORM_ENDPOINT`; its POST path was verified with a mock endpoint.
- Sticker pack ZIP and discussion guide return HTTP 200.
- No `<form>` elements render without a configured form endpoint.
- `index, follow` present in the production build.
- All nine photo derivatives (18 files with thumbnails) return HTTP 200; the official dossier portrait, four pillar photos, UPSE image, and Supreme Court receipt thumbnails decode on desktop and mobile in dark and light themes.
- The footer **Photo credits & licenses** modal opens, traps focus, scrolls to the bottom, lists all 9 credits with 17 external source/license links and 3 campaign-media rights notes, downloads the full-resolution official portrait, and closes on Escape. Lazy thumbnails load 9/9 after scrolling; the dialog has no horizontal overflow at 390 px.
- The official Linktree portrait replaces the Commons review crop in the dossier, full-frame download, and OG card. The dossier is now the permanent hero card (the Rice Graph tab/switcher has been removed so the dossier and portrait are displayed cleanly without extra toggling). The dossier caption uses fixed cream text over the photo gradient, so it stays legible in dark and light themes.
- The dossier seal was moved from the card’s top-right overlay into the contact footer; it no longer covers the “2026” label at 640–1536 px.
- The Hero Dossier now leads with Dr. Magno’s 3-bullet 2028 voter track record (`Track Record` / `Roles` toggle), links to her official Linktree social channels, and pairs a primary **Join the Movement** CTA with the **Download the CV** action.
- `YouthHub` and `YouthJoinPanel` now include a nationwide **2028 People’s Coalition** sector selector (Voters & Families, Health Workers & Patients, Workers/Farmers/Commuters, Students/Teachers/Youth, and Overseas Filipinos & Civic Orgs) plus an always-visible coalition callout banner so scrolling visitors can join directly by sector.
- A persistent **`EN / FIL`** language toggle in `Navbar` and `MobileMenu` switches the Hero, Candidate Dossier, Impact Strip, Why 2028, Viral Moments, 2028 Agenda planks, Budol Decoder (Resibo Quiz & Budget Allocator), Coalition Hub, and Contact section between English and Filipino/Taglish.
- `ImpactStrip` now leads with voter-stakes public fights (`₱89.9B` PhilHealth funds defended, `₱26B` budget insertions challenged, `1` Cabinet resignation on principle, and `25+` years in public finance with 39 research outputs & 86 forums linked directly to their sources), while `Hero`, `Why2028`, and `YouthJoinPanel` ground the messaging in household accountability and direct social-channel mobilization.

## Open questions

1. Is the “nepo baby / Milan Declaration” line approved, and is there an original post/video to cite?
2. Which official campaign logo and party mark should replace the typographic placeholders, and who should be credited for the official portrait?
3. What is the campaign email and, if applicable, the form endpoint?
4. Does Dr. Magno approve all five pillars and the final policy language?
5. Local demo, password-protected staging, or recorded walkthrough for the review?
6. Has the campaign approved the official Linktree portrait for public use, and is there a preferred photographer credit or alternate official portrait?
7. What production domain should the absolute Open Graph/Twitter image URLs use?
