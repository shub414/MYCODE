import React from "react";

const profile = {
  name: "Shubham",
  title: "Data Analyst",
  location: "Ludhiana, India",
  email: "youremail@example.com",
  phone: "+91-XXXXXXXXXX",
  summary:
    "Data-driven analyst with 5 years of experience working with datasets, automating reports, and building dashboards to help stakeholders make better decisions.",
  experience: [
    {
      role: "Computer Operator",
      company: "ABC Solutions Pvt. Ltd.",
      start: "Jan 2020",
      end: "Present",
      bullets: [
        "Managed daily data entry and validation for 10+ databases.",
        "Automated recurring reports using Excel macros and scheduled scripts.",
        "Collaborated with the analytics team to prepare datasets for dashboards."
      ]
    },
    {
      role: "Junior Data Analyst",
      company: "XYZ Technologies",
      start: "Jun 2018",
      end: "Dec 2019",
      bullets: [
        "Prepared weekly sales and performance reports.",
        "Converted raw logs to structured CSVs and cleaned datasets."
      ]
    }
  ],
  education: [
    {
      degree: "B.Sc. (Computer Science)",
      institution: "Some University",
      year: "2018"
    }
  ],
  skills: [
    "Excel (Advanced)",
    "SQL",
    "Python (pandas)",
    "Tableau / Power BI",
    "Data Cleaning",
    "Reporting & Dashboards"
  ],
  projects: [
    {
      name: "Sales Dashboard",
      desc: "Built a sales dashboard in Power BI to track regional KPIs and identify churn risks."
    },
    {
      name: "Inventory Forecasting",
      desc: "Implemented simple time-series models to suggest reorder points and reduce stockouts."
    }
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-900 p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
        {/* HEADER CENTERED */}
        <header className="p-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">{profile.name}</h1>
          <p className="mt-3 text-xl opacity-90">{profile.title}</p>
          <p className="mt-1 text-lg">{profile.location}</p>
          <div className="mt-5 flex justify-center gap-3 flex-wrap">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-indigo-700 hover:bg-indigo-100 transition px-4 py-1.5 rounded-full text-sm font-medium shadow"
              >
                {s.label}
              </a>
            ))}
          </div>
        </header>

        {/* MAIN BODY */}
        <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="md:col-span-2 space-y-8">
            {/* SUMMARY */}
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 pb-2">
                Professional Summary
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{profile.summary}</p>
            </div>

            {/* EXPERIENCE */}
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 pb-2">
                Experience
              </h2>
              <div className="mt-4 space-y-6">
                {profile.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border bg-gradient-to-br from-gray-50 to-white shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <h3 className="font-bold text-lg text-gray-900">
                        {exp.role} — {exp.company}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {exp.start} — {exp.end}
                      </p>
                    </div>
                    <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* PROJECTS */}
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 pb-2">
                Projects
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {profile.projects.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border bg-white shadow hover:shadow-md transition"
                  >
                    <h4 className="font-semibold text-gray-800">{p.name}</h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SIDEBAR */}
          <aside className="md:col-span-1 space-y-8">
            <div className="p-5 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border shadow">
              <h3 className="text-lg font-semibold text-indigo-700">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border shadow">
              <h3 className="text-lg font-semibold text-indigo-700">Education</h3>
              <div className="mt-3 space-y-2 text-sm text-gray-700">
                {profile.education.map((e, i) => (
                  <div key={i}>
                    <p className="font-medium text-gray-900">{e.degree}</p>
                    <p className="text-gray-600">
                      {e.institution} • {e.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.print()}
                className="w-full py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              >
                Print / Save as PDF
              </button>
              <a
                href={`mailto:${profile.email}?subject=Opportunity for ${profile.name}`}
                className="w-full text-center block py-2 rounded-xl border border-indigo-300 text-indigo-700 font-medium hover:bg-indigo-50 transition"
              >
                Contact Me
              </a>
            </div>
          </aside>
        </main>

        {/* FOOTER */}
        <footer className="p-6 bg-gray-50 text-center text-sm text-gray-600 border-t">
          © {new Date().getFullYear()} {profile.name} — Designed with ✨
        </footer>
      </div>
    </div>
  );
}
