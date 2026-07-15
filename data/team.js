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
    linkedin: "",
    github: ""
  },
  {
    name: "",
    role: "Web Development",
    intro: "Builds and maintains the chapter's web presence. Hosted the Open Source Awareness session — taking students from open-source user to contributor with a live GitHub demo.",
    linkedin: "",
    github: ""
  },
  {
    name: "",
    role: "App Development",
    intro: "Handles mobile and cross-platform app development in the chapter, turning student ideas into installable apps and demystifying the app lifecycle in hands-on sessions.",
    linkedin: "",
    github: ""
  },
  {
    name: "",
    role: "AI-ML",
    intro: "Guides students through the AI/ML technologies promoted by Microsoft.",
    linkedin: "",
    github: ""
  },
  {
    name: "",
    role: "Cybersecurity",
    intro: "Drives the chapter's security awareness efforts and hosted the interactive quiz round at our AI agents workshop.",
    linkedin: "",
    github: ""
  },
  {
    name: "",
    role: "Cloud Computing",
    intro: "Manages the Azure and cloud initiatives in the chapter.",
    linkedin: "",
    github: ""
  },
  {
    name: "",
    role: "Data Science",
    intro: "Guides the Microsoft Fabric technologies for data enthusiasts.",
    linkedin: "",
    github: ""
  },
  {
    name: "",
    role: "PR & Management",
    intro: "Runs the chapter's outreach, partnerships, and event coordination.",
    linkedin: "",
    github: ""
  },
  {
    name: "",
    role: "Content",
    intro: "",
    linkedin: "",
    github: ""
  }
];

const advisors = [
  {
    name: "Add Advisor's Name",
    role: "Faculty Advisor",
    intro: "Placeholder — add your faculty advisor's designation, department, and a line on how they guide the chapter.",
    photoCard: true,
    photo: "",
    linkedin: ""
  },
  {
    name: "PIYUSH KUMAR",
    role: "FOUNDER & ADVISOR",
    intro: "Placeholder — add your co-advisor's designation, department, and a short introduction.",
    photoCard: true,
    photo: "founder-advisor.jpg",
    linkedin: ""
  },
  {
    name: "Add Mentor's Name",
    role: "Industry Mentor",
    intro: "Placeholder — add an industry mentor or Gold MLSA who guides the chapter (e.g. a speaker from your inauguration).",
    photoCard: true,
    photo: "",
    linkedin: ""
  }
];

module.exports = { coreTeam, advisors };
