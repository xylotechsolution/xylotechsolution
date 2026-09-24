"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <div className="relative z-10 text-center mb-24 max-w-4xl mx-auto space-y-6 pt-16">
      {/* ১. সিকোয়েন্সিয়াল Eyebrow Text [06] */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center space-x-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E1B816]"
      >
        <div className="w-12 h-[1px] bg-[#E1B816]" />
        <span>[01]</span>
        <span className="text-white/60">INSIGHTS & ARTICLES</span>
      </motion.div>

      {/* ২. মেইন বড় হেডিং */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white leading-[0.95]"
      >
        Insights and{" "}
        <span className="text-[#E1B816] font-blackops font-light">
          Thoughts
        </span>{" "}
      </motion.h1>

      {/* ৩. সাব-টেক্সট / ডেসক্রিপশন */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
      >
        Stay updated with our latest articles, engineering updates, and industry
        insights on modern web and software design.
      </motion.p>
    </div>
  );
}
