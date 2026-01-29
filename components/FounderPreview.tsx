"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LeadershipTeamSchema from "./LeadershipTeamSchema";

export default function FounderPreview() {
  return (
    <>
      <LeadershipTeamSchema />
      <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/founder-arul-murugan.jpg"
                    alt="Arul Murugan - Founder of GrowthLab"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="text-primary" size={24} />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Meet Our Leadership
                </span>
              </div>

              {/* Founder Section */}
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                  Arul Murugan
                </h2>
                <p className="text-xl text-primary font-semibold">
                  Founder & CEO
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  "I founded GrowthLab with a simple vision: to bridge the gap
                  between innovation and opportunity. Every entrepreneur
                  deserves access to the right network, resources, and support
                  to turn their ideas into reality."
                </p>
              </div>

              {/* CTO Section */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/team-ansh-garg.jpg"
                      alt="Ansh Garg - Chief Technology Officer"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Ansh Garg
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      Chief Technology Officer
                    </p>
                  </div>
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-light">
                  "Technology at its best is invisible—it works seamlessly in
                  the background so entrepreneurs can focus on what matters
                  most: building, connecting, and growing."
                </p>
              </div>

              <Link
                href="/founder"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px] group"
              >
                Meet Our Full Team
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
