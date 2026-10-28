"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";

type TabId = "about" | "experience" | "education" | "skills";
type ResumeTab = { id: TabId; label: string; icon: IconName };
const tabs: ResumeTab[] = [
  { id: "about", label: "About me", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "education", label: "Education", icon: "education" },
  { id: "skills", label: "Skills", icon: "code" },
];
const details = [
  ["Name", "GISA Aime Savio"],
  ["Nationality", "Rwandan"],
  ["Phone", "+250 798 331 228"],
  ["Email", "gisaaimesavio@gmail.com"],
  ["Experience", "2+ years"],
  ["Availability", "Open to work"],
  ["Languages", "English, Kinyarwanda"],
];
type TimelineItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};
const experience: TimelineItem[] = [
  {
    period: "2021 — Present",
    title: "Senior UX & Tech Lead",
    place: "TechCorp Solutions · Berlin, Germany",
    description:
      "Leading front-end architecture and product design for high-scale digital products.",
  },
  {
    period: "2018 — 2021",
    title: "Full Stack Web Engineer",
    place: "Innovate Digital · Munich, Germany",
    description:
      "Built responsive web applications and design systems using React and modern web tools.",
  },
];
const education: TimelineItem[] = [
  {
    period: "2020 — 2023",
    title: "Mathematics, Computer Science and Economics",
    place: "ES Sancta Maria",
    description:
      "Focused on HTML, CSS and fundamentals of programming language like C++, Java and Visual Basic.",
  },
  {
    period: "2024 — Present",
    title: "B.S. in Computer Science",
    place: "University of Rwanda",
    description:
      "Studied software architecture, algorithms, and responsive interface design.",
  },
];
const skillGroups = [
  {
    initials: "UI",
    name: "UI/UX Design",
    tools: "Figma, Google Stich",
  },
  {
    initials: "FE",
    name: "Frontend development",
    tools: "HTML, JS, CSS, React, TypeScript, Next, React native, Tailwind CSS",
  },
  {
    initials: "BE",
    name: "Backend systems",
    tools: "Node.js, Express, PostgreSQL",
  },
  { initials: "TO", name: "Tools & delivery", tools: "Git & Github" },
];

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="rounded-2xl border border-stone-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
      <span className="inline-flex rounded-full bg-brand-sand/15 px-3 py-1 text-xs font-bold text-brand-sand-dark dark:text-brand-sand">
        {item.period}
      </span>
      <h3 className="mt-4 text-lg font-bold text-ink dark:text-white">
        {item.title}
      </h3>
      <p className="mt-1 text-xs font-medium text-stone-500">{item.place}</p>
      <p className="mt-4 text-sm leading-6 text-stone-600 dark:text-stone-400">
        {item.description}
      </p>
    </article>
  );
}

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  return (
    <section
      id="resume"
      className="scroll-mt-24 border-y border-stone-200/80 bg-stone-100/70 px-5 py-20 dark:border-white/10 dark:bg-white/[0.025] sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="A little about me"
          title="My resume"
          description="A quick look at the people, experience, and skills behind the work."
        />
        <div
          role="tablist"
          aria-label="Resume information"
          className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:text-sm ${activeTab === tab.id ? "bg-brand-sand text-white shadow-md shadow-brand-sand/20" : "border border-stone-200 bg-white text-stone-600 hover:border-brand-sand dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-300"}`}
            >
              <Icon name={tab.icon} className="size-4" />
              {tab.label}
            </button>
          ))}
        </div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className="animate-in"
          >
            <ResumePanel tab={tab.id} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ResumePanel({ tab }: { tab: TabId }) {
  if (tab === "about")
    return (
      <div className="mx-auto max-w-3xl text-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-sand-dark dark:text-brand-sand">
            Software Designer & developer
          </p>
          <h3 className="mt-3 text-2xl font-bold text-ink dark:text-white">
            Designing with people in mind.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 dark:text-stone-400">
            Hello, I’m Gisa, a software designer and developer who enjoys making
            useful, human-centered websites and mobile Applications. I work
            across research, interface design, and front-end development to help
            teams bring thoughtful ideas to life.
          </p>
          <dl className="mx-auto mt-7 grid max-w-2xl gap-x-6 gap-y-4 text-left sm:grid-cols-2">
            {details.map(([label, value]) => (
              <div key={label} className="flex gap-2 text-xs">
                <dt className="min-w-24 font-semibold text-stone-500">
                  {label}
                </dt>
                <dd className="text-stone-800 dark:text-stone-200">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  if (tab === "experience")
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {experience.map((item) => (
          <TimelineCard key={item.title} item={item} />
        ))}
      </div>
    );
  if (tab === "education")
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <TimelineCard key={item.title} item={item} />
        ))}
      </div>
    );
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((skill) => (
        <article
          key={skill.name}
          className="rounded-2xl border border-stone-200/80 bg-white p-6 text-center dark:border-white/10 dark:bg-white/[0.04]"
        >
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand-sand/20 text-sm font-extrabold text-brand-sand-dark dark:text-brand-sand">
            {skill.initials}
          </span>
          <h3 className="mt-4 text-sm font-bold text-ink dark:text-white">
            {skill.name}
          </h3>
          <p className="mt-2 text-xs leading-5 text-stone-500">{skill.tools}</p>
        </article>
      ))}
    </div>
  );
}
