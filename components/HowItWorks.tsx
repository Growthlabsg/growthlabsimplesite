"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  FileText,
  Network,
  Rocket,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import StructuredData from "./StructuredData";
import { getHowToSchema } from "@/lib/seo/structuredData";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Join the Ecosystem",
    description:
      "Sign up and create your profile. Tell us about yourself, your startup, or your goals. Get verified and join 2,500+ members.",
    features: ["Create your profile", "Get verified", "Access community"],
  },
  {
    step: "02",
    icon: Network,
    title: "Connect & Network",
    description:
      "Use our LinkedIn-style platform to connect with founders, investors, students, and innovators. AI-powered matching helps you find the right people.",
    features: [
      "Browse member directory",
      "AI-powered matching",
      "Join interest groups",
    ],
  },
  {
    step: "03",
    icon: FileText,
    title: "Build Your Startup Page",
    description:
      "Create and customize your startup business page. Share updates, milestones, and news. Showcase your venture to the community.",
    features: [
      "Create business page",
      "Share updates",
      "Showcase your venture",
    ],
  },
  {
    step: "04",
    icon: Rocket,
    title: "Access Resources",
    description:
      "Leverage AI-driven tools, mentorship programs, startup resources, and educational content. Get guidance to accelerate your growth.",
    features: [
      "AI tools & analytics",
      "Mentorship matching",
      "Resource library",
    ],
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Launch & Grow",
    description:
      "Post jobs, raise funding, discover partners, and scale your venture. Connect with investors and turn your idea into reality.",
    features: ["Raise funding", "Post jobs", "Find partners"],
  },
];

export default function HowItWorks() {
  // Generate HowTo schema for Generative Engine Optimization
  const howToSchema = getHowToSchema(
    steps.map((step) => ({
      title: step.title,
      description: step.description,
      features: step.features,
    }))
  );

  return (
    <>
      <StructuredData data={howToSchema} />
      <section
        id="how-it-works"
        className="framer-motion-optimized relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ isolation: "isolate" }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Numbered Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
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
                08
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
                How It Works
              </h2>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl font-light mb-2">
                Get started in 5 simple steps
              </p>
              <p className="text-lg text-slate-500 font-light">
                From joining the ecosystem to launching and growing your startup
                — we've got you covered.
              </p>
            </motion.div>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-amber to-primary" />

            <div className="space-y-16">
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    style={{
                      willChange: "transform, opacity",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)",
                    }}
                  >
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-4 flex items-center gap-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-amber rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                          <Icon className="text-white" size={36} />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl -z-0" />
                      </div>
                      <div className="hidden lg:block">
                        <div className="text-6xl font-bold text-primary/20">
                          {item.step}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8">
                      <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/50 transition-all duration-500 hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="lg:hidden text-4xl font-bold text-primary/20">
                            {item.step}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed font-light mb-6 text-lg">
                          {item.description}
                        </p>
                        <div className="space-y-2">
                          {item.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.1 + i * 0.05,
                              }}
                              className="flex items-center gap-3 text-slate-700"
                            >
                              <CheckCircle2
                                className="text-primary flex-shrink-0"
                                size={18}
                              />
                              <span className="font-light">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-primary/10 to-amber/10 rounded-2xl p-10 border border-primary/20">
              <p className="text-2xl font-semibold text-slate-900 mb-4">
                Ready to get started?
              </p>
              <p className="text-slate-600 font-light mb-6">
                Join GrowthLab today and start building your startup ecosystem.
              </p>
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] flex items-center"
              >
                Get Started Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
