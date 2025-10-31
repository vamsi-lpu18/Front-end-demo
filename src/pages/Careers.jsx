import React, { useState } from "react";
import teamImg from "../assets/project-2-ai.svg";

const JobCard = ({ job, onView }) => {
  const {
    role,
    level,
    location,
    desc,
    tags = [],
    posted = "2d",
    color = "#6366f1",
  } = job;
  const initials = role
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="relative rounded-xl overflow-hidden transform transition hover:-translate-y-2 hover:shadow-lg">
      {/* left accent stripe */}
      <div
        style={{ background: color }}
        className="absolute left-0 top-0 h-full w-1"
      />

      <div className="bg-white rounded-xl border border-slate-100 p-6 pl-8">
        <div className="flex items-start gap-4">
          <div
            className="w-16 h-16 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-lg"
            style={{
              background: `linear-gradient(135deg, ${color}, #ffffff22)`,
            }}
          >
            {initials}
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{role}</h3>
                <div className="mt-1 text-sm text-slate-600">
                  {level} • {location}
                </div>
              </div>

              <div className="text-sm text-slate-500">{posted} ago</div>
            </div>

            <p className="mt-4 text-sm text-slate-700">{desc}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ background: `${color}20`, color: `${color}` }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a
                className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm shadow-sm"
                href={`mailto:hr@appdost.in?subject=Applying%20for%20${encodeURIComponent(
                  role
                )}`}
              >
                Apply
              </a>
              <button
                onClick={() => onView(job)}
                className="px-4 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:bg-slate-100"
              >
                View details
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const JobModal = ({ job, onClose }) => {
  if (!job) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 z-10">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{job.role}</h2>
            <div className="text-sm text-slate-600 mt-1">
              {job.level} • {job.location}
            </div>
          </div>
          <button onClick={onClose} className="text-slate-500">
            ✕
          </button>
        </div>

        <div className="mt-4 text-slate-700">
          <p>{job.desc}</p>
          <ul className="mt-4 list-disc ml-6 text-sm text-slate-600">
            <li>Strong communication and ownership.</li>
            <li>Collaborate with product and design to ship features.</li>
            <li>Write clean, maintainable code and tests.</li>
          </ul>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
            href={`mailto:hr@appdost.in?subject=Applying%20for%20${encodeURIComponent(
              job.role
            )}`}
          >
            Apply for this role
          </a>
          <button onClick={onClose} className="px-4 py-2 rounded-md border">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Careers = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const jobs = [
    {
      role: "Frontend Engineer",
      level: "Mid - Senior",
      location: "Remote / Patna",
      desc: "Build performant UI with React, Tailwind and client-side routing. Improve developer experience and mentorship.",
      tags: ["React", "Tailwind", "TypeScript"],
      posted: "3d",
    },
    {
      role: "Backend Engineer",
      level: "Mid - Senior",
      location: "Remote / Banka",
      desc: "Design and maintain APIs, optimize database queries and scale services.",
      tags: ["Node.js", "Postgres", "APIs"],
      posted: "5d",
    },
    {
      role: "UI/UX Designer",
      level: "Mid",
      location: "Patna",
      desc: "Design delightful experiences and craft design systems in Figma.",
      tags: ["Figma", "Prototyping", "Design Systems"],
      posted: "1w",
    },
    {
      role: "Mobile Engineer (Android)",
      level: "Mid",
      location: "Remote / Hybrid",
      desc: "Develop Kotlin/Flutter apps and ship to Play Store.",
      tags: ["Kotlin", "Android", "CI/CD"],
      posted: "2w",
    },
  ];

  const filtered = jobs.filter((j) => {
    if (filter !== "All" && j.level && !j.level.includes(filter)) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (j.role + j.desc + j.tags.join(" ")).toLowerCase().includes(q);
  });

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Careers at AppDost
          </h1>
          <p className="mt-4 text-slate-600">
            We’re building delightful products that impact learners and
            businesses. Join a small, fast-moving team where ownership matters.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"
              href="#open-roles"
            >
              Open roles
            </a>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg"
              href="mailto:hr@appdost.in"
            >
              Refer a friend
            </a>
          </div>
        </div>

        <div>
          <img
            src={teamImg}
            alt="team"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <div id="open-roles" className="mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roles, skills, keywords"
              className="border rounded-md px-3 py-2 w-72"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded-md px-3 py-2"
            >
              <option>All</option>
              <option>Mid</option>
              <option>Senior</option>
              <option>Mid - Senior</option>
            </select>
          </div>

          <div className="text-sm text-slate-600">
            {filtered.length} open positions
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((j) => (
            <JobCard key={j.role} job={j} onView={(job) => setSelected(job)} />
          ))}
        </div>
      </div>

      <JobModal job={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Careers;
