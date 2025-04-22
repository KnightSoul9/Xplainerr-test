---
title: "1.1 Youtube watch time has gone down"
metaTitle: "Youtube watch time has gone down - Root Cause Analysis"
metaDescription: ""
lessonUnlocked : true
---

# Youtube watch time has gone down. Why?

### 🧭 Clarifying Questions Before Jumping to Solutions
Before analyzing the drop in YouTube watch time, I'd want to clarify a few things:

**Scope of Watch Time Drop**
- Is the decline sudden or gradual?
- Is it a global pattern or localized to certain regions?

**Segmentation**
- Is the drop isolated to specific user segments (e.g., mobile-only users, iOS vs Android, logged-in vs anonymous)?
- Is the drop consistent across content categories (music, gaming, shorts)?

**Success Criteria Predefined?**
- What were the launch success and guardrail metrics?
- Was any acceptable threshold for watch time drop (e.g., ≤5%) defined?

**Comment Engagement Definition**
- Does engagement include comment creation, likes, replies, or time spent scrolling comments?

**Quality Control**
- Were there any spam or abuse detection systems enabled during launch?
- Any reported degradation in content quality or recommendations?

These help define whether this is a UX issue, a platform bug, or a deeper product tradeoff.

### 🧩 Hypothesis Framework for Root Cause
After confirming the above, here's a structured breakdown of possible causes for ↑ comment engagement but ↓ watch time:

**1. UI Trade-off on Mobile Real Estate**
- On desktop, comments and recommended videos co-exist visibly.
- On mobile, if comments now appear above recommendations, they may push recommendations below the fold, leading to reduced discovery and click-through.

**2. Attention Budget Shift**
- User time is finite. If comments now capture that time (e.g., reading replies), they might spend less time watching a second or third video in the same session.

**3. User Education Gap**
- Users may not realize there are recommended videos below the comments section.
- Especially first-time users of the new UI might think the video ends with the comments.

**4. Poor Recommendation Visibility or Quality**
- Recommendations may not just be lower in the feed but might be less engaging or contextually relevant post-launch.
- Algorithm bugs or exposure changes could reduce CTR and watch time.

**5. Platform-Specific UX Issues**
- The impact could be stronger on iOS vs Android based on gesture patterns, screen sizes, or navigation flows.

**6. Abuse or Spam Boosting Comment Metrics**
- Engagement ≠ value. If the increase is due to bots or spammy comments, the quality of experience suffers, possibly pushing users away.

### 🔬 Diagnostic Analysis
Assuming comment engagement is valid and meaningful, and there are no major spam issues or platform bugs, I'd narrow focus to:

**Watch Time Funnel Drop-off Analysis**
- Is the drop primarily post-first video?
- Are users still watching one video per session but dropping off instead of continuing?

**Heatmaps and Scroll Behavior**
- Are users reaching the recommendation shelf after viewing comments?
- Is time-on-comments cannibalizing time-on-content?

**Rec System Health Check**
- Are recs being shown, clicked, and watched as before?
- Are CTR and satisfaction metrics (like downvotes or "not interested") up?

### 🧪 Remedial Experimentation Plan
**A/B Test: Number of Comments Shown**
- Control: 3 comments shown
- Variants: Show 2 or 1 comment before collapse
- Goal: Restore recommendation visibility without killing comment engagement

**A/B Test: Comment Positioning**
- Control: Comments above recs
- Variant: Collapsed by default / toggle-based / recs first
- Goal: Compare relative engagement and watch time trade-offs

**Tooltip Education**
- Introduce subtle nudge (e.g., "Scroll to view recommended videos")
- Measure recovery in recs CTR and downstream video consumption

**Recommendation Ranker Adjustment**
- Surface shorter videos first post-comment section to ease re-engagement
- Optimize for "low-commitment" next actions

### 📈 Metrics to Track
- Primary: Watch time per session, session depth (avg. videos per session)
- Secondary: Scroll-through rate to recs, comment dwell time, recs CTR
- Guardrails: Spam reports, video downvotes, session exits from comment page

### ✅ Decision-Making Framework
Use a launch matrix based on these two axes:
- % Change in Comment Engagement
- % Change in Watch Time

Example:
- +50% comments / -4% watch time → Launch ✅
- +50% comments / -10% watch time → Investigate + Iterate ❌
- +30% comments / -2% watch time → Consider tradeoff ⚖️

Anchor all experiments to original success + guardrail thresholds. Don't move the goalpost post-launch.

### 🧠 Final Thoughts
This issue stems from a classic UX vs. engagement tradeoff. Product decisions need:
- Strong upfront hypothesis-setting
- Robust segmentation analysis
- Fast UI experimentation loops
- Clear success criteria defined before the launch

In this case, it's less about failure and more about refining the balance between content consumption and engagement — optimizing for total time spent on value-added actions, not just raw numbers.