"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
  className?: string;
  theme?: "dark" | "light";
};

export function Section({
  eyebrow,
  title,
  body,
  children,
  className = "",
  theme = "dark"
}: SectionProps) {
  const isLight = theme === "light";
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`px-6 py-16 sm:px-10 lg:px-16 lg:py-24 ${
        isLight ? "bg-porcelain text-ink" : "bg-ink text-porcelain"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl lg:mb-16">
          {eyebrow ? (
            <p className={`mb-4 text-[10px] font-bold uppercase tracking-[0.2em] ${
              isLight ? "text-moss" : "text-amber"
            }`}>
              {eyebrow}
            </p>
          ) : null}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>
          {body ? (
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`mt-6 text-base leading-relaxed sm:text-lg lg:max-w-2xl ${
                isLight ? "text-ink/70" : "text-porcelain/60"
              }`}
            >
              {body}
            </motion.p>
          ) : null}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, body, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-48">
      <div className="hero-radial absolute inset-0 -z-10 opacity-50" />
      <div className="ambient-grid absolute inset-0 -z-10" />
      
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-amber">
            {eyebrow}
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-porcelain sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-porcelain/60 sm:text-xl">
            {body}
          </p>
        </motion.div>
        {children ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
