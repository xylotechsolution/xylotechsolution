"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  Code,
  Layout,
  Cpu,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/serviceData";

// --- Tools Data ---
const toolsData = {
  categories: [
    "All",
    "Design & Prototyping",
    "Research & Optimization",
    "Engineering & AI Stack",
  ],
  items: [
    { name: "Figma", category: "Design & Prototyping" },
    { name: "Framer", category: "Design & Prototyping" },
    { name: "Webflow", category: "Engineering & AI Stack" },
    { name: "Next.js", category: "Engineering & AI Stack" },
    { name: "TypeScript", category: "Engineering & AI Stack" },
    { name: "Tailwind CSS", category: "Design & Prototyping" },
    { name: "OpenAI", category: "Engineering & AI Stack" },
    { name: "Claude AI", category: "Engineering & AI Stack" },
    { name: "Hotjar", category: "Research & Optimization" },
    { name: "Google Analytics", category: "Research & Optimization" },
    { name: "GitHub", category: "Engineering & AI Stack" },
    { name: "Storybook", category: "Design & Prototyping" },
  ],
};

// --- Detailed Dynamic Content ---
const detailedServices: Record<
  string,
  {
    heroTag: string;
    tagline: string;
    coreFeatures: { title: string; desc: string; icon: React.ElementType }[];
    modules: { phase: string; title: string; topics: string[] }[];
    roadmap: { step: string; title: string; highlights: string[] }[];
    team: { name: string; role: string; track: string; img: string }[];
  }
> = {
  websites: {
    heroTag: "WEB ARCHITECTURE & DESIGN",
    tagline:
      "High-Performance Digital Experiences Engineered for High Conversion",
    coreFeatures: [
      {
        title: "UX/UI Design for Websites",
        desc: "Intuitive architecture, detailed wireframes, and high-fidelity interactive prototypes.",
        icon: Layout,
      },
      {
        title: "Custom Website Design",
        desc: "Built from scratch with clean code, mobile-first design, and conversion UX.",
        icon: Code,
      },
      {
        title: "Landing Page Optimization",
        desc: "Persuasive conversion-focused layouts paired with lightning-fast load speeds.",
        icon: Sparkles,
      },
      {
        title: "Framer & Next.js Builds",
        desc: "Smooth motion design and component architecture built for modern web performance.",
        icon: Cpu,
      },
      {
        title: "Design System Scaling",
        desc: "Reusable UI component libraries that scale seamlessly with your growing brand.",
        icon: Layers,
      },
      {
        title: "Website Revamping",
        desc: "Transform outdated sites into sleek, modern, high-ranking digital experiences.",
        icon: CheckCircle2,
      },
    ],
    modules: [
      {
        phase: "PHASE 01",
        title: "UX Research & Interface Foundations",
        topics: [
          "User Persona & Behavioral Research",
          "Information Architecture & Sitemaping",
          "Wireframing & Interactive Prototyping",
          "Design System Tokens & Typography",
        ],
      },
      {
        phase: "PHASE 02",
        title: "Frontend Engineering & Motion",
        topics: [
          "Next.js 15 App Router Architecture",
          "Framer Motion Micro-Interactions",
          "Tailwind CSS Responsive Layouts",
          "Headless CMS Integration (Sanity/Strapi)",
        ],
      },
    ],
    roadmap: [
      {
        step: "01",
        title: "Discovery & Strategy",
        highlights: ["Market Research", "Competitor Audit", "UX Wireframes"],
      },
      {
        step: "02",
        title: "Visual UI Design",
        highlights: ["Dark Mode Palette", "Component Tokens", "Design Specs"],
      },
      {
        step: "03",
        title: "Next.js Engineering",
        highlights: ["Clean Architecture", "Motion FX", "API Routes"],
      },
      {
        step: "04",
        title: "SEO & Launch",
        highlights: [
          "Lighthouse 95+ Score",
          "Domain Setup",
          "Live Server Push",
        ],
      },
    ],
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  const serviceBase =
    servicesData.find((s) => s.slug === slug) || servicesData[0];
  const detail = detailedServices[slug] || detailedServices["websites"];

  const [activeTab, setActiveTab] = useState(0);
  const [activeToolCat, setActiveToolCat] = useState("All");
  const [activeRoadmapStep, setActiveRoadmapStep] = useState(0);

  const filteredTools =
    activeToolCat === "All"
      ? toolsData.items
      : toolsData.items.filter((t) => t.category === activeToolCat);

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-24 md:py-32 font-sans relative overflow-hidden">
      {/* Background Subtle Lime Glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none transform-gpu"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, #a3e635 0%, transparent 70%)`,
          filter: "blur(140px)",
        }}
      />

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {/* HERO SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6 pt-6"
        >
          <Link
            href="/#services"
            className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-[#E1B816] bg-white/5 border border-white/10 px-4 py-2 rounded-sm transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SERVICES</span>
          </Link>

          <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E1B816]">
            <div className="w-12 h-[1px] bg-[#E1B816]" />
            <span>[{serviceBase.id}]</span>
            <span className="text-white/60">/</span>
            <span>{detail.heroTag}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl uppercase">
            {serviceBase.title}{" "}
            <span className="text-[#E1B816] font-blackops">Suite.</span>
          </h1>

          <p className="text-zinc-400 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
            {detail.tagline}
          </p>
        </motion.div>

        {/* 1. CORE FEATURES SECTION */}
        <section className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E1B816]">
              <div className="w-8 h-[1px] bg-[#E1B816]" />
              <span>What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our Full Suite of Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {detail.coreFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="group relative bg-[#0d0d0d] p-8 rounded-sm border border-white/5 hover:border-[#E1B816]/40 transition-all duration-300 space-y-4"
                >
                  <div className="p-3 border border-white/10 rounded-lg w-fit text-[#E1B816] bg-white/5 group-hover:border-[#E1B816] transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E1B816] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 2. DELIVERABLE MODULES (Folder Tab Layout) */}
        <section className="space-y-8">
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {detail.modules.map((mod, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all ${
                  activeTab === idx
                    ? "bg-[#E1B816] text-black font-bold"
                    : "bg-[#0d0d0d] text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {mod.phase}
              </button>
            ))}
          </div>

          <div className="bg-[#0d0d0d] border border-[#E1B816]/30 p-8 sm:p-12 rounded-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase bg-[#E1B816] text-black px-3 py-1">
                  {detail.modules[activeTab].phase}
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                  {detail.modules[activeTab].title}
                </h3>
                <ul className="space-y-3 font-medium text-zinc-300">
                  {detail.modules[activeTab].topics.map((tp, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-[#E1B816]" />
                      <span>{tp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black text-white p-8 rounded-sm border border-white/10 font-mono text-xs space-y-4">
                <div className="text-zinc-500">
                  // MODULE ARCHITECTURE READY
                </div>
                <div className="text-[#E1B816]">
                  &gt; Status: 100% Production Ready
                </div>
                <div className="text-zinc-400 leading-relaxed">
                  Full source files, design systems, and exportable clean React
                  components included.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EXECUTION ROADMAP */}
        <section className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E1B816]">
              <div className="w-8 h-[1px] bg-[#E1B816]" />
              <span>Workflow Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Step-by-Step Delivery Roadmap
            </h2>
          </div>

          <div className="bg-[#0d0d0d] p-8 rounded-sm border border-white/5 relative overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
              {detail.roadmap.map((st, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRoadmapStep(idx)}
                  className={`p-5 rounded-sm text-left transition-all border ${
                    activeRoadmapStep === idx
                      ? "bg-[#E1B816] border-[#E1B816] text-black font-bold"
                      : "bg-black border-white/5 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <div
                    className={`text-xs font-mono font-bold mb-2 ${activeRoadmapStep === idx ? "text-black" : "text-[#E1B816]"}`}
                  >
                    {st.step}
                  </div>
                  <div className="text-sm sm:text-base">{st.title}</div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500">
                  CURRENT DELIVERABLES
                </span>
                <div className="flex flex-wrap gap-2">
                  {detail.roadmap[activeRoadmapStep].highlights.map((hl, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/5 px-3 py-1.5 rounded-sm font-mono text-zinc-300 border border-white/10"
                    >
                      ✓ {hl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TECH STACK & TOOLS */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E1B816]">
              <div className="w-8 h-[1px] bg-[#E1B816]" />
              <span>Stacks & Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Tools & Platforms We Design In
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {toolsData.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveToolCat(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeToolCat === cat
                    ? "bg-[#E1B816] text-black font-bold"
                    : "bg-[#0d0d0d] text-zinc-400 border border-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[#0d0d0d] border border-white/5 p-4 rounded-sm flex items-center justify-center hover:border-[#E1B816]/40 transition-all font-mono text-xs text-zinc-300"
              >
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FOOTER */}
        <div className="bg-[#0d0d0d] p-10 sm:p-16 rounded-sm border border-[#E1B816]/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl z-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to build something{" "}
              <span className="text-[#E1B816] font-blackops">iconic?</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Let’s execute your project with production-grade precision and
              stunning design.
            </p>
          </div>
          <Link
            href="/#contact"
            className="bg-[#E1B816] text-black font-extrabold px-8 py-4 rounded-sm hover:bg-white transition-all text-xs uppercase tracking-wider shrink-0 flex items-center space-x-2 z-10"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
