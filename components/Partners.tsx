"use client";

import { motion } from "framer-motion";
import { Handshake, Building2, GraduationCap, Landmark } from "lucide-react";
import Image from "next/image";

interface Partner {
  name: string;
  type: "corporate" | "university" | "government";
  logo?: string; // Path to logo image in public folder
  website?: string;
}

const partners: Partner[] = [
  {
    name: "Google",
    type: "corporate",
    website: "https://www.google.com",
  },
  {
    name: "Microsoft",
    type: "corporate",
    website: "https://www.microsoft.com",
  },
  {
    name: "Alibaba Cloud",
    type: "corporate",
    website: "https://www.alibabacloud.com",
  },
  {
    name: "Enterprise Singapore",
    type: "government",
    website: "https://www.enterprisesg.gov.sg",
  },
  {
    name: "SGInnovate",
    type: "government",
    website: "https://www.sginnovate.com",
  },
  {
    name: "IMDA",
    type: "government",
    website: "https://www.imda.gov.sg",
  },
  {
    name: "ACE.SG",
    type: "government",
    website: "https://ace.sg",
  },
  {
    name: "National University of Singapore",
    type: "university",
    website: "https://www.nus.edu.sg",
  },
  {
    name: "Singapore Management University",
    type: "university",
    website: "https://www.smu.edu.sg",
  },
  {
    name: "Murdoch University",
    type: "university",
    website: "https://www.murdoch.edu.au",
  },
];

export default function Partners() {
  return (
    <section className="framer-motion-optimized relative py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
            <Handshake className="text-primary" size={28} />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight">
              Partners & Collaborators
            </h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Trusted by leading companies and institutions worldwide
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => {
            const Icon =
              partner.type === "university"
                ? GraduationCap
                : partner.type === "government"
                ? Landmark
                : Building2;
            return (
              <motion.a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-lg flex flex-col items-center justify-center min-h-[160px] sm:min-h-[180px]"
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                {/* Logo Placeholder or Image */}
                {partner.logo ? (
                  <div className="relative w-full h-16 sm:h-20 mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon
                      className="text-primary group-hover:text-white transition-colors duration-300"
                      size={32}
                    />
                  </div>
                )}

                {/* Partner Name */}
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 text-center group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>

                {/* Type Badge */}
                <span className="mt-2 px-2 py-1 text-[10px] sm:text-xs bg-slate-100 text-slate-600 rounded-full font-medium uppercase tracking-wider">
                  {partner.type === "university"
                    ? "University"
                    : partner.type === "government"
                    ? "Government"
                    : "Corporate"}
                </span>
              </motion.a>
            );
          })}

          {/* More Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: partners.length * 0.1,
              ease: "easeOut",
            }}
            className="relative bg-gradient-to-br from-primary/5 to-amber/5 rounded-xl p-6 lg:p-8 border-2 border-dashed border-primary/30 shadow-lg flex flex-col items-center justify-center min-h-[160px] sm:min-h-[180px]"
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Handshake className="text-primary" size={32} />
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 text-center mb-2">
              More Partners
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 text-center font-light">
              Coming Soon
            </p>
          </motion.div>
        </div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 lg:mt-16 text-center"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto">
            We're proud to collaborate with industry leaders and educational
            institutions to support startups and entrepreneurs worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
