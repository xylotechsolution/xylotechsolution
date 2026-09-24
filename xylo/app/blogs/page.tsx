"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, RotateCcw } from "lucide-react";
import { blogsData } from "@/data/blogsData";
import BlogHero from "@/components/blogs/BlogHero";
import BlogCard from "@/components/blogs/BlogCard";
import BlogsCTA from "@/components/blogs/BlogsCTA";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(blogsData.map((b) => b.category).filter(Boolean))),
  ];

  const filteredBlogs =
    activeCategory === "All"
      ? blogsData
      : blogsData.filter((b) => b.category === activeCategory);

  return (
    <main className="relative w-full bg-black text-white overflow-hidden pt-36 pb-24 font-sans min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E1B816]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        {/* ─── SECTION [01]: HERO HEADER ─── */}
        <BlogHero />

        {/* ─── SECTION [02]: ARTICLES & GRID ─── */}
        <div className="mb-20">
          {/* [02] Section Header */}
          <div className="space-y-4 mb-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E1B816]"
            >
              <div className="w-12 h-[1px] bg-[#E1B816]" />
              <span>[02]</span>
              <span className="text-white/60">ARTICLES & INSIGHTS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
            >
              Selected{" "}
              <span className="text-[#E1B816] font-blackops font-light">
                Articles
              </span>
            </motion.h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center space-x-2 md:space-x-3 pb-4 mb-10 overflow-x-auto border-b border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-all py-2 px-5 rounded-xl text-xs font-semibold whitespace-nowrap border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#E1B816] text-black border-[#E1B816]"
                    : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid or Empty State */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          ) : (
            /* ── EMPTY STATE UI (Kono blog na thakle jeta dekhabe) ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center justify-center py-20 px-6 rounded-3xl border border-white/10 bg-white/[0.02] text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#E1B816]">
                <FileText className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                No articles found in{" "}
                <span className="text-[#E1B816]">
                  &quot;{activeCategory}&quot;
                </span>
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed mb-6 font-light">
                We are currently drafting new engineering insights for this
                topic. Check back soon or explore other categories.
              </p>

              <button
                onClick={() => setActiveCategory("All")}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#E1B816] text-black font-bold text-xs hover:bg-[#c8a313] transition-all duration-300 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Show All Articles</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* ─── SECTION [03]: NEXT STEP / CTA ─── */}
      <BlogsCTA />
    </main>
  );
}
