"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-sm font-medium tracking-widest uppercase text-accent"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Shahabas{" "}
            <span className="text-gradient">K M</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-xl font-medium text-muted sm:text-2xl"
          >
            Data Scientist
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-base leading-relaxed text-muted max-w-xl mx-auto md:mx-0 sm:text-lg"
          >
            Results-driven Data Scientist.
            <br className="hidden sm:block" />
            I build production-grade machine learning, statistical modeling, and generative AI solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col items-center md:items-start gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            <Link href="/projects" className="btn-primary">
              View Projects
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 shrink-0"
        >
          {/* Decorative glows behind the image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-[#8b5cf6] blur-[60px] opacity-20 animate-pulse" />
          
          {/* Image Container */}
          <div className="relative w-full h-full rounded-full border border-border p-2 glass glass-hover">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-surface-light flex items-center justify-center">
              {/* Note: The Image component will look for /profile.jpg in the public/ folder */}
              <Image
                src="/profile.jpg"
                alt="Shahabas K M"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1200px) 384px, 384px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator restored */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}
