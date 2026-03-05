"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

// Sample blog posts (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    slug: "ai-meeting-transcription-best-practices",
    title: "AI Meeting Transcription: Best Practices for 2024",
    excerpt: "Learn how to get the most out of AI-powered meeting transcription with these proven tips and strategies.",
    date: "2024-01-15",
    category: "Productivity",
  },
  {
    slug: "how-to-keep-team-aligned-with-ai-notes",
    title: "How to Keep Your Team Aligned with AI Notes",
    excerpt: "Discover how AI-generated meeting notes can help keep your remote team on the same page.",
    date: "2024-01-10",
    category: "Team Collaboration",
  },
  {
    slug: "meeting-summary-tools-comparison",
    title: "Top Meeting Summary Tools Compared",
    excerpt: "A comprehensive comparison of the best AI meeting summary tools available today.",
    date: "2024-01-05",
    category: "Tools",
  },
  {
    slug: "boosting-meeting-productivity-with-ai",
    title: "Boosting Meeting Productivity with AI",
    excerpt: "Learn how artificial intelligence is transforming the way we conduct and follow up on meetings.",
    date: "2023-12-28",
    category: "Productivity",
  },
  {
    slug: "remote-team-meeting-best-practices",
    title: "Best Practices for Remote Team Meetings",
    excerpt: "Essential tips for running effective remote meetings that your team will actually enjoy.",
    date: "2023-12-20",
    category: "Remote Work",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-m_gray_900 to-m_gray_700">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MeetMemo Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Insights, tips, and guides on AI-powered meetings and productivity
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
              >
                <div className="text-sm text-purple-400 mb-2">{post.category}</div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
