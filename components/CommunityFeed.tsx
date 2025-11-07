"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
  Play,
  X,
} from "lucide-react";
import Image from "next/image";

interface Post {
  id: number;
  type: "image" | "video" | "text";
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  media?: string;
  timestamp: string;
  likes: number;
  comments: number;
  category?: string;
}

const feedPosts: Post[] = [
  {
    id: 1,
    type: "image",
    user: {
      name: "Sarah Chen",
      username: "@sarahchen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    },
    content: "Amazing networking event today! Met so many inspiring founders.",
    media:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    timestamp: "7:47 AM Sep 24",
    likes: 42,
    comments: 8,
    category: "Events",
  },
  {
    id: 2,
    type: "image",
    user: {
      name: "Mike Rodriguez",
      username: "@mikero",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    content: "Behind the scenes at our latest workshop",
    media:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    timestamp: "5:28 AM Sep 26",
    likes: 38,
    comments: 5,
    category: "Workshops",
  },
  {
    id: 3,
    type: "text",
    user: {
      name: "Rajanshee",
      username: "@RajansheeS",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    },
    content:
      "It was a great experience. I feel so much more confident in myself and my abilities. I'm excited to see what the future holds with GrowthLab.",
    timestamp: "12:03 PM Jun 09",
    likes: 67,
    comments: 12,
    category: "Testimonial",
  },
  {
    id: 4,
    type: "video",
    user: {
      name: "David Kim",
      username: "@davidkim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    },
    content:
      "A week in my life at GrowthLab - connecting with amazing entrepreneurs!",
    media:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    timestamp: "3:15 PM Sep 28",
    likes: 89,
    comments: 15,
    category: "Community",
  },
  {
    id: 5,
    type: "image",
    user: {
      name: "Emma Watson",
      username: "@emmawatson",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    },
    content:
      "Team collaboration session - building something amazing together!",
    media:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    timestamp: "10:22 AM Sep 25",
    likes: 54,
    comments: 9,
    category: "Networking",
  },
  {
    id: 6,
    type: "image",
    user: {
      name: "James Park",
      username: "@jamespark",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
    },
    content: "Found the perfect co-founder through GrowthLab! 🚀",
    media:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
    timestamp: "2:45 PM Sep 23",
    likes: 76,
    comments: 11,
    category: "Success",
  },
  {
    id: 7,
    type: "text",
    user: {
      name: "Lisa Anderson",
      username: "@lisand",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    },
    content:
      "Just raised our seed round! GrowthLab connected us with the perfect investors. Grateful for this amazing community.",
    timestamp: "9:18 AM Sep 27",
    likes: 128,
    comments: 23,
    category: "Funding",
  },
  {
    id: 8,
    type: "image",
    user: {
      name: "Tom Wilson",
      username: "@tomwilson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    },
    content: "Workshop highlights - learning so much!",
    media:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
    timestamp: "6:30 PM Sep 24",
    likes: 45,
    comments: 7,
    category: "Workshops",
  },
];

export default function CommunityFeed() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [dismissedPosts, setDismissedPosts] = useState<Set<number>>(new Set());

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleDismiss = (postId: number) => {
    setDismissedPosts((prev) => new Set(prev).add(postId));
  };

  const visiblePosts = feedPosts.filter((post) => !dismissedPosts.has(post.id));

  return (
    <section className="framer-motion-optimized relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 relative z-10"
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">
              05
            </span>
            <motion.div
              className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-amber"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-10"
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
              Community Feed
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light">
              See what our community is sharing. Real updates, stories, and
              moments from founders, investors, and innovators.
            </p>
          </motion.div>
        </div>

        {/* Feed Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {visiblePosts.map((post, index) => {
            const isLiked = likedPosts.has(post.id);
            const isTextPost = post.type === "text";
            const isVideoPost = post.type === "video";

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="break-inside-avoid mb-6 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden group"
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                {/* Post Header */}
                <div className="p-4 pb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={post.user.avatar}
                        alt={post.user.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm truncate">
                        {post.user.name}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {post.user.username}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDismiss(post.id)}
                    className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                    aria-label="Dismiss post"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Post Content */}
                {isTextPost ? (
                  <div className="px-4 pb-4">
                    <p className="text-slate-700 leading-relaxed text-sm font-light">
                      {post.content}
                    </p>
                  </div>
                ) : (
                  <div className="relative aspect-video bg-slate-100 overflow-hidden">
                    {isVideoPost ? (
                      <>
                        <Image
                          src={post.media || ""}
                          alt={post.content}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                            <Play
                              className="text-primary ml-1"
                              size={24}
                              fill="currentColor"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <Image
                        src={post.media || ""}
                        alt={post.content}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                    {post.category && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Post Caption */}
                {!isTextPost && (
                  <div className="px-4 pt-3 pb-2">
                    <p className="text-slate-700 text-sm font-light leading-relaxed line-clamp-2">
                      {post.content}
                    </p>
                  </div>
                )}

                {/* Post Footer */}
                <div className="px-4 py-3 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1.5 transition-colors ${
                          isLiked
                            ? "text-red-500"
                            : "text-slate-500 hover:text-red-500"
                        }`}
                      >
                        <Heart
                          size={18}
                          fill={isLiked ? "currentColor" : "none"}
                        />
                        <span className="text-xs font-medium">
                          {post.likes + (isLiked ? 1 : 0)}
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          // Comment functionality
                          alert("Comment feature coming soon");
                        }}
                        className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors"
                      >
                        <MessageCircle size={18} />
                        <span className="text-xs font-medium">
                          {post.comments}
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          // Share functionality
                          if (navigator.share) {
                            navigator
                              .share({
                                title: post.content,
                                text: post.content,
                                url: window.location.href,
                              })
                              .catch(() => {
                                // Fallback: copy to clipboard
                                navigator.clipboard.writeText(
                                  window.location.href
                                );
                                alert("Link copied to clipboard!");
                              });
                          } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert("Link copied to clipboard!");
                          }
                        }}
                        className="text-slate-500 hover:text-primary transition-colors"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                    <span className="text-xs text-slate-400">
                      {post.timestamp}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Load More / Create Post CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/login"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px]"
            >
              Create Post
            </Link>
            <button
              onClick={() => {
                // Load more posts functionality
                // TODO: Implement pagination or load more posts
                alert("Load more functionality will be implemented soon");
              }}
              className="px-8 py-4 bg-white text-slate-900 font-semibold border-2 border-slate-300 rounded-lg hover:border-primary transition-all duration-300 min-h-[56px]"
            >
              Load More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
