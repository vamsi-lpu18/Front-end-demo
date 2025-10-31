import React from "react";
import { Link } from "react-router-dom";
import thumb1 from "../assets/project-1-ai.svg";
import thumb2 from "../assets/project-2.svg";
import thumb3 from "../assets/project-3.svg";
import avatar1 from "../assets/avatar-1.jpg";

const posts = [
  {
    id: 1,
    title: "Design Patterns for Scalable React Apps",
    excerpt:
      "How to structure components, hooks, and state to keep large frontends fast and maintainable.",
    image: thumb1,
    category: "Frontend",
    tags: ["React", "Architecture"],
    author: { name: "Priya Sharma", avatar: avatar1 },
    date: "Oct 15, 2025",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "From Zero to Cloud: A Practical Guide to Deployments",
    excerpt:
      "A hands-on walkthrough to ship your app to production with confidence and repeatability.",
    image: thumb2,
    category: "DevOps",
    tags: ["Cloud", "CI/CD"],
    author: { name: "Rohit Kumar", avatar: avatar1 },
    date: "Oct 10, 2025",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "UX Micro-interactions that Boost Conversion",
    excerpt:
      "Subtle animations, feedback, and empty-states that make products feel polished and human.",
    image: thumb3,
    category: "Design",
    tags: ["UX", "Animation"],
    author: { name: "Ananya Gupta", avatar: avatar1 },
    date: "Oct 2, 2025",
    readTime: "5 min read",
  },
];

const categories = ["All", "Frontend", "DevOps", "Design"];

const Blog = () => (
  <section>
    {/* Hero */}
    <div className="bg-linear-to-b from-indigo-50 to-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <nav className="text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Blog</span>
        </nav>
        <div className="mt-6 md:mt-8 flex items-start md:items-center justify-between gap-6 flex-col md:flex-row">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Insights, stories, and engineering notes
            </h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Practical tips from our team on building, shipping, and scaling modern products.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form className="relative">
              <input
                type="search"
                placeholder="Search articles..."
                className="w-full md:w-72 rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* Filters */}
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            className={`px-3 py-1.5 rounded-full text-sm border transition ${
              c === "All"
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
            }`}
            type="button"
          >
            {c}
          </button>
        ))}
      </div>
    </div>

    {/* Grid */}
    <div className="max-w-6xl mx-auto px-6 pb-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                {post.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-slate-600 text-sm">
                {post.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-7 w-7 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-xs text-slate-600">
                    <div className="font-medium text-slate-800">{post.author.name}</div>
                    <div>
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                </div>
                <Link
                  to="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <button className="px-3 py-2 rounded-md border border-slate-300 text-slate-700 bg-white hover:bg-slate-50">
          Previous
        </button>
        <div className="hidden sm:flex items-center gap-1">
          {[1, 2, 3, 4].map((p) => (
            <button
              key={p}
              className={`size-9 rounded-md text-sm font-medium border ${
                p === 1
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <button className="px-3 py-2 rounded-md border border-slate-300 text-slate-700 bg-white hover:bg-slate-50">
          Next
        </button>
      </div>
    </div>

    {/* Newsletter CTA */}
    <div className="border-t border-slate-200 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-slate-900">Get new posts in your inbox</h2>
              <p className="mt-2 text-slate-600">
                No spam. Only the latest tutorials, case studies, and product updates.
              </p>
            </div>
            <form className="mt-4 md:mt-0 w-full md:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full md:w-80 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  className="whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
