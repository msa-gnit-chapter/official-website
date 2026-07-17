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
    name: "",
    role: "Chapter Lead - Microsoft Student Ambassador (ASSOCIATE)",
    intro: "Drives the MSA-GNIT Chapter's vision and flagship events, has grown the community from 250 to 800+ members, organized a cross-campus workshop reaching 200+ students, and encouraged participation among student builders at GNIT.",
    photoCard: true,
    photo: "chapter-lead.jpg",
    linkedin: "https://www.linkedin.com/in/ayushsin9h/",
    github: "",
    microsoft: "https://mvp.microsoft.com/en-US/studentambassadors/profile/cbd27418-45b6-46a7-8231-ba1c1a777cd9"
  },
  {
    role: "Web Development Lead",
    intro: "Builds and maintains the chapter's web presence. Hosted the Open Source Awareness session — taking students from open-source user to contributor with a live GitHub demo.",
    photoCard: true,
    photo: "web-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    role: "App Development Lead",
    intro: "Handles mobile and cross-platform app development in the chapter, turning student ideas into installable apps and demystifying the app lifecycle in hands-on sessions.",
     photoCard: true,
    photo: "app-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    role: "AI-ML Lead",
    intro: "Guides students through the AI/ML technologies promoted by Microsoft.",
    photoCard: true,
    photo: "ai-ml-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    role: "Cybersecurity Lead",
    intro: "Drives the chapter's security awareness efforts and hosted the interactive quiz round at our AI agents workshop.",
    photoCard: true,
    photo: "cybersecurity-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    role: "Cloud Computing Lead",
    intro: "Manages the Azure and cloud initiatives in the chapter.",
    photoCard: true,
    photo: "cloud-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    role: "Data Science Lead",
    intro: "Guides the Microsoft Fabric technologies for data enthusiasts.",
    photoCard: true,
    photo: "data-science-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    role: "PR & Management Lead",
    intro: "Runs the chapter's outreach, partnerships, and event coordination.",
    photoCard: true,
    photo: "pr-management-lead.jpg",
    linkedin: "",
    github: ""
  },
  {
    role: "Content Lead",
    intro: "Leads the chapter's content strategy, including blogs, newsletters, and social media campaigns.",
    photoCard: true,
    photo: "content-lead.jpg",
    linkedin: "",
    github: ""
  }
];

const advisors = [
  {
    name: "",
    role: "FOUNDER & ADVISOR",
    intro: "Microsoft Learn Student Ambassador (Beta)",
    photoCard: true,
    photo: "founder-advisor.jpg",
    linkedin: ""
  },
  {
    name: "",
    role: "Veteran Advisor",
    intro: "",
    photoCard: true,
    photo: "advisor-2.jpg",
    linkedin: ""
  },
  {
    name: "",
    role: "Veteran Advisor",
    intro: "",
    photoCard: true,
    photo: "advisor-3.jpg",
    linkedin: ""
  },
   {
    name: "",
    role: "Veteran Advisor",
    intro: "",
    photoCard: true,
    photo: "advisor-4.jpg",
    linkedin: ""
  }
];

module.exports = { coreTeam, advisors };
