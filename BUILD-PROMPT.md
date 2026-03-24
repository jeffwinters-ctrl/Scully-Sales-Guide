# Abstrakt SalesDeck Coach — Complete Build Prompt

Build a web application called "Abstrakt SalesDeck Coach" for Abstrakt Marketing Group. Sales reps (BDRs / Market Development reps) use this app during live 19-minute prospect Zoom calls. It guides them slide-by-slide through the Outbound SDR pitch deck, showing the exact word track on the right side and relevant objection handling for each slide.

---

## COMPANY CONTEXT

- **Company:** Abstrakt Marketing Group — a business growth agency specializing in outbound sales pipeline development (Outbound SDR)
- **Founded:** 2009 in St. Louis, MO
- **Size:** 500+ US-based employees, 1,750+ partners across all 50 states and Canada
- **Service:** Omni-channel outbound lead generation — they build a prospect database, run email + phone + direct mail + LinkedIn outreach, qualify leads, nurture over time, and book qualified sales appointments on the client's calendar
- **Key differentiator:** Market exclusivity — one client per industry per metro market
- **Pricing:** $5,250–$13,250/mo depending on tier (Starter to Enterprise), 13-month agreement
- **Target buyer:** Business owners and sales leaders at B2B companies (mechanical contractors, commercial services, industrial firms, etc.)
- **Awards:** Inc. 5000 list 10x (top 0.5%), 200+ awards in 15 years, Top Workplace 15 years
- **The pitch** is a structured 19-minute presentation delivered via Zoom screen share
- **Bracketed placeholders** like [Market], [Industry], [Prospect Name], [Competitor Names] appear throughout the word tracks. These are meant to be filled in live by the rep during the call. The app should render them in a visually distinct style (highlighted background, bold) so the rep knows to substitute their own value.

---

## COLOR SCHEME & DESIGN SYSTEM

### Primary Palette
| Token | Value | Usage |
|---|---|---|
| Background (main) | `#0A0A0A` | Page background |
| Background (panels) | `#111111` | Left/right panels, top/bottom bars |
| Background (cards) | `#1A1A1A` | Elevated surfaces, slide card |
| Background (hover) | `#222222` | Hover states |
| Primary accent | `#E63946` | Bold red — buttons, active states, borders |
| Primary accent hover | `#FF4D5A` | Lighter red on hover |
| Primary accent muted | `rgba(230,57,70,0.15)` | Red tint for active slide highlight bg |
| Text primary | `#FFFFFF` | Main body text |
| Text secondary | `#999999` | Subtitles, labels |
| Text muted | `#666666` | Inactive tabs, minor labels |
| Border color | `#2A2A2A` | Dividers, card borders |
| Border active | `#E63946` | Active element borders |
| Stage direction / coaching | `#FFA726` | Amber — cues like "LET THEM ANSWER" |
| Success | `#4CAF50` | Progress complete indicators |

### Typography
- **Font stack:** `'Inter', 'Segoe UI', -apple-system, sans-serif` (import Inter from Google Fonts)
- **Slide title:** 24px, weight 700, `#FFFFFF`
- **Word track body:** 16px, weight 400, line-height 1.7, `#FFFFFF`
- **Stage directions:** 14px, italic, `#FFA726` (amber), with left border accent bar
- **Prospect questions to ask:** 15px, italic, `#E63946`
- **Objection question:** 15px, weight 600, `#E63946`
- **Objection response:** 15px, weight 400, line-height 1.6, `#CCCCCC`
- **Thumbnail labels:** 12px, weight 500
- **PIN screen title:** 32px, weight 700
- **Stats/numbers in slides:** 36px, weight 800, `#E63946`

### General Styling
- Border radius cards/panels: `8px`
- Border radius buttons: `6px`
- Box shadows: `0 2px 8px rgba(0,0,0,0.3)`
- Transitions: `all 0.2s ease`
- Scrollbars: thin, dark track, red thumb
- Flat design with subtle depth via shadows — no gradients

---

## APP LAYOUT — DESKTOP (viewport >= 1024px)

Full-viewport three-panel design. No page-level scrolling — each panel scrolls independently.

```
+-------------------------------------------------------------+
| TOP BAR (48px height, #111111 bg)                           |
| Left: "Abstrakt SalesDeck Coach" (16px bold, red accent)    |
| Center: "Slide X of Y" + elapsed timer (MM:SS)             |
| Right: Progress bar (thin red fill) + "Lock" icon/logout    |
+-------------------------------------------------------------+
| LEFT PANEL    | CENTER PANEL           | RIGHT PANEL        |
| (220px fixed) | (flexible, fills rest) | (380px fixed)      |
| Slide thumbs  | Current slide content  | Word Track &       |
| with numbers  | displayed large        | Objections tabs    |
| Scrollable    | Vertically centered    | Scrollable         |
+-------------------------------------------------------------+
| BOTTOM BAR (48px height, #111111 bg)                        |
| Left: "< Previous" button                                   |
| Center: Slide dots (clickable)                              |
| Right: "Next >" button                                      |
+-------------------------------------------------------------+
```

### LEFT PANEL — Slide Navigation
- 220px wide, fixed, `#111111` background
- Vertical scrollable list of slide thumbnails
- Each thumbnail: card (190px wide, ~60px tall) showing slide number + title (truncated with ellipsis)
- Active slide: background `rgba(230,57,70,0.15)`, left border `3px solid #E63946`, white text
- Inactive: transparent bg, `#999999` text, left border `3px solid transparent`
- Hover: background `#1A1A1A`
- Click any thumbnail to jump to that slide
- Panel auto-scrolls to keep the active slide visible

### CENTER PANEL — Slide Display
- Flexible width (fills between left and right panels), `#0A0A0A` background
- Content centered inside a card: max-width `800px`, padding `48px`, background `#1A1A1A`, border-radius `12px`, box-shadow
- Slide title at top: 24px bold white, bottom border `2px solid #E63946`, padding-bottom `16px`
- Slide body below title: supports bullet points, paragraphs, bold text, stats displayed large
- Stats/numbers render at 36px bold red for visual impact
- Fade transition (opacity 0 to 1 over 200ms) when changing slides

### RIGHT PANEL — Word Track & Objections
- 380px wide, fixed, `#111111` background
- Two tabs at top: **"WORD TRACK"** (default active) | **"OBJECTIONS"**
- Active tab: red bottom border `3px`, white text
- Inactive tab: no border, `#666666` text, hover turns white
- Tab content area scrolls independently

**WORD TRACK TAB:**
- Full verbatim script for the current slide
- Comfortable reading typography (16px, line-height 1.7)
- **Key phrases** wrapped in `<mark>` styled with `rgba(230,57,70,0.25)` background, white text
- **Stage directions** (like `[[LET THEM ANSWER]]`, `[[PAUSE]]`) rendered in amber `#FFA726`, italic, inside a distinct box with left border accent (4px solid amber, `rgba(255,167,38,0.1)` background, padding 8px 12px)
- **Questions to ask the prospect** rendered in italic red `#E63946` with a "?" icon prefix
- **Transition line** at the bottom in italic, separated by a subtle divider — the sentence bridging to the next slide
- Small **"Copy"** button (clipboard icon) in the top-right corner to copy word track text

**OBJECTIONS TAB:**
- Lists 2-4 objections per slide in expandable accordions
- Collapsed: objection text in `#E63946` with chevron arrow
- Expanded: response text in `#CCCCCC` below, structured with labeled steps:
  - **ACKNOWLEDGE** (label, italic)
  - **REFRAME** (label, bold)
  - **REDIRECT** (label)
  - **CLOSE** (label, red text)
- Only one accordion open at a time

### TIMER
- Starts automatically when rep passes the PIN screen
- Displays `MM:SS` elapsed time in the top bar center area
- **0:00–14:59** — white text (normal)
- **15:00–18:59** — amber text `#FFA726` (warning, approaching 19 min limit)
- **19:00+** — red text `#E63946` (over time)
- No auto-actions, just visual cue

---

## RESPONSIVE LAYOUTS

### Tablet (768px – 1023px)
- Left panel collapses to a hamburger menu / slide-out drawer
- Center panel takes full width
- Right panel becomes a slide-up bottom sheet (70% viewport height) triggered by a floating red **"Script"** button (56px round, bottom-right corner)
- Bottom nav bar with Previous/Next remains

### Mobile (< 768px)
- Single column layout
- Top: slide title + number
- Middle: slide content (full width, reduced padding)
- Bottom: fixed bar — `"< Prev"` | `"Script"` (opens full-screen modal) | `"Next >"`
- Swipe left/right on slide content to navigate

---

## PIN AUTHENTICATION SCREEN

- Full-screen, centered card on `#0A0A0A` background
- Card: `400px` max-width, `#1A1A1A` background, `12px` radius, `48px` padding
- **"Abstrakt SalesDeck Coach"** title (32px bold, white) with red accent line below
- Subtitle: `"Enter your access code to continue"` (16px, `#999999`)
- PIN input: single text field, `type="password"`, 48px height, centered text (24px, letter-spacing 8px), `#0A0A0A` background, `#2A2A2A` border, red border on focus
- **"Enter"** button: full-width, `#E63946` background, white text, 48px height, hover `#FF4D5A`
- Wrong PIN: field border turns red, shake animation (CSS keyframe), error message `"Invalid access code"` in red
- Correct PIN: card fades out, app fades in, timer starts
- PIN checked via `POST /api/auth` against `ACCESS_PIN` in `.env`
- `sessionStorage` flag on success — no re-entry on refresh, clears when tab closes

---

## KEYBOARD SHORTCUTS

| Key | Action |
|---|---|
| `→` / `↓` | Next slide |
| `←` / `↑` | Previous slide |
| `1`–`9`, `0` (=10) | Jump to slide number |
| `T` | Switch to Word Track tab |
| `O` | Switch to Objections tab |
| `Escape` | Close modal/drawer (mobile/tablet) |
| `F` | Toggle fullscreen on center panel |
| `?` | Show keyboard shortcuts overlay |

---

## API ENDPOINTS

### POST /api/auth
- Body: `{ "pin": "string" }`
- Returns: `{ "success": true }` or `{ "success": false, "message": "Invalid access code" }`
- Checks against `ACCESS_PIN` in `.env`

### GET /api/slides
- Returns the full `slides.json` data
- Only accessible after valid PIN (simple check)

---

## FILE STRUCTURE

```
salesdeck-coach/
├── server.js              ← Express server, serves static files + API routes
├── public/
│   └── index.html         ← Full SPA (HTML + CSS + JS in single file)
├── data/
│   └── slides.json        ← All slide content, word tracks, objections
├── api/
│   └── auth.js            ← Vercel serverless function for PIN auth
│   └── slides.js          ← Vercel serverless function for slides data
├── .env                   ← ACCESS_PIN=XXXX (never committed)
├── .env.example           ← ACCESS_PIN=your-pin-here
├── .gitignore             ← Ignores .env and node_modules
├── package.json
├── vercel.json
└── README.md
```

---

## TECH STACK

- Node.js + Express backend
- Single `index.html` frontend (vanilla HTML/CSS/JS, no frameworks)
- `dotenv` for environment variables
- `cors` middleware
- Deployable to Vercel, Railway, or Render
- No external AI API calls — this is purely a content delivery app
- Must load fast (<2 seconds) since reps open it during live calls

---

## COMPLETE SLIDE CONTENT — ALL 18 SLIDES

Below is every slide with its exact content, full word track, and objections. Bracketed items like `[Market]`, `[Industry]`, `[Prospect Name]` are placeholders the rep fills in live — render them highlighted and bold in the UI.

---

### SLIDE 1 — "Welcome & Agenda"

**Content (type: mixed):**
```
Goal of this meeting is to determine if...
1. Yes, I want to secure a partnership
2. Yes, I'm interested but there is a next step
3. No, I'm not interested at this time

TODAY'S AGENDA
• About Abstrakt
• Your Current State
• Target Market Exclusivity
• Omni-Channel Process
• Team and Technology
• Investment Options
```

**Word Track:**
```
Hi, thanks for taking the time to chat! I know Seth, our market development manager, mentioned that we have something exciting happening in **[Market]**, and I'm eager to tell you more about it.

I'm looking forward to sharing a little bit more about Abstrakt but before we dive in — **What do you know about us, if anything, so far?**

[[LET THEM ANSWER]]

So, I'll provide some background on who we are and what we do. We are known as **Abstrakt Marketing Group**, and we consider ourselves a business growth agency.

Our specialization is in **sales pipeline management**, specifically generating qualified new leads in the marketplace. What sets us apart is that we already work with over 50 **[Industry]** companies throughout the US and Canada. For these firms, we build relationships with prospects in the market who could be in a buying cycle in the next 12 months.

That's the target database that we pursue.

We have developed a process to get in front of these prospective clients and set qualified sales meetings. This process involves a combination of phone calls, email marketing, and collateral all rolled into one. We refer to it as **omnichannel marketing**. I like to think of it as a bear hug — how can you wrap your arms around the top 1,000 or so companies in your marketplace to win more market share.

We work with our clients in a kind of special way. In each of our core industries, including **[Industry]**, we work with **one company per market**. Before we commit to a partnership, we meet with some of the big players in the area to figure out who would be the best fit for us and who we are fit for. We plan to find our partner in **[Market]** in the next couple of weeks. Since things can move quickly, **is there anyone else from your company who should be here to listen to this?**

So, in terms of a quick agenda for today:
1. Tell you about Abstrakt Marketing Group
2. Learn more about your business and sales process
3. Review Outbound SDR
4. Review investment options
5. Determine next steps — I'm not sure who the partner is going to be but I need to know the bucket when we get off the call.
```

**Transition:** "Let me start by telling you a little about who we are..."

**Objections:**
1. **"We only have 15 minutes"**
   - ACKNOWLEDGE: "Totally understand — I'll be respectful of your time."
   - REFRAME: "This will actually be one of the most valuable 15 minutes you spend this week. We designed this to be a tight 19-minute overview."
   - REDIRECT: "Let me focus on the parts most relevant to your business. What's your biggest priority — pipeline, closing, or bandwidth?"
   - CLOSE: "Let's dive in and I'll keep it tight."

2. **"Can you just send me a deck?"**
   - ACKNOWLEDGE: "Absolutely, I can do that."
   - REFRAME: "But the deck without context is like a prescription without a diagnosis."
   - REDIRECT: "Let me ask you two quick questions so I can tailor what I send you — that way it actually makes sense when you review it."
   - CLOSE: "Fair enough?"

3. **"Who else are you talking to in our market?"**
   - ACKNOWLEDGE: "Great question."
   - REFRAME: "I can't share specific names, but we are currently in discussions with about 12 companies in [Market]."
   - REDIRECT: "That's actually one of the things I'll cover today — our exclusivity model and why we limit to one partner per market."
   - CLOSE: "Let me walk you through it — it'll make a lot more sense in context."

---

### SLIDE 2 — "About Abstrakt"

**Content (type: mixed):**
```
ABOUT ABSTRAKT MARKETING GROUP

• Founded 2009 in St. Louis, MO
• 5 Divisions: Outbound | Inbound | Creative | Cloud | Talent
• 500+ U.S.-based team members
• 1,750 partners in all 50 states and Canada
• 2026 Projected Revenue: $75,000,000+

Timeline: 2009 → 2026 growth journey
```

**Word Track:**
```
We've been in business for **14 years**, and when we started, it was just three guys who all came from a variety of different backgrounds. They had all been a part of **hyper-growth companies** listed multiple times on lists of the fastest growing companies in the US.

They recognized a similar pattern that most companies experience when scaling — at the end of the day, in the B2B world, **there are three ways to grow.**

The first is **word-of-mouth and referral**, which, I'd argue, is the best way to grow. If you could do that alone, do it all day long. The challenge is that it's hard to hit goals if you're entirely relying on word-of-mouth and referrals because you're at the mercy of your network.

So outside of that, there are two other options: **pull or push marketing.**

The question becomes, how do we get the phones ringing or the forms filled? How do people find us? This is more traditional marketing — SEO, Google ads, social media, billboards, radio, TV, etc. This modality works better for residential markets. For example, in a city like LA, there are 20 million people; if I'm a consumer, I can just go to Google or Yelp and find a **[Industry]** near me.

But in **B2B or corporate accounts**, you have a much more sophisticated buyer and a much smaller audience — **a couple of thousand, not a couple of million.** And because they're savvier buyers, they often have relationships already in place. So it's more effective to go **outbound** to that audience than inbound, and build relationships.

The crux with outbound marketing historically is that most methodologies are average at best. You can cold call, send emails, send content — they're all just okay, not great.

So what we did was combine these methods **in the right cadence** to open doors, plant seeds, build relationships, and convert once a need or interest presents itself. We combined these methods to create a process we call **"Outbound SDR."**
```

**Transition:** "Here's the cool thing — we do it for ourselves..."

**Objections:**
1. **"We've never heard of you"**
   - ACKNOWLEDGE: "That's fair — we're headquartered in St. Louis and don't do a ton of consumer advertising."
   - REFRAME: "But we're actually one of the largest outbound lead gen companies in the US with 1,750 partners."
   - REDIRECT: "The reason you're hearing from us now is that we're actively looking for a partner in [Market] for [Industry]."
   - CLOSE: "Let me show you the results — that'll tell the story better than any brand awareness."

2. **"We already do outbound / we have SDRs"**
   - ACKNOWLEDGE: "That's great — sounds like you already believe in the outbound model."
   - REFRAME: "Most of our partners actually had some outbound in place before working with us. The difference is consistency and scale."
   - REDIRECT: "We work alongside in-house teams all the time. Let me show you how we complement rather than replace your people."
   - CLOSE: "Does it make sense to see how we could amplify what you're already doing?"

---

### SLIDE 3 — "Awards & Recognition"

**Content (type: stats):**
```
AWARDS AND RECOGNITION

• Inc. 5000 List — 10X (only 0.5% of recipients)
• Top Workplace — 15 Years
• 200+ Awards in 15 Years
• Growth, Innovation, and Workplace Awards

GROWTH USING OUR OWN PROCESS
We scaled from 60 to 600 employees using Outbound SDR.
Largest Marketing Company in St. Louis.
```

**Word Track:**
```
Here's the cool thing: **we do it for ourselves.** I'm sitting next to a director of Sales who has been here for 10 years, and when he started, we had 60 employees. Today, we're **600**. We literally **scaled from 60 to 600 using our own method.** Drinking our own champagne if you will.

We're the **largest Marketing Company in St. Louis**, and we've landed on **INC magazine's fastest-growing list 9 times** — that's in the **top 2% of recipients.** We're on track to hit a big milestone of $100 million by 2025.

But it's not all about the numbers. We care about our team and have won over **125 Business Growth, Innovation, and Top Workplace Awards.**

We've also niched down into specific industries, **[Industry]** being one. We have about **1,700 clients** in total and to my knowledge, we're one of the **largest outbound lead gen companies in the US.**
```

**Transition:** "So let me ask you a couple of quick questions to tailor this conversation to you..."

**Objections:**
1. **"Those are impressive numbers, but what about our specific industry?"**
   - ACKNOWLEDGE: "Great question — industry expertise matters."
   - REFRAME: "We've actually niched down specifically into [Industry]. We currently work with over 50 [Industry] companies nationally."
   - REDIRECT: "That means we already know your buyer, your sales cycle, and what messaging works."
   - CLOSE: "Let me show you some of the specifics as we go through the process."

2. **"How did you grow so fast — is the quality still there?"**
   - ACKNOWLEDGE: "That's the right question to ask."
   - REFRAME: "Our 92% client retention rate is the answer. We wouldn't keep 1,700 partners if the quality dropped."
   - REDIRECT: "And our appointment guarantee means we put our money where our mouth is."
   - CLOSE: "I'll walk you through that guarantee in the pricing section."

---

### SLIDE 4 — "Why Outbound SDR / Your Current State"

**Content (type: mixed):**
```
YOUR CURRENT STATE
Three ways to grow your business:

46.63% Outbound
27.62% Inbound
25.75% Upsell & Referral

OUTBOUND — Pro: Predictable / Con: Longer Sales Cycle
INBOUND — Pro: Shorter sales cycle / Con: Expensive and unpredictable
REFERRALS — Pro: Highest close rate / Con: Least predictable

Challenges of doing Outbound well:
• Lack of expertise
• Call reluctance
• Technology
• Consistent activity
• Turnover
• Bandwidth
```

**Word Track:**
```
So, a couple of quick questions to make sure I tailor this conversation to you.

Companies usually partner up with Abstrakt for a few reasons, and I'll bet at least one of these sounds familiar to you. They want to grow their business and:
• They're tired of relying just on referrals and word of mouth
• They want to give their sales reps more chances to sell
• They're swamped and don't have time to find new prospects

**Do any of these sound like you?**

[[LET THEM ANSWER]]

*What's driving you to solve this problem now? What's your typical deal size? How long do your customers stick around? What is your current revenue? What is your goal? What is your plan to hit that goal?*

[[LET THEM ANSWER — TAKE NOTES ON THEIR RESPONSES. THESE NUMBERS WILL BE USED LATER IN THE PRICING SLIDE.]]
```

**Transition:** "Thanks for sharing all that. Mind if I dive in and share a little more about us?"

**Objections:**
1. **"Referrals are working fine for us"**
   - ACKNOWLEDGE: "That's awesome — referrals are the best source of business, no argument there."
   - REFRAME: "The challenge is that referrals are the least predictable. You can't control when they come in."
   - REDIRECT: "What we hear from most of our partners is that referrals get them to a certain number, but they can't scale past it. Outbound fills that gap with predictable pipeline."
   - CLOSE: "If referrals could get you to your goal alone, would you already be there?"

2. **"We don't have a pipeline problem right now"**
   - ACKNOWLEDGE: "That's great to hear."
   - REFRAME: "Most companies we work with said the same thing — then had one bad quarter. The best time to build pipeline is when you don't desperately need it."
   - REDIRECT: "Think of it like marketing insurance — you never want to be in a position where you need leads and don't have them."
   - CLOSE: "What would a 20% drop in pipeline do to your revenue this year?"

3. **"We tried outbound before and it didn't work"**
   - ACKNOWLEDGE: "I hear that a lot, and I appreciate the honesty."
   - REFRAME: "Can I ask what that looked like? In most cases, what we find is that it was either inconsistent activity, bad data, or the wrong cadence."
   - REDIRECT: "Our process is different because we combine all channels in a specific sequence over 42+ touchpoints per prospect. Most outbound efforts stop at 4."
   - CLOSE: "Let me show you the data on that — it's eye-opening."

---

### SLIDE 5 — "Exclusive Market Initiative"

**Content (type: mixed):**
```
EXCLUSIVE MARKET INITIATIVE

• Your market is competitive
• You have a limited number of potential customers
• Your competitors are going after the same prospects
• Your next customer could be sitting with your competitor right now

Do you agree with the following?

WHO ARE YOUR MAIN COMPETITORS?
```

**Word Track:**
```
Thanks for sharing all that. Mind if I dive in and share a little more about us?

As I said earlier, what's unique about Abstrakt is that we work on a **market-exclusive basis**, and that's why we're reaching out to you. We're looking for a partner specifically in **[Market]**, which we consider the metro area.

**[Prospect Name]**, have you ever noticed that certain competitors always seem to be around? **Who comes to mind for you?**

[[LET THEM ANSWER — NAME DROP A COUPLE FROM YOUR RESEARCH]]

And look... we know the market is competitive. Candidly, everyone we approach on behalf of our clients is probably already working with one of the competitors you mentioned, or someone else. At the same time, all of your competitors, including you, are essentially competing for the same pie. To win our slice, if we were working with you and ten other **[Industry]** companies, we'd be competing against ourselves. **So we limit the number of partners we have in each market.**

I understand the following may come across as salesy, but that's not my intention. The reality is that once someone claims a market like **[Market]**, we close it off. We are currently in discussions with about **12 companies**, and once one of them commits to this market, we won't offer it to anyone else. For example, we already have partners in **[X, Y, and Z city]** so we won't bring on any more partners in those areas.

**[Prospect Name]**, does that make sense? Do you see where we're coming from with this whole "one company per market" thing?
```

**Transition:** "Great. Let me show you how our omni-channel process actually works..."

**Objections:**
1. **"That sounds like a pressure tactic"**
   - ACKNOWLEDGE: "I totally get how it could come across that way, and I appreciate you being direct."
   - REFRAME: "It's actually the opposite — the exclusivity protects you. If we took on 5 [Industry] companies in [Market], we'd be competing against ourselves and diluting results for everyone."
   - REDIRECT: "The companies that partner with us love this because it means we're fully aligned with their growth — not splitting our effort."
   - CLOSE: "Does that distinction make sense?"

2. **"Who else in our market are you talking to?"**
   - ACKNOWLEDGE: "I can't share specific names — we owe that same confidentiality to you."
   - REFRAME: "What I can tell you is we're in discussions with about 12 companies in [Market] right now."
   - REDIRECT: "The reality is, one of them will claim this market. The question is whether you want to be in the conversation."
   - CLOSE: "Let me keep going through the process and you can decide if it makes sense."

3. **"We don't believe in exclusivity agreements"**
   - ACKNOWLEDGE: "I understand the hesitation."
   - REFRAME: "The exclusivity actually benefits you — it means we never work with your competitor in your market. Your competitor can't access our database, our process, or our outreach on their behalf in [Market]."
   - REDIRECT: "Think of it as locking out the competition from this resource."
   - CLOSE: "Wouldn't you rather be the one who has it than the one competing against it?"

---

### SLIDE 6 — "Omni-Channel Process Overview"

**Content (type: mixed):**
```
OMNI-CHANNEL PROCESS

QUALIFY → INTRODUCE → NURTURE → APPOINTMENTS

Each quarter:
  LANDING PAGE → EMAIL → CALL 1 → CALL 2 → CALL 3 (repeated Q1-Q4)

INTRODUCE: CALL 1-10 + EMAIL + LANDING PAGE

INPUTS: Over 125 million records (ZoomInfo, Hoovers)
Real-time data from current campaigns:
  • 20,805,000 calls
  • 262,350,000 emails

NEW COMPANIES LAUNCHED INTO PROCESS MONTHLY
+ LinkedIn Connection & Messaging
+ Direct Mail
+ Email (17% open rate, .38% reply)
+ Outbound Calls (8% contact rate)
= 30% higher response + 50% more conversions
```

**Word Track:**
```
At a 30,000-foot view, our process begins with curating a **high-quality database** tailored to your Ideal Client Profile. Through strategic email outreach and persistent phone follow-ups, we nurture these leads, creating relationships in a sense. Ultimately, this meticulous approach translates to **qualified sales appointments**, setting you up for success.

Now, let's delve deeper into each phase.
```

**Transition:** "Let me dive into the nuts and bolts of our process, starting with data..."

**Objections:**
1. **"This seems like a lot of touchpoints — won't prospects get annoyed?"**
   - ACKNOWLEDGE: "That's a common concern."
   - REFRAME: "The data actually shows the opposite. Prospects respond better to multi-channel outreach because it feels like a real relationship, not a single cold email blast."
   - REDIRECT: "And we space it out strategically across quarters — it's persistent without being pestering."
   - CLOSE: "In fact, 46% of our appointments come from the nurture phase — meaning the prospect appreciated the follow-up."

2. **"How is this different from spam?"**
   - ACKNOWLEDGE: "Fair question — nobody wants to be associated with spam."
   - REFRAME: "The difference is targeting and personalization. We're not blasting millions of random contacts. We're reaching 1,000-2,000 companies that match your exact ICP with tailored messaging."
   - REDIRECT: "And every email, call, and piece of mail is designed to start a conversation, not push a sale."
   - CLOSE: "Let me show you how we build the database — that's where it starts."

---

### SLIDE 7 — "Build Your Target Market / Database (AIP)"

**Content (type: mixed):**
```
BUILD YOUR TARGET MARKET

AIP (ABSTRAKT INTELLIGENCE PLATFORM)
Behind every successful marketing strategy is great data.
We invested in building AIP — our Universal Database.

AIP provides:
• Access to over 125,000,000 records
• Data enhanced in real time with all new campaign results
• Real-time results

DATA SOURCES:
ZoomInfo | 3rd Party List Sources | D&B Hoovers | Customer Data | Your Campaign Results | Other Campaign Results
```

**Word Track:**
```
Let me dive into the nuts and bolts of our process.

We start by building a comprehensive dataset of companies that match your **ICP — your Ideal Client Profile.** We focus on companies within specific industry segments, zip codes, etc. that you want to meet with. **We would build this list for you.**

Good data is like the unicorn of marketing. We all want it, but it's hard to find.

**Ever bought a marketing list?** You know the drill — they're mostly garbage.

We team up with all the major data providers and do the heavy lifting to give you quality data. We **merge, purge, and end up with the best of the best.**

We're currently working with **1,700 clients**, and all that data goes into our **Universal Database**. It's like a shared treasure chest.

We're even creating a system to track which prospects answer calls, who responds to emails, and so on.

So yeah, we start with a killer list, but **it gets better every single day.**
```

**Transition:** "Now that we have the most powerful marketing data on the planet, let me show you how we put it to work."

**Objections:**
1. **"We already have a list / we use ZoomInfo"**
   - ACKNOWLEDGE: "Great — ZoomInfo is one of our sources too."
   - REFRAME: "The difference is that we don't rely on any single source. We aggregate from ZoomInfo, D&B Hoovers, 3rd party lists, and — most importantly — real-time campaign data from 1,700 active clients."
   - REDIRECT: "That means our data is constantly being cleaned and enriched by actual call and email results — not just static records."
   - CLOSE: "When's the last time your ZoomInfo list was updated by someone actually calling those contacts?"

2. **"How do you ensure data quality?"**
   - ACKNOWLEDGE: "It's the most important question in outbound."
   - REFRAME: "We merge and purge across multiple sources, then our qualification phase (which I'll show you next) validates every record with real phone calls."
   - REDIRECT: "By the time we're outreaching on your behalf, every contact has been verified by a human."
   - CLOSE: "That's why our connect rates are significantly higher than industry average."

---

### SLIDE 8 — "The Process: Direct Mail, Email, LinkedIn"

**Content (type: mixed):**
```
THE PROCESS — LAUNCH YOUR MARKETING STRATEGY

1. DIRECT MAIL: 150+ targets/month from the most real-time database. Physical mail — warm and familiar, not cold.
2. EMAIL: High-deliverability emails at scale — text-only, 90 words or less, specialized servers and slow sending.
3. LINKEDIN: Identify active users, connect first, then message — welcomed, not ignored.
4. OUTBOUND CALLS: Persistent follow-up across all channels.

40% LinkedIn acceptance rate
98% USPS delivery rate on direct mail
17% email open rate
8% outbound call contact rate
```

**Word Track:**
```
We initiate our process by sending top-of-funnel emails to up to **2,000 target companies** in your area. For context, this email strategy came to us via the **acquisition of the best email prospecting company in the world** 2 years ago — so it truly works.

Our initial email blast to the 2,000 serves two purposes: 1) **pinpoint immediate opportunities**, and 2) **begin building name recognition** for future outreach.

We keep the momentum going by rotating through all our contacts on a quarterly basis, sending **up to 96,000 emails per year.** We aim to reach up to five decision-makers per company, hitting an average of about three.

Once responses come in, we categorize them into **Hot** (ready for a meeting), **Warm** (questions or delayed responses), and **Cold** (no reply). We follow up with a phone call for all these leads. For Hot and Warm leads, it's more efficient than endless emailing, and for Cold leads, it's a new approach if email didn't work.

This proven method has yielded incredible results for our clients, including a client in Utah who secured a **$3 million deal from a single email.**

The question I always ask here is: **when a lead is ready to buy, who do you think they'll turn to — the company they've heard from once or the one they've heard from consistently?**
```

**Transition:** "Now let me show you what happens on the phone side..."

**Objections:**
1. **"Email doesn't work anymore / our prospects don't read email"**
   - ACKNOWLEDGE: "I hear that from a lot of companies."
   - REFRAME: "Mass email blasts don't work. But targeted, text-only, 90-word emails from a real person to a verified decision-maker? That's a different animal."
   - REDIRECT: "Our strategy came from acquiring what was considered the best email prospecting company in the world. And we send up to 96,000 emails per year per client."
   - CLOSE: "One of our clients closed a $3 million deal from a single email. It works when it's done right."

2. **"We don't want to send direct mail — it's old school"**
   - ACKNOWLEDGE: "I get it — it sounds counterintuitive."
   - REFRAME: "That's actually why it works. Everyone's inbox is flooded. Almost nobody gets physical mail from a B2B company anymore. So when your prospect gets a well-designed piece in the mail, then gets a call from us referencing it — it's a warm conversation, not a cold one."
   - REDIRECT: "Direct mail has a 98% delivery rate. Try getting that with email."
   - CLOSE: "It's one piece of the omni-channel puzzle, and it makes everything else work better."

---

### SLIDE 9 — "Qualify Target Companies"

**Content (type: mixed):**
```
QUALIFY TARGET COMPANIES AND KDMs

QUALIFICATION PHASE:
CALL 1 → CALL 2 → CALL 3 → ... → CALL 10

We confirm who the decision-maker is, identify contact info, and gather critical sales data.
Prospects are qualified or disqualified based on survey results.

KEY INDUSTRY SURVEY QUESTIONS:
• Square footage of roof (example)
• Current vendor partner
• Contract/renewal date
• Decision-making process
```

**Word Track:**
```
Phase 2 is phone-based and we call it **cleansing.**

We need to do the hard research to figure out who the key decision-makers are and whether or not the targets on the list meet your qualification criteria. So, we roll up our sleeves, call, and find out.

We're looking to ensure the target companies we're calling are a **true match** for what you're looking for, confirm the **decision-maker** you need to speak with, and gather **useful intel** for your records. Also, we need to determine if we should continue to use resources on this prospect.

Once we have this information, we set it up in a **CRM**. Are you familiar with Salesforce? **Do you use a CRM internally?**

[[LET THEM ANSWER]]

So, the goal is that we want to effectively conduct a **discovery.** The objective of that conversation is to figure out the prospect's **current vendor** — if they have no current provider, why? — and any specific information that applies to you. For instance, some clients want square footage, some want workstations, etc. We also want to find out **what's missing** — for example, is their current provider a 10 out of 10, or are they falling short? Are they in a contract? And so on.

Remember **[Competitor Names]** from the exclusivity slide. **Wouldn't you like to know this info about their customers?**
```

**Transition:** "After the cleansing phase, we're left with a fully qualified list. Now the real work begins..."

**Objections:**
1. **"We already know who our prospects are"**
   - ACKNOWLEDGE: "That's a huge advantage."
   - REFRAME: "But knowing who they are and having verified, current intel on their vendor relationships, contract dates, and decision-making process are two different things."
   - REDIRECT: "Our qualification phase gives you a competitive intelligence database — not just a contact list."
   - CLOSE: "Imagine knowing when every prospect's contract with your competitor is up for renewal. That's what this gives you."

2. **"What CRM do you use? Will it integrate with ours?"**
   - ACKNOWLEDGE: "Great question."
   - REFRAME: "We run on Salesforce internally, and we integrate with Microsoft Dynamics, Zoho, Salesforce, and HubSpot."
   - REDIRECT: "If you don't have a CRM, our results portal has light lead management built in."
   - CLOSE: "Either way, you'll have full visibility into every contact and interaction."

---

### SLIDE 10 — "KDM Introduction"

**Content (type: mixed):**
```
KDM INTRODUCTION

Goal: Have the best possible conversation with Key Decision-Makers (KDMs).
If an opportunity exists → set an appointment.
If not → leave the door open and build a relationship over time.

The more decision-makers we reach and info we collect, the more you sell.

It takes an average of 8 CALLS TO REACH A KEY DECISION-MAKER

INTRODUCE: CALL 1 → CALL 2 → ... → CALL 10 + EMAIL + LANDING PAGE

Q: How many calls does your current team make before giving up?
```

**Word Track:**
```
After the cleansing phase, we're left with a list of fully qualified companies, and we've identified the key decision-makers within those organizations. Now we start our **call outreach**, and this is where the real work begins.

Reaching out may sound simple, but it often takes many tries, sometimes **up to 8 calls**, just to get ahold of each decision-maker. It's a tough task, one where many salespeople, including our competitors, throw in the towel.

Let me share a story that might resonate with you. A few years ago, our VP of Sales attended a trade show. He collected a pile of business cards from interested prospects but, like many salespeople, procrastinated on making those calls. Days turned into weeks, and he made only a few calls without following through. It's a common tale. **People don't want to make the calls, and they certainly don't want to try 8 times.**

They give up. **[Competitor Name 1]** will give up. **[Competitor Name 2]** will give up.

**But we don't give up. Our process won't allow for it.**

When we finally reach the decision-makers, we typically encounter **one of three outcomes.**

The first is hitting the jackpot — they're eager to change their current provider. In this case, we **book a sales appointment for you.** But let's be realistic; this happens about once in every 80 calls.

The second outcome is that they're **not a good fit.** For whatever reason, it doesn't match up, and we remove them from the funnel, keeping the connection for future opportunities.

**Can you see why our clients feel they have a little bit of an unfair advantage?**
```

**Transition:** "The third outcome brings us to the nurture phase, and it's what happens most of the time..."

**Objections:**
1. **"8 calls seems excessive — won't that annoy prospects?"**
   - ACKNOWLEDGE: "It sounds like a lot."
   - REFRAME: "But here's the reality — the data shows it takes an average of 8 calls to reach a decision-maker. Most salespeople give up after 2-3. That's not persistence, that's just not doing the job."
   - REDIRECT: "We're not calling 8 times in a week. These calls are spaced out strategically over time."
   - CLOSE: "The companies that give up after 4 calls are leaving money on the table — I'll show you exactly how much in the next slide."

2. **"Our reps already do outbound calling"**
   - ACKNOWLEDGE: "That's great."
   - REFRAME: "Are they consistently making 8+ attempts per prospect, every quarter, while also handling demos, proposals, and closing? Most reps tell us prospecting is the first thing that falls off when they get busy."
   - REDIRECT: "We take that entire burden off their plate so they can focus on closing the meetings we book."
   - CLOSE: "What if your reps only had to show up to qualified meetings instead of finding them?"

---

### SLIDE 11 — "Nurture Qualified Companies"

**Content (type: mixed):**
```
NURTURE QUALIFIED COMPANIES

Quarterly nurture cycle:
  Q1-Q4: LANDING PAGE → EMAIL → CALL 1 → CALL 2 → CALL 3

18 ATTEMPTS TO CONVERT AN OPPORTUNITY
46% OF APPOINTMENTS COME FROM NURTURE

Q: How many of your current customers come from Nurture?
```

**Word Track:**
```
The third outcome brings us to the **nurture phase**, and it is what happens most of the time. And this is what makes outbound marketing challenging.

The reality is that most people are interested, but with a caveat. For example:
• "I'm interested, but **I'm in a contract until December.** Call me back in October."
• "I'm interested, but **I need to talk to my partner.**"
• "I'm interested, but **we don't have the budget** to make a change now. Loop back in two weeks."
• "My current provider is not horrible, but they're not great either. **I won't make a change unless something changes**, so let's stay in touch."

This happens a lot.

We're in the business of **building genuine, long-lasting relationships.** So when we come across a company that fits your criteria, we don't just let them go.

**Every quarter**, we're there with a series of **8 phone calls** and our **5-part email series.** We're the persistent friend who keeps checking in, not the distant acquaintance who only calls when they need something.

To make the point, we have a client by the name of **Sunland** and they have 3 programs. I think over the course of a little over three years, we booked them **400 sales appointments.**

If we had stopped at four dials — out of those 400 appointments, if we hadn't used this process on the screen, if we hadn't called 42 times, if we had stopped at four dials, not even including email touchpoints — **how many of those 400 meetings do you think would have actually been secured?**

[[LET THEM ANSWER]]

**78.** Literally 78. And, I promise you, **that is not the exception. It is the rule.** And it illustrates the true value of our process.

**Trust me, your competitors would love for you to give up after 4 dials.** It would save them from 322 of their clients meeting with their competition.
```

**Transition:** "So once a prospect says yes, here's what happens next..."

**Objections:**
1. **"We don't have the patience for a long nurture cycle"**
   - ACKNOWLEDGE: "I get it — everyone wants results now."
   - REFRAME: "But here's the math: 46% of all appointments come from nurture. If you skip it, you're cutting your results nearly in half."
   - REDIRECT: "The beauty is that you don't have to be patient — we are. Your team doesn't do any of this. We handle the entire nurture cycle while your reps focus on closing."
   - CLOSE: "You'll still get quick-hit appointments from the intro phase. Nurture just keeps stacking on top."

2. **"400 appointments sounds too good to be true"**
   - ACKNOWLEDGE: "I know it sounds like a big number."
   - REFRAME: "That's over 3 years across 3 programs. And remember — only 78 of those would have happened with a normal 4-call approach."
   - REDIRECT: "That's the power of the process. Most outbound efforts fail because they stop too early. We don't stop."
   - CLOSE: "Would 78 meetings be valuable to your business? Now imagine 400."

---

### SLIDE 12 — "New Sales Appointments"

**Content (type: mixed):**
```
NEW SALES APPOINTMENTS

Appointment Setting Phase:
QUALIFIED APPOINTMENT = RIGHT COMPANY. RIGHT PERSON. CLEARLY AGREES TO MEET.

Process:
• Lead Qualification
• Partner Appointment Email & Text Notification
• Prospect Email Calendar Invite
• Quality Assurance
• Prospect Email and Text Reminder
• Partner Email and Text Reminder
• Partner Post-Appointment Email Survey
```

**Word Track:**
```
Once we've scheduled an appointment and the prospect says **"YES,"** it's time to **pass the baton to you.**

We coordinate with your calendar, find a suitable time for both parties, and send out a **calendar invite.**

We then provide you with a **comprehensive contact history**, including notes and a recording of our call with the prospect, so you can come to the meeting **well-prepared.**

We also ensure — through our internal quality process — that the appointment meets the **quality standards** we agreed on during the implementation process.

After the meeting, we'll reach out with a quick text or email and a survey to get **your feedback** on the appointment. Your insights help us fine-tune our process and set you up for even greater success in future meetings.

To sum it up, we've taken care of the initial work — developing your buying base, identifying decision-makers, making introductions, securing key data, and scheduling the appointment. Then **we pass the baton to you** with all the support you need to have a successful meeting.
```

**Transition:** "Now let me show you the sales tools we create to help you win those meetings..."

**Objections:**
1. **"How do you define a 'qualified' appointment?"**
   - ACKNOWLEDGE: "This is the most important question — and it's a buying signal, so thank you."
   - REFRAME: "A qualified appointment is: right company, right person, clearly agrees to meet. We define the exact criteria together during implementation."
   - REDIRECT: "We also have a quality assurance step where every appointment is reviewed before it hits your calendar."
   - CLOSE: "If an appointment doesn't meet the standard, we don't count it. Does that sound fair?"

2. **"What if the appointments don't show up?"**
   - ACKNOWLEDGE: "Show rates matter — I get it."
   - REFRAME: "We have a multi-step confirmation process: calendar invite, email reminder, text reminder. Our show rates are well above industry average."
   - REDIRECT: "And if someone no-shows, we follow up and reschedule. We don't just mark it done and move on."
   - CLOSE: "You'll see all of this tracked in the results portal I'll show you in a minute."

---

### SLIDE 13 — "Sales Toolkit"

**Content (type: bullets):**
```
SALES TOOLKIT — Creative Assets Built For You

• Landing Page (email traffic destination)
• Sales Brochure
• Case Studies
• Sales Slide Deck
• Sell Sheet
• Sales Proposal
• Industry-Specific One Pagers (x2)
• LinkedIn Business Profile Design
• SEO Blogs (x2)
• Social Media Posts (LinkedIn x15, Facebook x15, Instagram x15)
• Infographic
• Optional: Pro video every quarter (up to 60 sec) for $500/mo
  — About Us | Client Success | Product/Service | FAQ videos

Saving 3-5x vs. open market pricing
```

**Word Track:**
```
As a growth agency, we have the unique advantage of an in-house, **full-service creative division**, which we leverage to give our clients a competitive edge.

We create what we call a **"sales toolkit"** to help you stand out. This toolkit showcases your products and services in a way that sets you apart from your competitors.

Many salespeople feel they **lack the right tools** to truly succeed. That's exactly the problem we're addressing.

Here's the cool part — these tools aren't just for our use in our process. They're also **for your team to use** in their sales process during and after sales calls.

We start with a **landing page** where we direct all email traffic. Then, we craft a **brochure, case studies, a sales slide deck, a sell sheet**, and even a **video** to share with interested prospects. By the end of the year, you have a **powerful sales hub** at your disposal, enabling you to effectively tell your story and close deals at a higher rate.

In a competitive market, having this collateral makes a difference. Many of our clients have told us that it **sets them apart from their competitors**, demonstrating a level of investment and professionalism that they and their customers appreciate.

Lastly, it's worth noting that because we do this at such a high level, you're likely **saving 3-5 times** what you would pay for these assets on the open market.
```

**Transition:** "Now let me show you the team and technology behind all of this..."

**Objections:**
1. **"We already have marketing materials"**
   - ACKNOWLEDGE: "That's great — a head start is always helpful."
   - REFRAME: "What we find is that most companies have some pieces but not a complete, cohesive toolkit designed specifically for outbound sales conversations."
   - REDIRECT: "We can build on what you have and fill in the gaps. And ours are specifically optimized for the outbound process."
   - CLOSE: "When's the last time your materials were refreshed?"

2. **"We have an in-house marketing team for this"**
   - ACKNOWLEDGE: "Having an in-house team is a big advantage."
   - REFRAME: "Our creative assets are included in the partnership — there's no additional cost. Think of it as freeing up your marketing team to focus on other priorities."
   - REDIRECT: "And because we build these for [Industry] companies specifically, we already know what messaging resonates with your buyers."
   - CLOSE: "It's an added bonus, not a replacement for your team."

---

### SLIDE 14 — "Team & Technology"

**Content (type: mixed):**
```
TEAM & TECHNOLOGY

DIY MINIMUM EXPENSE (per person, per year):
• Salary & Bonus: $60,000
• Benefits & Taxes: $15,000
• Technology & Data: $12,000
• Training & Management: $7,500
• Recruiting & Ramp: $5,000
= $99,500 PER PERSON PER YEAR

Your Abstrakt team:
Primary BDR | Multiple BDRs | Recruiter | Trainer | Quality Control | Content Manager | Data Analyst | Partner Success Manager | Assistant Sales Manager

Access to our ENTIRE TEAM and tech stack
— FOR LESS THAN THE COST OF A FULL-TIME EMPLOYEE —
```

**Word Track:**
```
You may wonder how we manage all these tasks efficiently. The answer is our **solid foundation**, built from investing time and resources.

Assembling a team like the one you see on the left would cost you **over $50K monthly**, but we offer our entire team for **less than half the salary of a single full-time employee.**

On top of that, our tech stack pictured on the right, essential for running this process, would cost you an extra **$3,500 per month.**

In summary, you get our **full team and tech for less than half the cost of one employee.** Plus, our dedicated team will be with you, ensuring you **win customers against your competitors.**
```

**Transition:** "Let me show you how you'll track all of this in real time..."

**Objections:**
1. **"We'd rather hire our own SDR"**
   - ACKNOWLEDGE: "Hiring in-house gives you more control, I get that."
   - REFRAME: "But let's look at the math. One SDR costs $99,500/year fully loaded — salary, benefits, taxes, tech, training, recruiting. And that's before they ramp, which takes 3-6 months. Plus 40% annual turnover in SDR roles."
   - REDIRECT: "With us, you get an entire team — not one person — for less than half that cost. No ramp time, no turnover risk, no management overhead."
   - CLOSE: "Which sounds like a better use of that budget?"

2. **"How do we know your team will represent us well?"**
   - ACKNOWLEDGE: "That's a critical question."
   - REFRAME: "Our implementation process is specifically designed to solve this. Over 30 days, we do three 60-minute calls to learn your business inside and out."
   - REDIRECT: "Think about the Sunland client I mentioned — 400 appointments over 3 years. You can't book that many meetings without deeply understanding the business."
   - CLOSE: "And you approve every call guide and email before we launch. You have full control."

---

### SLIDE 15 — "Results Portal"

**Content (type: mixed):**
```
RESULTS PORTAL

• LEAD MANAGEMENT: Monitor and manage all new sales leads
• RESULTS DASHBOARDS: Marketing results for each stage of your pipeline
• INVOICES: View all open and closed invoices
• MY VOICE: Listen to calls and provide feedback
• SURVEY RESULTS: Review all pipeline sales data
• THE GROW SHOW: Weekly episodes and materials to support sales

CRM INTEGRATION: $250/mo
We integrate with: Microsoft Dynamics | Zoho | Salesforce | HubSpot

MONTHLY RESULTS MEETINGS | 24/7 ACCESS
```

**Word Track:**
```
Our **partner results portal** is your mission control for managing and measuring success.

Accessible on any device, it gives you **real-time insights** into our work, allows you to access invoices, listen to calls, and approve marketing collateral.

It also features extras to help your team sell, like our **podcasts.**

We'll use this portal for our **monthly collaboration calls**, ensuring we're aligned in building a strong sales pipeline.

Don't have a CRM? No worries. The portal has some **light lead management** built in. If you do have one, we can integrate it with **Microsoft Dynamics, Zoho, Salesforce, or HubSpot.**

This **transparency** is a key differentiator for us and our clients.
```

**Transition:** "Now let me walk you through the onboarding process..."

**Objections:**
1. **"We need everything in our own CRM"**
   - ACKNOWLEDGE: "Completely understandable."
   - REFRAME: "We integrate with all the major CRMs — Salesforce, HubSpot, Dynamics, Zoho. Everything flows directly into your system."
   - REDIRECT: "The integration is $250/month and ensures your team sees everything in the tools they already use."
   - CLOSE: "Which CRM are you on? I'll make sure we cover the integration during implementation."

2. **"How often do we meet to review results?"**
   - ACKNOWLEDGE: "Great question."
   - REFRAME: "Monthly. We have a structured results meeting where we review key sales data, appointment outcomes, and strategize follow-up."
   - REDIRECT: "But you don't have to wait for the monthly call — the portal gives you 24/7 real-time access to everything."
   - CLOSE: "Most partners check the portal weekly and save the deeper strategy discussions for our monthly calls."

---

### SLIDE 16 — "Implementation / Onboarding"

**Content (type: mixed):**
```
ONBOARDING PROCESS

DAYS 1-8: KICKOFF MEETING (1 hour)
  • Meet implementation team
  • Review process and pipeline strategy

DAYS 5-13: MATERIAL DELIVERY
  • Email Content, Landing Page, Direct Mail Letters
  • List Criteria Endorsement, LinkedIn Content

DAYS 11-16: PROGRESS MEETING (1 hour)
  • Collaborate on messaging
  • Review appointment logistics and best practices

DAYS 18-24: WRAP-UP MEETING (1 hour)
  • Meet your Pipeline Team
  • Review strategy and expectations

DAYS 20-22: PORTAL DEMONSTRATION (1 hour)
  • Learn Customer Portal
  • Meet your SDR

GO LIVE → MONTHLY RESULTS MEETINGS
```

**Word Track:**
```
You may wonder how we can effectively represent you without being on-site or full-time.

Our **decade-long developed implementation plan** addresses this by integrating us with your team **over 30 days.** We begin with three 60-minute calls to understand your unique selling points, create call guides, design email sequences, set up the results portal, train our team, and develop your sales toolkit strategy.

By the end, **we're so integrated that it'll feel like we're just down the hall.**

Think about it. That client I told you about earlier that we scheduled **400 meetings** for — imagine how well we had to know them to schedule that many meetings.
```

**Transition:** "Here's kind of a fun, alternate way to look at this..."

**Objections:**
1. **"30 days is a long time to get started"**
   - ACKNOWLEDGE: "I understand the urgency."
   - REFRAME: "If we rushed the implementation, we'd be making calls without truly understanding your business. That leads to bad appointments and wasted time."
   - REDIRECT: "30 days is actually fast for what we're building — a fully customized outbound program with creative assets, call guides, email sequences, and trained reps."
   - CLOSE: "And during those 30 days, your top-of-funnel emails are already going out, so you're not waiting in silence."

2. **"How much of our time does this take?"**
   - ACKNOWLEDGE: "You're busy — I get it."
   - REFRAME: "Three 60-minute calls over 30 days. That's it. About 3 hours of your time total."
   - REDIRECT: "After that, it's one monthly call plus any ad hoc communication you want."
   - CLOSE: "Three hours to set up a program that runs for a year. That's a pretty good ROI on your time."

---

### SLIDE 17 — "Captain Abstrakt"

**Content (type: text):**
```
CAPTAIN ABSTRAKT

Imagine a candidate who walked into your office and said:

"I've got a decade of experience in your industry, a list of qualified prospects, no qualms about making calls, I can write emails, create sales assets, I don't need insurance, and I've brought my own prospect list and CRM. I don't get sick, I don't take vacations, I work for $28/hr, and if I don't meet my targets, I'll work for free until I do."

Would you hire this person?
```

**Word Track:**
```
Here is kind of a fun, alternate way to look at this.

Imagine I walked into your office for an interview and said:

**"I've got a decade of experience in your industry, a list of qualified prospects, no qualms about making calls, I can write emails, create sales assets, I don't need insurance and I've brought my own prospect list and CRM. I don't get sick, I don't take vacations, I work for $28/hr, and if I don't meet my targets, I'll work for free until I do."**

[[PAUSE — LET IT LAND]]

You'd probably want to **hire me on the spot**, right?
```

**Transition:** "Speaking of numbers... let's get to everyone's favorite part."

**Objections:**
1. **"$28/hr — how are you calculating that?"**
   - ACKNOWLEDGE: "Good question."
   - REFRAME: "That's based on the monthly investment divided by the total working hours our team dedicates to your program. You're getting an entire team's output for what you'd pay one junior employee."
   - REDIRECT: "And remember — this isn't one person working $28/hr. It's a full team of BDRs, data analysts, content creators, and managers."
   - CLOSE: "The real question is: what would that same output cost you if you built it in-house?"

---

### SLIDE 18 — "Pricing & Close"

**Content (type: mixed):**
```
PROGRAM PRICING

              STARTER   STANDARD   ADVANCED   ELITE   ENTERPRISE
13 Months     $5,250    $7,250     $9,250     $11,250  $13,250
7 Months      $5,500    $7,500     $9,500     $11,500  $13,500
45 Days Out   $6,000    $8,000     $10,000    $12,000  $14,000

MONTHLY ACTIVITY MINIMUM:
  LETTERS SENT: 125 / 185 / 250 / 310 / 375
  DIALS:        650 / 975 / 1,300 / 1,625 / 1,950

3.55X ROI & 2.1X AVG. DEAL SIZE

WHAT YOU GET:
• Exclusive Target Market    • Pipeline Results Portal
• Access to Tech Stack       • Monthly Results Meetings
• Direct Mail                • Outbound BDR Local Call Process
• Dedicated Team             • Landing Page
• Email                      • CRM Integration ($250/mo)

GUARANTEE:
• 3-month check: Not at 15% of annual goal → $5K check to you
• 6-month check: Not on track → you can walk away
• Year-end: Not at 100% → we work for FREE until we hit it
```

**Word Track:**
```
Speaking of numbers... Let's get to everyone's favorite part: **the numbers.**

Let's do a quick recap. We've got a tailored target market of high-potential companies, sent **up to 96,000 emails**, made at least **6,000 calls**, gathered critical sales data, designed **five sales assets**, and held **13 monthly meetings** or sales consulting sessions. Plus, we **guarantee at least 60 new sales meetings.** All of this, for just **$4,250 per month.**

Here's the deal: It's a **13-month agreement.** If after three months on the phone we're not at **15% of the annual appointment goal, we'll cut you a check for $5K.** After six months, if you're not on track to hit the appointment goal, **you can walk away.** If we haven't reached 100% of the appointment goal by year's end, **we'll work for free until we do.**

**We've tried to take the risk out.**

So with that said, **curious which bucket you fall into?**

[[PAUSE — REFERENCE THE THREE BUCKETS FROM SLIDE 1:]]
1. Yes, I want to secure a partnership
2. Yes, I'm interested but there is a next step
3. No, I'm not interested at this time
```

**Transition:** None — this is the closing slide.

**Objections:**
1. **"That's more than we budgeted"**
   - ACKNOWLEDGE: "Understood — budget matters."
   - REFRAME: "Let me ask this: based on the numbers you shared earlier — your average deal size of [X] and your close rate — if we book 60 meetings and you close even 10% of them, what does that revenue look like?"
   - REDIRECT: "Most of our partners see a 3.55x ROI. The investment pays for itself and then some."
   - CLOSE: "What if we looked at the Starter tier and proved the ROI before scaling up?"

2. **"I need to get approval from someone else"** ← PRIMARY OBJECTION
   - ACKNOWLEDGE: "That makes complete sense — a decision like this should involve the right stakeholders."
   - REFRAME: "Can I be candid? In our experience, when this goes to committee without context, it stalls. Not because it's a bad idea, but because the people in the room didn't sit through this conversation."
   - REDIRECT: "We've seen that 73% of deals that go to an unsupported internal review get tabled — not rejected, just delayed indefinitely. The companies that move fastest always have a champion who brings a clear business case. What if we build that business case together? I'll create a one-page ROI summary customized to your numbers — the ones we just ran through — that you can put in front of [decision-maker's name]."
   - CLOSE: "Can we schedule 20 minutes later this week for me to walk you through the one-pager, and then you can decide if it's worth bringing to [decision-maker]?"

3. **"I'm not interested at this time"**
   - ACKNOWLEDGE: "I respect that — I appreciate your honesty and your time today."
   - REFRAME: "Can I ask what specifically didn't resonate? Was it the approach, the timing, or the investment?"
   - REDIRECT: "I only ask because if it's timing, we can revisit in a quarter. But if someone else claims [Market] before then, we won't be able to offer it again."
   - CLOSE: "Would it make sense to reconnect in [specific timeframe] to see if anything has changed?"

4. **"Can we do a trial or pilot first?"**
   - ACKNOWLEDGE: "I wish we could — I understand wanting to test before committing."
   - REFRAME: "We don't do free trials because our service requires real investment to set up properly — database building, creative assets, team training. A half-effort would give you half-results and that wouldn't be fair to you."
   - REDIRECT: "But here's the thing — our guarantee structure IS the pilot. If we don't hit 15% in 3 months, you get $5K. If we're not on track at 6 months, you walk. That's a built-in safety net."
   - CLOSE: "The Starter tier is essentially a pilot — start small, prove the ROI, then scale."

5. **"13 months is a long commitment"**
   - ACKNOWLEDGE: "I understand — 13 months feels like a long time."
   - REFRAME: "The reason it's 13 months is that we invest heavily upfront — 30 days of implementation, creative asset development, database building. We need time to deliver results and prove ROI."
   - REDIRECT: "And remember, you have exit ramps. At 6 months, if we're not on track, you can walk away. The 13-month term actually protects you because it locks in the guarantee."
   - CLOSE: "Think of it this way — you're committing to 13 months, but we're guaranteeing results or we work for free. Who's really taking the risk here?"

---

## ADDITIONAL REQUIREMENTS

- All text content is editable via `slides.json` — a non-technical person should be able to open the file and update scripts, add slides, or modify objections
- No external AI API calls — this is purely a content delivery app
- App should load in under 2 seconds (reps open it during live calls)
- No analytics or tracking
- Print-friendly: if a rep prints, it outputs the current slide + word track cleanly
- Subtle "Abstrakt SalesDeck Coach" watermark in bottom-right of slide panel (10px, #333333)
- Bracketed placeholders (e.g., `[Market]`, `[Industry]`, `[Prospect Name]`) should render with a distinct highlighted style so reps can easily spot what to customize live

---

*End of prompt.*
