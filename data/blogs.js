/* =========================================================
   EDIT ME — Latest Updates data
   ---------------------------------------------------------
   This is the ONLY file you need to touch to update the
   /blogs ("Latest Updates") page.

   Each entry supports:
     title    : update title (required)
     excerpt  : 1–3 sentence teaser shown on the card (required)
     author   : source / author name (required)
     date     : display date string (required)
     tag      : short category label, e.g. "Global Event",
                "Certification Offer", "Giveaway" (required)
     readTime : e.g. "5 min read" (optional — omit for
                announcements)
     image    : creative/banner filename inside /public
                (optional — shown as the card banner; if the
                file is missing, the gradient fallback shows)
     banner   : CSS gradient shown behind/instead of the image
                (optional)
     link     : where "Read post →" goes — a LinkedIn post,
                Microsoft Learn page, Medium/Hashnode article,
                or Tech Community blog. (required)

   NOTE: drop the three creatives into /public with these
   exact names for them to appear on the cards:
     updates-aiskillsfest.jpg   (AI Skills Fest card)
     updates-fabric.jpg         (Fabric free-vouchers card)
     updates-azure.jpg          (Azure 50% discount card)
========================================================= */

const blogs = [
  {
    title: "AI Skills Fest, 2026",
    excerpt: "Join us online June 8–12 for #AISkillsFest, a free global learning event designed to help you build practical AI skills through live sessions, curated learning paths, and hands-on, real-world scenarios. Whether you're a business professional, technical practitioner, leader, student, or simply curious about AI, there's something for everyone — plus chances to earn prizes and certification exam vouchers.",
    author: "Microsoft Learn Team",
    date: "June 8–12, 2026",
    tag: "Global Event",
    image: "updates-aiskillsfest.jpg",
    banner: "linear-gradient(115deg,#2bbfa4,#a8dd6d 55%,#cbe368)",
    link: "https://www.linkedin.com/posts/microsoftlearn_ai-skills-fest-is-coming-soon-ugcPost-7463717884649832448-b8GC"
  },
  {
    title: "Fabric Data Days, 2026",
    excerpt: "Free Microsoft certification voucher alert! Microsoft is officially offering a 100% discount on the DP-600 and DP-700 exams. The Microsoft Student Ambassadors, GNIT Chapter is excited to share this limited-time opportunity to get Microsoft Fabric certified for free — the perfect chance to upskill and validate your expertise on the Fabric platform.",
    author: "Microsoft Fabric",
    date: "Deadline: February 28, 2026",
    tag: "Certification Offer",
    image: "updates-fabric.jpg",
    banner: "linear-gradient(135deg,#181818 55%,#6b5600)",
    link: "https://www.linkedin.com/posts/microsoft-fabric-offer-ugcPost-7431360254573072384-JM5q"
  },
  {
    title: "Imagine Cup 2026 — Student Startup Competition",
    excerpt: "Are you a student founder or an expert innovator ready to take your innovations to the world stage? The Microsoft Imagine Cup 2026 is the best option for you. It is more than just a competition—it’s a launchpad for the next generation of AI-driven startups.Whether you have a rough prototype or a growing user base, this is your roadmap to success.",
    author: "Microsoft Imagine Cup",
    date: "Deadline: January 5th, 2026 ",
    tag: "Competition",
    image: "updates-imagine-cup.jpg",
    banner: "linear-gradient(135deg,#d83b01,#6e1423)",
    link: "https://www.linkedin.com/posts/msa-gnit_imaginecup-studentdeveloper-ai-activity-7408890823532056576-Ly1A"
  },
  {
    title: "Azure Certification Exam Voucher Giveaway, 2025",
    excerpt: "Unlock your potential with the Microsoft Applied Skills Sweepstakes! As part of the Microsoft Applied Skills campaign, Microsoft announced a giveaway of 15,000 vouchers, each providing a 50% discount on select Microsoft Certification exams — a great way to validate your technical expertise and advance your career.",
    author: "Microsoft Applied Skills",
    date: "Aug 25 – Oct 13, 2025",
    tag: "Giveaway",
    image: "updates-azure.jpg",
    banner: "linear-gradient(135deg,#123c7c,#0a58c0)",
    link: "https://www.linkedin.com/posts/msa-gnit_microsoft-microsoftappliedskills-microsoftcertification-activity-7377960465278222336-yPZ3"
  },
  {
    title: "Microsoft Learn Program (MLP) - Phase 1 & 2",
    excerpt: "Dive into hands-on learning learning paths, modules & certifications designed from Microsoft Learn Platform to build your skills in web development, app development, data science, cloud computing, and more — all on Microsoft's cloud.",
    author: "MSA-GNIT Chapter",
    date: "Renews every semester",
    tag: "Student Offer",
    image: "updates-MLP.jpg",
    banner: "linear-gradient(135deg,#e8532e,#a62b08)",
    link: "https://learn.microsoft.com/?wt.mc_id=studentamb_474813"
  }
];

module.exports = blogs;
