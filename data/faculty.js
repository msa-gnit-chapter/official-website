/* =========================================================
   EDIT ME — Faculty data (Principal & Club Faculty In-charge)
   ---------------------------------------------------------
   This is the ONLY file you need to touch to update the
   /faculty page.

   Each person supports:
     name     : full name (required)
     role     : designation, e.g. "Principal" (required)
     dept     : department / affiliation line (optional)
     intro    : 1–3 sentence introduction (optional)
     photo    : filename inside /public (optional — until set,
                a large "Add photo" placeholder frame shows)
     linkedin : profile URL (optional)
     email    : email address (optional)

   To show a photo: drop the image into /public and set
   `photo: "principal.jpg"` (or whatever you name it).
========================================================= */

// The Principal — shown as a single large featured card up top.
const principal = {
  name: "Prof. (Dr.) Swarup Kumar Mitra Principal",
  role: "Principal",
  dept: "Guru Nanak Institute of Technology, Kolkata",
  intro: "GNIT is a multidisciplinary education hub and seat of integrated learning promoting unfettered liberal thinking, creativity and innovation in the domain of Technology, Management Sciences, and Applied Sciences.",
  photo: "principal.jpg",
  linkedin: "",
  email: ""
};

// Club Faculty In-charge(s) — one or more cards below the Principal.
// Add or remove entries freely.
const facultyIncharge = [
  {
    name: "Dr. Mahamuda Sultana",
    role: "Club Faculty In-charge",
    dept: "Department of Computer Science & Engineering, GNIT",
    intro: "Placeholder — add a short intro for the faculty in-charge who mentors and guides the MSA-GNIT chapter.",
    photo: "facultyIncharge.jpg",
    linkedin: "",
    email: ""
  },
  {
    name: "Add Faculty In-charge Name",
    role: "Club Faculty Co-in-charge",
    dept: "Department of ______, GNIT",
    intro: "Placeholder — add a short intro for the co-in-charge faculty (remove this entry if there's only one in-charge).",
    photo: "",         // e.g. "faculty-incharge-2.jpg"
    linkedin: "",
    email: ""
  }
];

module.exports = { principal, facultyIncharge };
