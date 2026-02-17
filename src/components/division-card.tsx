"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface DivisionCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  index: number;
  className?: string;
}

export function DivisionCard({
  title,
  subtitle,
  description,
  image,
  href,
  index,
  className = "",
}: DivisionCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border/50 gold-glow block ${className}`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {subtitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:-translate-y-1 transition-transform duration-500">
              {title}
            </h3>
          </div>
          <div className="mt-1 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-500" />
          </div>
        </div>

        <p className="mt-4 text-muted-foreground text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
