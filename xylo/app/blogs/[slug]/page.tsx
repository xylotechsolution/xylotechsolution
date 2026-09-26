"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogsData } from "@/data/blogsData";

// Content Array Types
type ContentItem =
  | { type: "intro"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | {
      type: "cta";
      title: string;
      text: string;
      buttonText: string;
      buttonLink: string;
    }
  | { type: "faq"; question: string; answer: string };

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
          <div className="w-2 h-2 rounded-full bg-[#E1B816] animate-ping" />
          Loading article...
        </div>
      </main>
    );
  }

  const blog = blogsData.find(
    (b) => b.slug === slug || b.id.toString() === slug,
  );

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">
          🔍
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-1">Article Not Found</h2>
          <p className="text-zinc-500 text-xs max-w-xs">
            The article you are looking for does not exist or has been moved.
          </p>
        </div>
        <Link
          href="/blogs"
          className="text-xs font-semibold text-[#E1B816] bg-[#E1B816]/10 border border-[#E1B816]/20 px-5 py-2.5 rounded-full hover:bg-[#E1B816] hover:text-black transition-all duration-300"
        >
          ← Back to Articles
        </Link>
      </main>
    );
  }

  const recentPosts = blogsData.filter((b) => b.id !== blog.id).slice(0, 4);
  const relatedPosts = blogsData.filter((b) => b.id !== blog.id).slice(0, 3);

  const tagsList = blog.tags
    ? typeof blog.tags === "string"
      ? blog.tags.split(",")
      : blog.tags
    : ["Tech", "Engineering", "Web"];

  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200 py-28 md:py-36 px-4 sm:px-8 md:px-16 font-sans relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#E1B816]/[0.03] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-amber-600/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-[#E1B816] transition-colors group"
          >
            <span className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs group-hover:border-[#E1B816]/50 transition-colors">
              ←
            </span>
            Back to Articles
          </Link>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* MAIN ARTICLE AREA (8 Cols) */}
          <article className="lg:col-span-8">
            {/* Meta Top Tagline */}
            <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
              {blog.category && (
                <span className="text-[#E1B816] bg-[#E1B816]/10 border border-[#E1B816]/20 px-3.5 py-1 rounded-full font-medium tracking-wide">
                  {blog.category}
                </span>
              )}
              {blog.readTime && (
                <span className="text-zinc-500 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  {blog.readTime}
                </span>
              )}
              {blog.date && (
                <span className="text-zinc-500 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  {blog.date}
                </span>
              )}
            </div>

            {/* Article Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
              {blog.title}
            </h1>

            {/* Author Profile Ribbon */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/40 border border-white/[0.06] backdrop-blur-md mb-10">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E1B816] to-amber-700 p-[1px]">
                  <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center font-bold text-[#E1B816]">
                    {blog.author ? blog.author[0].toUpperCase() : "A"}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {blog.author || "Admin"}
                  </p>
                  <p className="text-xs text-zinc-500">
                    Software Engineer & Technical Writer
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-400">
                  Verified Post
                </span>
              </div>
            </div>

            {/* Featured Image */}
            {blog.image && (
              <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden mb-12 border border-white/[0.08] shadow-2xl group">
                <Image
                  src={blog.image}
                  alt={blog.title || "Blog Image"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-40" />
              </div>
            )}

            {/* Main Article Description / Intro */}
            {blog.description && (
              <div className="text-zinc-300 text-base md:text-lg leading-relaxed font-light mb-8">
                {blog.description}
              </div>
            )}

            {/* DYNAMIC CONTENT RENDERER */}
            <div className="space-y-6 mb-12">
              {blog.content?.map((item: ContentItem, idx: number) => {
                switch (item.type) {
                  case "intro":
                    return (
                      <div
                        key={idx}
                        className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#E1B816]/[0.08] to-transparent border-l-4 border-[#E1B816] my-6"
                      >
                        <p className="text-base md:text-lg text-zinc-100 italic font-medium leading-relaxed">
                          &quot;{item.text}&quot;
                        </p>
                      </div>
                    );

                  case "paragraph":
                    return (
                      <p
                        key={idx}
                        className="text-zinc-300 text-base md:text-lg leading-relaxed font-light"
                      >
                        {item.text}
                      </p>
                    );

                  case "heading":
                    return (
                      <h2
                        key={idx}
                        className="text-2xl sm:text-3xl font-bold text-white pt-6 pb-2"
                      >
                        {item.text}
                      </h2>
                    );

                  case "list":
                    return (
                      <ul key={idx} className="space-y-3 my-4">
                        {item.items.map((listItem, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-zinc-300 text-base md:text-lg"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E1B816] mt-2.5 flex-shrink-0" />
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  case "table":
                    return (
                      <div
                        key={idx}
                        className="my-8 overflow-x-auto rounded-2xl border border-white/[0.08] bg-zinc-900/30"
                      >
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="border-b border-white/[0.08] bg-zinc-900/80 text-xs font-mono uppercase tracking-wider text-[#E1B816]">
                              {item.headers.map((header, i) => (
                                <th key={i} className="p-4">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/[0.05] text-sm text-zinc-300 font-light">
                            {item.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="hover:bg-zinc-800/30 transition-colors"
                              >
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-4">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );

                  case "cta":
                    return (
                      <div
                        key={idx}
                        className="my-10 p-8 rounded-3xl bg-gradient-to-r from-[#E1B816]/20 via-zinc-900 to-zinc-900 border border-[#E1B816]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                      >
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-zinc-400 max-w-md">
                            {item.text}
                          </p>
                        </div>
                        <Link
                          href={item.buttonLink || "/contact"}
                          className="bg-[#E1B816] hover:bg-amber-400 text-black font-semibold text-xs px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#E1B816]/10 whitespace-nowrap"
                        >
                          {item.buttonText}
                        </Link>
                      </div>
                    );

                  case "faq":
                    return (
                      <div
                        key={idx}
                        className="my-4 p-5 rounded-2xl bg-zinc-900/40 border border-white/[0.06]"
                      >
                        <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                          <span className="text-[#E1B816] font-mono text-xs">
                            Q.
                          </span>{" "}
                          {item.question}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed pl-5">
                          {item.answer}
                        </p>
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>

            {/* Article Tags */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-2 mb-12">
              <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider mr-2">
                Topic Tags:
              </span>
              {tagsList.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-lg hover:border-[#E1B816]/40 hover:text-white transition-colors cursor-default"
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>

            {/* Bottom Contact Callout */}
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Have feedback or questions?
                </h4>
                <p className="text-xs text-zinc-400 max-w-md">
                  Feel free to reach out if you want to discuss this project or
                  collaborate.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-[#E1B816] hover:bg-amber-400 text-black font-semibold text-xs px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#E1B816]/10 whitespace-nowrap"
              >
                Get in Touch
              </Link>
            </div>
          </article>

          {/* SIDEBAR AREA (4 Cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Widget 1: Article Stats */}
            <div className="p-6 rounded-3xl bg-zinc-900/30 border border-white/[0.08] backdrop-blur-xl sticky top-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#E1B816]" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Article Overview
                </h3>
              </div>

              <div className="space-y-3.5 text-xs border-t border-white/[0.06] pt-4 text-zinc-400 font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Author</span>
                  <span className="text-zinc-200 font-sans font-medium">
                    {blog.author || "Admin"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Category</span>
                  <span className="text-zinc-200 font-sans font-medium">
                    {blog.category || "General"}
                  </span>
                </div>
                {blog.readTime && (
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Estimated Read</span>
                    <span className="text-zinc-200 font-sans font-medium">
                      {blog.readTime}
                    </span>
                  </div>
                )}
                {blog.date && (
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Published</span>
                    <span className="text-zinc-200 font-sans font-medium">
                      {blog.date}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Widget 2: Recent Articles */}
            {recentPosts.length > 0 && (
              <div className="p-6 rounded-3xl bg-zinc-900/30 border border-white/[0.08] backdrop-blur-xl">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1B816]" />
                  Recent Articles
                </h3>

                <div className="flex flex-col gap-4">
                  {recentPosts.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blogs/${item.slug || item.id}`}
                      className="p-3.5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-800/50 border border-white/[0.04] hover:border-white/10 transition-all duration-300 group block"
                    >
                      <span className="text-[10px] font-mono text-[#E1B816] uppercase tracking-wider block mb-1">
                        {item.category || "Article"}
                      </span>
                      <h4 className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* RELATED ARTICLES SECTION */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  More Articles
                </h3>
                <p className="text-xs text-zinc-400">
                  Explore other related posts and tutorials
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.slug || item.id}`}
                  className="p-6 rounded-3xl bg-zinc-900/30 border border-white/[0.06] hover:border-[#E1B816]/30 transition-all duration-300 group block hover:-translate-y-1"
                >
                  <span className="text-[10px] font-mono text-[#E1B816] uppercase tracking-wider block mb-3">
                    {item.category || "Read Next"}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#E1B816] transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs line-clamp-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
