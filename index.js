const express = require("express");
const path = require("path");

// Editable content lives in /data — update those files, not the views.
const { coreTeam, advisors } = require("./data/team");
const blogs = require("./data/blogs");
const msTech = require("./data/mstech");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Home — includes Collaboration (#collaborate) and
// Microsoft Technologies for Students (#ms-tech) sections
app.get("/", (req, res) => {
  res.render("index", {
    currentPath: "/",
    title: "MSA GNIT | Microsoft Student Ambassadors — GNIT Chapter",
    description:
      "The student-run Microsoft Learn Ambassador chapter at Guru Nanak Institute of Technology, Kolkata — workshops, hackathons, and Microsoft technologies for students.",
    msTech,
  });
});

// Events
app.get("/events", (req, res) => {
  res.render("event", {
    currentPath: "/events",
    title: "Events | MSA GNIT",
    description:
      "Workshops, tech talks, and community sessions run by the Microsoft Student Ambassadors GNIT Chapter.",
  });
});

// Core Team & Advisors
app.get("/team", (req, res) => {
  res.render("team", {
    currentPath: "/team",
    title: "Core Team & Advisors | MSA GNIT",
    description:
      "Meet the core team and advisors behind the Microsoft Student Ambassadors GNIT Chapter.",
    coreTeam,
    advisors,
  });
});

// Inaugural
app.get("/inaugural", (req, res) => {
  res.render("inaugural", {
    currentPath: "/inaugural",
    title: "Inaugural | MSA GNIT",
    description:
      "The inauguration of the MSA-GNIT Chapter — November 19, 2025, GNIT Auditorium, Kolkata. Speakers, agenda, and photo gallery.",
  });
});

// Blogs
app.get("/blogs", (req, res) => {
  res.render("blogs", {
    currentPath: "/blogs",
    title: "Blogs | MSA GNIT",
    description:
      "Event recaps, tutorials, and chapter news written by the MSA GNIT community.",
    blogs,
  });
});

// 404 — keep last
app.use((req, res) => {
  res.status(404).render("404", {
    currentPath: "",
    title: "Page not found | MSA GNIT",
    description: "This page does not exist.",
  });
});

// Start a server when run directly (local dev / Render / Railway / VPS).
// On Vercel, the exported app is wrapped as a serverless function instead.
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
