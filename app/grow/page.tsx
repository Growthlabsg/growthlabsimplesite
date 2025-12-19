"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Briefcase,
  TrendingUp,
  GraduationCap,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: Briefcase,
    title: "Job Board",
    description:
      "Post job openings and discover top talent. Find co-founders, engineers, marketers, and other professionals who can help scale your startup.",
  },
  {
    icon: Users,
    title: "Talent Discovery",
    description:
      "Access a pool of skilled professionals actively looking for opportunities. Filter by skills, experience, location, and startup stage preferences.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship Programs",
    description:
      "Connect with experienced founders and industry experts who can provide guidance on scaling, operations, marketing, fundraising, and strategic growth.",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description:
      "Track your startup's growth metrics, benchmark against peers, and access insights to make data-driven decisions about your scaling strategy.",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "Access growth frameworks, scaling playbooks, and strategic planning tools to chart your path from startup to scale-up to exit.",
  },
  {
    icon: Zap,
    title: "Network Effects",
    description:
      "Leverage our vibrant professional network to accelerate partnerships, customer acquisition, and market expansion through community connections.",
  },
];

export default function GrowPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-primary/5 py-16 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6"
              >
                <Users className="w-5 h-5" />
                <span className="text-sm font-semibold">Grow</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Scale Your Venture
              </h1>
              <p className="text-xl sm:text-2xl text-slate-700 mb-8 leading-relaxed font-light">
                Post jobs, discover talent, access mentorship programs, and
                leverage our vibrant professional network. Turn your idea into a
                scalable venture — faster and smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://app.growthlab.sg/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors min-h-[48px]"
                >
                  Start Growing
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="https://app.growthlab.sg/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold border-2 border-slate-300 rounded-lg hover:border-primary transition-colors min-h-[48px]"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Scale Your Startup
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light">
                Comprehensive tools and resources to grow and scale your venture
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="text-amber-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ready to Scale Your Startup?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Join thousands of founders growing and scaling their ventures on
              GrowthLab.
            </p>
            <Link
              href="https://app.growthlab.sg/signup"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors min-h-[56px]"
            >
              Start Growing Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
