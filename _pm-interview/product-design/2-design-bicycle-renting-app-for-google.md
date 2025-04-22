---
title: "1.2 Design bicycle renting app for Google"
metaTitle: "Design bicycle renting app for Google - Product Design"
metaDescription: ""
lessonUnlocked : true
---
# Design bicycle renting app for Google

## 1️⃣ Ask the Interviewer
🔹 Why does Google want to build this?

## 2️⃣ Google's mission 
Google's mission is to:
- Simplify the world's information
- Make it accessible & useful

This aligns with making travel more convenient by simplifying transportation options and fits into Google's product ecosystem:
-  Google Maps – Navigation support
- Google Pay – Seamless payments
-  Google Travel – Trip planning 

## 3️⃣ Clarifying questions 
Before diving into the solution, clarify:
-  Area of launch – Localized or global?
-  Rental duration – Hourly, daily, or weekly? 
-  Mode of operation – Own fleet (asset-heavy) or partner model? 
-  Competitors – Who else is in this space?
-  Bike types – Normal bikes, e-bikes, or both?
-  Standalone or integrated app – Within Google Maps or a new app? 

## 4️⃣ User personas 
🔹 Solo Travelers – Quick, easy bookings
🔹 Families – Multiple ride bookings, convenient for kids & elderly
🔹 Group Travelers – Multiple rides, coordinate plans
🔹 Tour & Travel Agencies – Bulk bookings, high AOV 

## 5️⃣ Prioritizing user personas 
High priority (Frequent users): Solo travelers & families
Lower priority (High AOV users): Group travelers & travel agencies

## 6️⃣ User needs 
### Must-have needs (MVP) ✅
🔹 Check availability of bikes (Google Maps integration 🗺️)
🔹 Seamless booking & payments (Google Pay 💰)
🔹 Navigation & route guidance (Google Maps 📍)
🔹 Transparent pricing (Hourly/daily/weekly)

### Good-to-have features 🌟
🔸 Guided audio tour 🎧
🔸 Community features – Connect with other cyclists 👥
🔸 Helmet, knee pad, and safety gear rentals 🦺
🔸 Integration with Google Travel for itinerary planning 🗺️

## 7️⃣ Solution 🚀
### Core features (MVP) 🎯
✅ Ride availability in location (Google Maps)
✅ Booking rides (single/bulk) 🛒
✅ Seamless payments (Google Pay)
✅ Navigation support (Google Maps)

### Good-to-have features 💡
🔹 Prevent bike theft – QR code-based ride start 🔏
🔹 Guided audio tour – History & landmarks narration 🎙️
🔹 Helmet & safety gear rentals 🏍️
🔹 Guided itinerary for tourists 📌

## 8️⃣ Trade-offs ⚖️
📌 Standalone App vs Integrated into Google Maps/Travel
✅ Integrated App – Faster adoption, but might clutter UX
✅ Standalone App – Richer experience, but lower adoption

📌 Mode of Operation (Capex Heavy vs Partnerships)
✅ Capex Heavy – Own fleet, high cost, greater control 🏢
✅ Partnership Model – Less cost, but lower control 🤝

## 9️⃣ Risks & mitigation 🚨
⚠️ Fleet management burden – Capex & manpower heavy, partnerships reduce risk
⚠️ Local regulatory compliance – Work with local authorities for approval
⚠️ Vandalism & theft – QR/ID-based verification & anti-theft tech

## 🔟 Success metrics 📊
📌 North Star Metric – 🚲 # of rides booked per day
📌 Adoption – 📈 # of tourists booking rides daily
📌 Revenue – 💵 AOV & total revenue
📌 Usage – 🕒 Avg ride duration, heatmap of popular routes

## How can you make the answer better?

### 1️⃣ Always (always) start with users📈
Right now, the problem statement isn't deeply explored. Instead of jumping into Google's mission, start with why this problem needs solving:
- User Pain Points: Limited public transport options, expensive alternatives (taxis, rentals), lack of last-mile connectivity.
- Market Opportunity: Growing demand for micro-mobility solutions, increased focus on sustainability.
👉 Fix: Frame it as a problem statement and explain how Google is uniquely positioned to solve it.

### 2️⃣ Deepen trade-off analysis ⚖️
Your trade-offs are good but need clear decision-making criteria:
- Standalone App vs. Google Maps Integration:
  - Instead of just stating adoption vs. UX clutter, consider Google's existing product principles.
  - Would users want a separate app? Or would they expect an integrated experience?
  - Could Google experiment with an MVP inside Maps, then spin it off based on adoption?
- Capex Heavy vs. Partnerships:
  - What are examples of successful models (e.g., Uber's partnerships, Lime's approach)?
  - How do different cities' regulations affect this decision?
👉 Fix: Use data points, examples, and clearer decision criteria to refine trade-offs.

### 3️⃣ More thoughtful success metrics 📊
Metrics are good but lack a direct link to business impact.
- How does # of rides per day tie into revenue growth?
- How do we measure user satisfaction & retention?
- Should we track ride completion rates, cancellations, or time to find a bike?
👉 Fix: Add qualitative + quantitative metrics, considering business viability and UX success.

### 4️⃣ Expand user needs to cover edge cases 🎯
What happens if:
- No bikes are available nearby? → Suggest alternative transport options
- The app has high demand & low supply? → Dynamic pricing
- A user wants insurance/safety guarantees? → Liability coverage or damage fees
👉 Fix: Add edge cases & contingency planning to strengthen the solution.

# Question 3: Design a fridge
Let's jump to the solution.

## 1️⃣ Clarifying questions
Before jumping into solutions, I'd ask some key clarifying questions to define the problem space:
- Target age group – Are we designing for toddlers (2-5 years) or older kids (6-12 years)?
- Primary users – Is this fridge for kids to use independently, or will parents also use it?
- Use case – Is it a personal snack fridge, a kid-friendly section in a family fridge, or an educational tool for healthy eating? (Prioritised: a kid-friendly section in a family fridge)
- Fridge type – Are we designing a brand-new kids friendly family fridge (expensive, space-heavy) or modifying existing fridge at home (affordable, scalable)? (Prioritized: brand new fridge, modification would be costly & hard to plug & play features for kids)
- Constraints – Are there size, budget, or safety limitations?
- Business goals – Are we building a premium niche product or a mass-market solution?
- Geography & regulations – Are we targeting a global market or localizing for specific regions?
- Accessibility needs – Should we consider specially-abled children in our design?
- Setting – Will this fridge be used in homes, schools, or daycare centers?

Goal: Design a safe, accessible, and kid-friendly fridge that allows children to independently store and retrieve food while ensuring parental control and safety

## 2️⃣ Key stakeholders
👩‍👦 Parents – Want kids to safely access food, especially when they aren't home
👦 Kids – Need an easy, fun, and safe way to access stored food
🏭 Fridge manufacturers – Want differentiation in a competitive market

## 3️⃣ User needs
### ✅ Must-have features (MVP)
🔓 Accessibility –
- Soft handles at a lower mid-section for easy reach
- Rounded edges to prevent bumps and bruises
- Non-toxic materials and BPA-free plastics for compartments

👶 Ease of use –
- Lower compartments with easy pull-out drawers for kid-friendly snacks.
- Step stool integration for slightly younger kids to reach higher shelves safely.
- Moderated temperature to prevent extreme cold exposure.
- Transparent sections so kids can see their options without opening the fridge too long.
- Kid-friendly UI (touchscreen panel with icons, easy-to-read labels) (good to have)
- Voice-guided instructions to help kids use the fridge (good to have)

📲 Parental control –
- App-based fridge locking to restrict access to specific compartments
- Remote temperature control & usage tracking via mobile app
- Time-based access (e.g., snack section unlocks at specific time)

🛡️ Safety features –
- Anti-topple design for stability
- Electric shock-proofing to prevent accidents
- Spill sensors that notify parents if food/liquid is spilled (good to have)

### 🎨 Good-to-have (Future enhancements)
Playful design – Bright colors, interactive sounds, and lights to engage kids

Gamification
- Kids earn points for organizing the fridge properly or choosing healthy snacks
- Customizable exteriors with whiteboard/magnetic surfaces for doodling
- Smart screen integration with animated characters suggesting healthy choices
- AR/VR guide – Virtual assistant to teach kids about food storage & nutrition
- Voice assistant for reminders (e.g., "Drink water, Alex!")

### 🚀 Moonshot Idea
🤖 AI-powered robotic fridge assistant that listens to kids' voice commands, serves food, and syncs with parental controls.

## 4️⃣ Solution approach
- Accessibility: Lower handles, soft-close doors, and a lightweight door mechanism
- Ease of use: Kid-friendly temp settings, guided voice instructions, and snack compartments.
- Parental control: App-based locking, usage tracking, and scheduled fridge access
- Safety: Anti-topple base, shock-proof internals, and mess-detection sensors

## 5️⃣ Trade-offs & decision framework
Key trade-offs:
- New fridge for kids vs. multi purpose fridge: A new fridge for kids adds cost & space constraints, while a multi purpose fridge ensures affordability and faster adoption
- Adoption challenges: Couples who already own a fridge have to buy a new kids friendly fridge.
- Evaluate options for modifying existing fridges for kids w.r.t cost, time etc.
- More features vs. simplicity: Adding AR/VR & AI assistants sounds futuristic but increases complexity & price.
- Prioritizing core safety and usability makes adoption easier
- Mass-market vs. premium pricing: A premium kids-only fridge limits adoption, but a kid-friendly add-on kit makes it more accessible

Decision-making framework:
- Impact vs. cost vs. feasibility – Prioritize high-impact, low-cost, easily implementable features in MVP

## 6️⃣ GTM (Go-to-market) strategy
Target audience: Millennial parents with kids aged 4-10 years who value safety and convenience

Retail channels:
- D2C (Direct-to-consumer) via e-commerce platforms (Amazon, brand websites)
- Partnerships with furniture & kitchen appliance stores
- School & daycare networks for targeted promotions

Pricing: Mid-pre`mium positioning (~20% markup over standard fridges with added features)

## 7️⃣ Success metrics
- Adoption: % of families choosing a kid-friendly fridge over a regular one
- Engagement: Usage frequency of smart features like parental controls & gamification
- Impact on eating habits: Increase in healthy snack consumption based on fridge tracking.
- Safety metrics: Reduction in fridge-related accidents among kids

# Question 4: Design a vehicle for Mars
Let's solve "Design a vehicle for Mars" in the same structured way as your previous product sense breakdowns. Buckle up for liftoff 🚀

## 1️⃣ Clarifying Questions 🤔
Before diving into the solution, I'd ask:
- Mission Objective: Is the vehicle meant for exploration, colonization, logistics, or rescue?

- Passenger Type: Are we designing for astronauts, cargo, or autonomous robots?

- Trip Type: One-time use, multi-trip vehicle, or a long-term rover?

- Range & Duration: Is this for short-distance travel within a colony or long-distance Mars treks?

- Power Source: Are we assuming solar, nuclear, or battery-based energy sources?

- Environment: Are we operating on flat plains, rocky terrain, or volcanic zones?

- Build vs Ship: Will it be constructed on Mars or shipped from Earth?

- Budget Constraints: Mass-market (future colonies) or premium (NASA mission)?

- Remote vs Human Operation: Is the vehicle manually operated or autonomous?

➡️ Prioritized Setup:
- For human astronauts 🧑‍🚀

- Used for short- to mid-distance exploration within a Mars base radius

- Must handle rugged terrain & dust storms

- Solar-powered with manual + autonomous control

- Will be shipped from Earth


## 2️⃣ Key Stakeholders 👥
- Astronauts – Safe, reliable, and easy-to-operate transport on Mars

- Space agencies (NASA/ISRO/ESA) – Value safety, durability, data capture, and resource efficiency

- Engineers & Scientists – Require tool storage, samples handling, and research functionality

- Future Settlers – Would benefit from scaled-down consumer models


## 3️⃣ User Personas 🌌
- Exploration Astronauts – Need off-road ability, reliability, and emergency features

- Science Astronauts – Need storage for samples & instruments, onboard systems for data analysis

- Logistics Crew – Prioritize cargo capacity, easy docking, and integration with habitat

- Mission Control – Needs telemetric feedback, remote control, and hazard detection


## 4️⃣ Prioritization 🔝
Start with Exploration Astronauts and Science Astronauts — most immediate users during early Mars missions
Later expand to Logistics Crew and Autonomous Delivery Bots

## 5️⃣ User Pain Points 🛠️
🚧 Harsh Terrain – Rocky, uneven surfaces & craters
🌪️ Dust Storms – Visibility issues, risk of clogging systems
🥵 Temperature Extremes – From -100°C to 20°C
⚡ Power Reliability – Limited solar energy during storms
🧯 Safety – Must offer fail-safe options in case of breakdown
📡 Connectivity – Needs strong link with base or Earth

## 6️⃣ Must-Have Features ✅
🛞 Rugged Mobility –
- 6–8 wheel independent suspension

- Sand- and rock-resistant tires

- Low center of gravity to avoid toppling

🔋 Power & Backup –
- Solar with onboard battery pack

- Emergency hand-crank or nuclear backup (RTG mini-module)

👨‍🚀 Safety Systems –
- Sealed cockpit with life support

- Emergency oxygen and heating

- Beacon + auto-return-to-base protocol

🧠 Smart Navigation –
- Obstacle detection & terrain mapping

- AI-assisted autopilot with manual override

- Real-time sync with base

🧳 Storage –
- Modular compartments for samples & gear

- Insulated containers for biological specimens


## 7️⃣ Good-to-Have Features 🌟
📡 Live Data Dashboard – Surface scan, atmospheric data, weather forecast
🧪 Onboard Lab – Basic analysis of soil, gas, and rock
🔧 Modular Dock – Attachable science or logistics pods
🎮 Remote Control – From Mars base or Earth
🎙️ Voice Assistant – Simple commands for hands-free navigation

## 8️⃣ Moonshot Ideas 🚀
🤖 Autonomous Recon Bots – Small scout vehicles launched from main rover
🕸️ Swarm Coordination – Multiple rovers that can intelligently cooperate
🧬 Bio-Reactors – Micro systems to generate water or fuel from Martian soil
🎯 Dynamic Route Optimization AI – Adapts path in real-time using satellite + terrain data

## 9️⃣ Solution Approach 🛠️
Design a multi-use, modular Mars rover with:
- Base Model: 2-person sealed cabin + solar power + terrain nav system

- Attachable Modules: Science, logistics, rescue

- Autonomous & manual mode

- Survival Systems built-in


## 🔟 Trade-offs & Decision Framework ⚖️
Complexity vs. Reliability
- Highly autonomous systems can fail; manual override is critical

Solar vs. Nuclear
- Solar is safer, but less dependable during storms

Modularity vs. Cost
- Modularity increases upfront cost but allows flexible use cases

Decision Framework:
🔺Impact vs Feasibility vs Criticality
Prioritize safety, mobility, and energy first → Expand later to onboard science and AI

## 1️⃣1️⃣ GTM Strategy 🌍
Target:
- Phase 1: NASA, ISRO, ESA (government agencies)

- Phase 2: Private players (SpaceX, Blue Origin)

- Phase 3: Commercial Mars missions & colony planning

Launch Strategy:
- Test on simulated Mars terrains (e.g., Utah desert)

- Iteratively test autonomy, survivability, and modularity

- Partner with space agencies for real mission pilots


## 1️⃣2️⃣ Success Metrics 📊
- Operational Reliability → # of successful missions / total missions

- Safety Rating → Zero breakdowns in critical environments

- Mission Impact → Distance covered, samples retrieved, time saved

- Adoption → Number of missions using the rover platform

- Battery Efficiency → Range per charge, energy use in rough terrain


## Summary 💡
By designing a modular, AI-assisted, solar-powered, human-rated rover for Mars that balances ruggedness with safety and scientific utility, we can support early Martian missions and scale toward future colonization efforts.

# Question 5: Design mentorship app for LinkedIn

## 1️⃣ Clarifying Questions
Before solutioning, I'd clarify:
- Goal – Is this to help people grow professionally, switch careers, or upskill?

- Mentor-Mentee Model – Are we matching 1:1, 1:many, or group-based mentoring?

- Frequency & Format – Is the mentorship async (chat-based) or sync (video sessions)?

- Target Audience – Is it early-career professionals, job switchers, students, or mid-level professionals?

- Incentives – Are mentors paid, volunteering, or incentivized via reputation/gamification?

- Duration – Short-term mentorship (e.g., 1 month) or ongoing relationships?

- Integration – Is this baked inside LinkedIn or a standalone app with LinkedIn SSO?

- Global or local – Are we matching mentors/mentees across geographies?

➡️ Prioritized Setup
- Built within LinkedIn (not standalone)

- Focused on early-mid career professionals (0–10 yrs exp)

- 1:1 mentorship via structured video & chat sessions

- Short-term, goal-driven mentorship (e.g., 4-week sprint)

- Mentors are volunteers, rewarded via reputation, badges

- Async + sync support


## 2️⃣ Stakeholders
👩‍🎓 Mentees – Seek guidance on skills, careers, interviews, or transitions
🧑‍💼 Mentors – Want to give back, build reputation, and network
🧑‍💻 Recruiters/Companies – Want access to upskilled talent
🏢 LinkedIn – Wants to drive engagement, time spent, and user stickiness

## 3️⃣ User Needs
### ✅ Must-haves (MVP)
👯 Matching Engine
- Based on role, industry, skills, goals

- Opt-in from mentors (with capacity limits)

- Show mentor availability & prior mentee feedback

📅 Session Scheduling
- Built-in calendar sync + auto-timezone detection

- Limited mentorship slots per week/month

💬 Communication Tools
- Video + chat (native or via LinkedIn Messaging)

- Async Q&A support, templates for intros

📁 Goal & Progress Tracker
- Structured templates: "Career switch", "Ace Interviews", "PM Growth"

- Checklist & notes per session

🏅 Reputation System
- Endorsements, thank-you notes, badges for mentors

- Visible on LinkedIn profile (e.g., "Mentor: 10 mentees helped")

### 🎯 Good-to-haves
- Mentor Leaderboards (Top Mentors in Data, Design, etc.)

- Feedback loop → "Was this session helpful?"

- Group mentoring & AMA-style sessions

- Content hub → Mentorship playbooks, success stories

- AI co-pilot → Smart suggestions for questions, scheduling reminders


## 4️⃣ Moonshot Ideas 🚀
🤖 AI Mentor Matchmaker – Auto-recommend mentors based on your goals, skills, and career stage
🌍 Global Mentorship Hackathons – Week-long sprint events with mentors from around the world
🧠 AI Session Summarizer – Recap mentorship call with action items & smart follow-ups
🎓 Mentor Certification Program – Unlock levels & exclusive perks (e.g., invites to LinkedIn events)
💼 Company-sponsored Mentorship – Org-sponsored mentors for underrepresented talent

## 5️⃣ Solution Approach
- Matching: Launch goal-based mentor pools (e.g., switching to product, breaking into FAANG, etc.)

- Structured Interaction: Add mentor/mentee workspace → Goals, upcoming session, notes

- Integrated Scheduling: Calendly-style integration inside LinkedIn

- Gamified Reputation: Show mentorship badges & thank-you cards on profiles

- Pilot & Iterate: Launch with power users & creators as initial mentors


## 6️⃣ Tradeoffs & Decision Framework
| Tradeoff | Rationale |
|----------|-----------|
| Manual vs algorithmic match | Start with algorithm-assisted manual matching to ensure quality |
| Paid vs free mentorship | Begin with volunteer-based → test paid tiers for experts later |
| Group vs 1:1 mentorship | Start with 1:1 for high impact & control → scale to group as demand grows |
| In-app chat vs LinkedIn DMs | Use existing DMs to reduce learning curve |
| Standalone app vs integration | Build inside LinkedIn to leverage network effects |

Decision Framework:
Impact x Effort x Network Effects → Prioritize high-utility, low-friction features inside LinkedIn

## 7️⃣ GTM Strategy
🎯 Target users:
- Professionals 1–5 yrs into career

- Active creators, influencers, & coaches on LinkedIn

🚀 Launch plan:
- Beta with top LinkedIn creators as mentors

- Promote through LinkedIn Newsletters & influencers

- Certification + early access waitlist for mentees

💡 Incentives:
- Badges & endorsements for mentors

- LinkedIn Learning credits or profile boosts


## 8️⃣ Success Metrics
### Adoption
- % of users opting in as mentors/mentees

- % successful match rate within 7 days

### Engagement
- Avg # of sessions per mentorship

- Completion rate of mentorship sprints

### NPS & Retention
- Mentorship feedback rating

- % mentors returning next quarter

### Profile Impact
- Increase in endorsements/engagement for mentors

- Career switch/offer milestones for mentees
