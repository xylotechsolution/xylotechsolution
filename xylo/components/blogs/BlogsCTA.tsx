"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";
import ActionButton from "@/components/ui/ActionButton";

export default function BlogsCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* ProjectsCTA-এর একই স্টাইলের প্রিমিয়াম ব্লগ CTA সেকশন */}
      <section className="w-full bg-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* ব্যাকগ্রাউন্ডে সূক্ষ্ম গোল্ডেন গ্লো */}
        <div className="absolute -bottom-10 left-1/4 w-[400px] h-[200px] bg-[#E1B816]/5 blur-[100px] rounded-full pointer-events-none" />

        {/* গ্লোবাল উইডথ এবং প্যাডিং যা ProjectsCTA-এর সাথে হুবহু মিলবে */}
        <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-8 text-left">
          {/* ১. সিরিয়াল ট্যাগ [03] */}
          <div className="flex items-center space-x-3 text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase select-none">
            <span className="w-12 h-[1px] bg-[#E1B816]" />
            <span className="text-[#E1B816]">[03]</span>
            <span>Stay Connected</span>
          </div>

          {/* ২. মেইন শর্ট ও প্রফেশনাল হেডিং */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-sans">
            Have thoughts or{" "}
            <span className="text-[#E1B816] font-blackops">
              a project idea?
            </span>
          </h2>

          {/* ৩. সাবটেক্সট / রেসপন্স নোটিশ */}
          <p className="text-zinc-400 text-lg md:text-xl font-normal tracking-wide">
            Let&apos;s build better systems together. Response within 24 hours.
          </p>

          {/* ৪. বাটন গ্রুপ */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <ActionButton
              onClick={() => setIsModalOpen(true)}
              className="relative group overflow-hidden bg-[#121212] border border-white/10 hover:border-[#E1B816]/30 text-white font-bold text-xs tracking-widest uppercase px-8 py-4.5 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer flex items-center gap-3"
            >
              {/* গোল্ডেন গ্লো রিফ্লেকশন */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-[#E1B816]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              <span className="relative z-10 font-mono">GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </ActionButton>
          </div>
        </div>
      </section>

      {/* কন্টাক্ট মোডাল ট্রিগার */}
      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
