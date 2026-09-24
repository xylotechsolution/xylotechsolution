"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    category: string;
    readTime: string;
    description: string;
    image: string;
    slug: string;
  };
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  // সিকোয়েন্সিয়াল ইনডেক্সিং যেমন: [01], [02], [03]...
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link
        href={`/blogs/${blog.slug}`}
        className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-[#E1B816]/40 hover:bg-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-full"
      >
        {/* Image Area */}
        <div className="relative w-full h-52 md:h-60 bg-zinc-950 overflow-hidden border-b border-white/10">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            {/* [02] ফরম্যাটের সেকশন বা কার্ড নম্বর ট্যাগ */}
            <div className="flex items-center justify-between text-[11px] font-mono mb-3 uppercase tracking-wider">
              <div className="flex items-center space-x-2">
                <span className="text-[#E1B816] font-bold">
                  [{formattedIndex}]
                </span>
                <span className="text-[#E1B816] font-semibold">
                  {blog.category}
                </span>
              </div>
              <span className="text-zinc-400">{blog.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#E1B816] transition-colors duration-300 line-clamp-2">
              {blog.title}
            </h3>

            {/* Description (শর্ট ৩ লাইন) */}
            <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 font-light mb-4">
              {blog.description}
            </p>
          </div>

          {/* Read Link */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#E1B816] transition-colors">
            <span className="font-mono">READ ARTICLE</span>
            <ArrowUpRight className="w-4 h-4 text-[#E1B816] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
