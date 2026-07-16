/* =========================================================
   EDIT ME — Core Team & Advisors data
   ---------------------------------------------------------
   This is the ONLY file you need to touch to update the
   /team page.

   Each member supports:
     name     : full name (required — leave "" to show a
                "To be announced" card until you have it)
     role     : position in the chapter (required)
     intro    : 1–3 sentence introduction (required)
     photo    : filename inside /public (optional — if omitted,
                a gradient monogram with the member's initials
                is shown instead)
     photoCard: true to show a large rectangular photo frame on
                the card (used for the chapter lead & advisors).
                Until `photo` is set, the frame shows an
                "Add photo" placeholder.
     linkedin : profile URL (optional)
     github   : profile URL (optional)

   Members with an empty name or a name starting with "Add "
   render as dashed placeholder cards.
========================================================= */

const coreTeam = [
  {
    name: "AYUSH SINGH",
    role: "Chapter Lead / President",
    intro: "Chapter Lead of MSA-GNIT — drives the chapter's vision, flagship events, and the growing community of student builders at GNIT.",
    photoCard: true,
    photo: "chapter-lead.jpg",
    linkedin: "https://www.linkedin.com/in/ayushsin9h/",
    github: ""
  },
  {
    name: "GOURAV CHANDRA",
    role: "Web Development",
    intro: "Builds and maintains the chapter's web presence. Hosted the Open Source Awareness session — taking students from open-source user to contributor with a live GitHub demo.",
    photoCard: true,
    photo: "web-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    name: "ISMAT SAYEED",
    role: "App Development",
    intro: "Handles mobile and cross-platform app development in the chapter, turning student ideas into installable apps and demystifying the app lifecycle in hands-on sessions.",
     photoCard: true,
    photo: "app-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    name: "IMON DEY",
    role: "AI-ML",
    intro: "Guides students through the AI/ML technologies promoted by Microsoft.",
    photoCard: true,
    photo: "ai-ml-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    name: "AISHANI HAZRA",
    role: "Cybersecurity",
    intro: "Drives the chapter's security awareness efforts and hosted the interactive quiz round at our AI agents workshop.",
    photoCard: true,
    photo: "cybersecurity-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    name: "DEBARGHYA SENGUPTA",
    role: "Cloud Computing",
    intro: "Manages the Azure and cloud initiatives in the chapter.",
    photoCard: true,
    photo: "cloud-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    name: "TITAS DAS",
    role: "Data Science",
    intro: "Guides the Microsoft Fabric technologies for data enthusiasts.",
    photoCard: true,
    photo: "data-science-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    name: "ISHITA DAS",
    role: "PR & Management",
    intro: "Runs the chapter's outreach, partnerships, and event coordination.",
    photoCard: true,
    photo: "pr-management-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    name: "SWAPNIL BASU",
    role: "Content",
    intro: "Leads the chapter's content strategy, including blogs, newsletters, and social media campaigns.",
    photoCard: true,
    photo: "content-lead.jpg",
    linkedin: "",
    github: ""
  }
];

const advisors = [
  {
    name: "PIYUSH KUMAR",
    role: "FOUNDER & ADVISOR",
    intro: "Microsoft Learn Student Ambassador (Beta)",
    photoCard: true,
    photo: "founder-advisor.jpg",
    linkedin: ""
  },
  {
    name: " RISHAV GUPTA",
    role: "Veteran Advisor",
    intro: "",
    photoCard: true,
    photo: "advisor-2.jpg",
    linkedin: ""
  },
  {
    name: "ADARSH JAISWAL",
    role: "Veteran Advisor",
    intro: "",
    photoCard: true,
    photo: "advisor-3.jpg",
    linkedin: ""
  },
   {
    name: "ADITYA KUMAR JHA",
    role: "Veteran Advisor",
    intro: "",
    photoCard: true,
    photo: "advisor-4.jpg",
    linkedin: ""
  }
];

module.exports = { coreTeam, advisors };
