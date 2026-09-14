"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ActionButton from "@/components/ui/ActionButton";
import { blogsData } from "@/data/blogsData";

export default function Blogs() {
  // প্রথম ৫টি ব্লগ হোম পেজের জন্য স্লাইস
  const featuredBlogs = blogsData.slice(0, 5);

  // স্ক্রিনশটের মতো কার্ডগুলো উপরে-নিচে অফসেট (Offset) করার পজিশন
  const offsetClasses = [
    "lg:translate-y-0", // Card 1
    "lg:translate-y-12", // Card 2 (হালকা নিচে)
    "lg:-translate-y-6", // Card 3 (হালকা উপরে)
    "lg:translate-y-8", // Card 4 (হালকা নিচে)
    "lg:translate-y-0", // Card 5
  ];

  return (
    <section
      id="blogs"
      className="relative w-full bg-black text-white overflow-hidden py-24 md:py-32 px-6 md:px-20 font-sans border-t border-white/5"
    >
      {/* ব্যাকগ্রাউন্ড নিওন গ্লো */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E1B816]/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* হেডার ট্যাগলাইন ও টাইটেল */}
        <div className="space-y-4 mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start space-x-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E1B816]"
          >
            <div className="w-12 h-[1px] bg-[#E1B816]" />
            <span>[06]</span>
            <span className="text-white/60">INSIGHTS & ARTICLES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white max-w-xl"
          >
            Latest From Our{" "}
            <span className="text-[#E1B816] font-blackops font-light">
              Blogs.
            </span>
          </motion.h2>
        </div>

        {/* ─── স্ক্রিনশটের মতো ৫টি লম্বালম্বি কার্ডের Masonry/Offset Layout ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start pb-16">
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${offsetClasses[index % offsetClasses.length]}`}
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-[#E1B816]/40 hover:bg-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-full"
              >
                {/* পিকচার এরিয়া (স্ক্রিনশটের মতো উপরে ছবি) */}
                <div className="relative w-full aspect-[3/4] bg-zinc-950 overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* টেক্সট ও কন্টেন্ট এরিয়া (স্ক্রিনশটের মতো নিচে টেক্সট) */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* ডেট ও ক্যাটাগরি */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-3 uppercase tracking-wider">
                      <span className="text-[#E1B816] font-semibold">
                        {blog.category}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>

                    {/* টাইটেল */}
                    <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#E1B816] transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* বর্ণনা */}
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 mb-4">
                      {blog.description}
                    </p>
                  </div>

                  {/* রিড মোর লিংক */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#E1B816] transition-colors">
                    <span>VIEW MORE</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#E1B816]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ─── এক্সপ্লোর বাটন (সব ব্লগ দেখতে /blogs পেজে নিয়ে যাবে) ─── */}
        <div className="text-center mt-12">
          <Link href="/blogs" className="inline-block group">
            <ActionButton className="rounded-xl px-8 py-4 text-sm font-bold flex items-center space-x-2">
              <span>Explore more blogs</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </ActionButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
