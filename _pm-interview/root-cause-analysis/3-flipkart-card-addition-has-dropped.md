---
title: "1.3 Flipkart Cart Addition Has Dropped"
metaTitle: "Flipkart Cart Addition Has Dropped - Root Cause Analysis"
metaDescription: ""
lessonUnlocked : true
---
# Flipkart Cart Addition Has Dropped. Why?

## 🧭 Step 1: Clarifying Questions (Before Analysis)

**"Before jumping into root cause analysis, I’d like to ask a few clarifying questions to ensure we’re solving the right problem."**

### Scope of the Issue
- Is the 15% decline across all platforms (web, iOS, Android)?
- Is the drop more visible in certain categories (e.g., electronics vs fashion)?

### User Segmentation
- Are certain user cohorts more affected?
  - New users vs returning users?
  - High-intent buyers?
  - Certain geographies?

### Timeline & Coincidences
- Did the drop coincide with:
  - Recent releases?
  - Code deployments?
  - UX redesigns?
  - Product experiments?

### Data Validation
- Has the analytics instrumentation been audited?
- Could this be a tracking or logging issue?

✅ Once confirmed that:
- The **data is valid**
- The drop is **real and limited to Android app**

→ Proceed to structured analysis.

---

## 🧩 Step 2: Hypothesis Framework

### A. Is the Problem Real?
- ✅ Analytics team has validated event integrity.
- ✅ No known instrumentation issues.

→ This is a **real regression**, not a phantom metric.

---

### B. External Factors (Ruled Out)
- No competitor campaign surge (e.g., Amazon)
- No macroeconomic shift or holiday slowdown
- No social media backlash or PR crisis

→ Not externally triggered.

---

### C. Segment-Based Breakdown
- No demographic-specific drop (age, gender, region)
- **100% of the drop is from Android users**
- iOS and Web are unaffected

→ Strong signal pointing to **Android-specific regression**.

---

## 🧪 Step 3: Funnel-Based Debugging (Android Only)

### App Launch & Login
- No change in login drop-offs — users can enter the app successfully.

### Product Discovery
- Users are reaching product detail pages (PDPs) as usual.

### Add-to-Cart Button Visibility
- UI is intact — button is present and clickable.

### Add-to-Cart Action
- Event logs show “Add to Cart” clicks **are fired**
- ❌ But cart is **not getting updated**

→ Conversion from click to cart = **0% on new Android build**

→ Indicates a **critical regression** in cart flow

---

## 🔧 Step 4: Root Cause Identified

🔴 **A breaking change in the latest Android release is preventing cart state updates.**
- Button appears to work, but cart stays empty
- No error or feedback shown → silent failure

→ High-impact bug causing real user churn and confusion

---

## 📊 Step 5: Quantifying the Impact

- Android = ~70% of Flipkart mobile traffic
- Entire 15% drop stems from Android issue
- Likely underreporting true impact: users may churn after trying and failing

---

## ✅ Step 6: Proposed Solutions

### 1. Immediate Fix
- Patch the cart state bug via hotfix
- End-to-end test for cart addition flow

### 2. Rollback (If Hotfix Delayed)
- Roll back to previous stable version
- Use staged rollout or Play Store force downgrade

### 3. Proactive Communication
- In-app banners or push notification:

> “We noticed a bug affecting cart additions. Please update your app to continue shopping smoothly.”

- Helps retain trust, reduce CSAT damage

### 4. Engineering Process Improvement
- Add cart flow to automated regression test suites
- Strengthen QA around core funnel metrics
- Add observability dashboards to detect funnel breaks early

---

## 🧠 Step 7: PM Learnings & Reflections

As a PM, key learnings include:
- Build **guardrails** around mission-critical flows (cart, checkout, payment)
- Set **real-time alerts** for drops in conversion funnels
- Run **postmortems** with QA, engineering, analytics to prevent recurrence

---

## 📌 Final Summary (for Interview Close)

> “We observed a 15% drop in cart additions, isolated to Android users after a recent app update. A funnel walk-through revealed that cart addition events fired, but the backend state never updated. This was a silent but critical regression. Immediate solutions involve a hotfix and user communication, while long-term actions focus on better regression testing and real-time observability.”

