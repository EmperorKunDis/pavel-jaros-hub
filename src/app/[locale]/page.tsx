'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Menu from '@/components/Menu';
import ScrollIndicator from '@/components/ScrollIndicator';

const columns = [
  {
    id: 1,
    title: 'REALITY',
    subtitle: 'EXKLUZIVNÍ NEMOVITOSTI',
    description: 'Exkluzivní nemovitosti v Praze a okolí.',
    href: 'https://pjreality.cz',
    icon: '/images/PJ_Reality_symbol.svg',
    image: '/images/pavel-reality.png',
    imageNoFace: '/images/reality.jpg',
    logo: '/images/PJ_Reality_logo.svg',
  },
  {
    id: 2,
    title: 'DESIGN',
    subtitle: 'INTERIÉROVÝ DESIGN',
    description: 'Návrhy interiérů, které mají duši.',
    href: 'https://pjdesign.cz',
    icon: '/images/PJ_design_symbol.svg',
    image: '/images/pavel-design.jpg',
    imageNoFace: '/images/design.jpg',
    logo: '/images/PJ_Design_logo.svg',
  },
  {
    id: 3,
    title: 'REKO',
    subtitle: 'REKONSTRUKCE & STAVBY',
    description: 'Kompletní rekonstrukce na klíč.',
    href: 'https://pjreko.cz',
    icon: '/images/PJ_Reko_symbol.svg',
    image: '/images/pavel-reko.jpg',
    imageNoFace: '/images/reko.jpg',
    logo: '/images/PJ_Reko_logo.svg',
  },
  {
    id: 4,
    title: 'SPRÁVA',
    subtitle: 'SPRÁVA NEMOVITOSTÍ',
    description: 'Bezstarostná správa vašeho portfolia.',
    href: 'https://pjsprava.cz',
    icon: '/images/PJ_Sprava_symbol.svg',
    image: '/images/pavel-sprava.jpg',
    imageNoFace: '/images/sprava.jpg',
    logo: '/images/PJ_Sprava_logo.svg',
  },
];

export default function LandingPage() {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const columnVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
  };

  return (
    <>
      <Menu />
      <ScrollIndicator />

      {/* Central PJ Group Logo */}
      <div className="fixed top-0 left-0 w-full z-30 pointer-events-none hidden md:flex flex-col items-center">
        {/* Gradient background strip behind logo */}
        <div className={`w-full flex justify-center transition-all duration-700 ease-in-out bg-gradient-to-b from-black/40 via-black/20 to-transparent ${
          hoveredColumn !== null ? 'pb-6 pt-16' : 'pb-10 pt-20'
        }`}>
          <motion.div
            className={`transition-all duration-700 ease-in-out ${hoveredColumn !== null
              ? 'w-64 opacity-100 grayscale brightness-0 invert'
              : 'w-96 opacity-100 grayscale-0'
              }`}
            style={{
              translateX: hoveredColumn === null ? 0
                : hoveredColumn === 1 ? '-30vw'
                : hoveredColumn === 2 ? '-10vw'
                : hoveredColumn === 3 ? '10vw'
                : '30vw',
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Image
              src="/images/PJ_Group_logo.svg"
              alt="PJ Group"
              width={400}
              height={200}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>

      <motion.main
        className="h-screen w-full flex flex-col md:flex-row bg-background text-white overflow-y-scroll md:overflow-hidden snap-y snap-mandatory md:snap-none"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {columns.map((col) => (
          <motion.div
            key={col.id}
            variants={columnVariants}
            className="relative w-full md:w-auto h-screen md:h-full flex-shrink-0 md:flex-1 border-b md:border-b-0 md:border-r border-white/10 last:border-0 group overflow-hidden transition-all duration-500 ease-in-out md:hover:flex-[2.5] snap-start"
            onMouseEnter={() => setHoveredColumn(col.id)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            {/* Clickable Overlay */}
            <a href={col.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={`Go to ${col.title}`} />

            <div className="absolute inset-0 z-0">
              {/* No Face Image (Architecture) */}
              <Image
                src={col.imageNoFace}
                alt={col.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  // Logic for showing NoFace image:
                  // Col 1: Show if Hover is OTHER (Previously: Idle/Self)
                  // Others: Show if NOT Hover Self (Idle/Other)
                  (col.id === 1
                    ? (hoveredColumn !== 1 && hoveredColumn !== null)
                    : (hoveredColumn !== col.id)
                  ) ? 'opacity-60 grayscale' : 'opacity-0 grayscale'
                  } ${col.id === 1 ? 'object-center group-hover:scale-110' : 'group-hover:scale-105'}`}
                priority
              />

              {/* Face Image (Pavel) */}
              <Image
                src={col.image}
                alt={`${col.title} Face`}
                fill
                className={`object-cover transition-all duration-700 ${
                  // Logic for showing Face image:
                  // Col 1: Show if Hover is SELF or IDLE (Previously: Hover Other)
                  // Others: Show if Hover is SELF
                  (col.id === 1
                    ? (hoveredColumn === 1 || hoveredColumn === null)
                    : (hoveredColumn === col.id)
                  ) ? 'opacity-50 group-hover:opacity-100 grayscale-0' : 'opacity-0 grayscale'
                  } ${col.id === 1 ? 'object-center group-hover:object-top scale-110' : 'scale-105'}`}
                priority
              />

              {/* Gradient overlay - bottom 60% from transparent to black/80 */}
              <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none bg-gradient-to-b from-transparent via-black/40 to-black/80" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 pointer-events-none">

              <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-300 contrast-0 brightness-200 group-hover:contrast-100 group-hover:brightness-100">
                  <Image
                    src={col.icon}
                    alt="icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-sm tracking-widest text-white/50">0{col.id}</span>
              </div>

              <div className="mt-auto">
                {col.logo ? (
                  <div className="relative h-24 w-full md:w-64 mb-4 transform group-hover:-translate-y-2 transition-transform duration-500 origin-bottom-left contrast-0 brightness-200 group-hover:contrast-100 group-hover:brightness-100">
                    <Image
                      src={col.logo}
                      alt={col.title}
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                ) : (
                  <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-2 transform group-hover:-translate-y-2 transition-transform duration-500 text-white group-hover:text-accent transition-colors">
                    {col.title}
                  </h2>
                )}

                <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/60 mb-8 uppercase group-hover:text-accent transition-colors">
                  {col.subtitle}
                </p>

                <div className="overflow-hidden">
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {col.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 mt-6 uppercase tracking-widest text-xs font-semibold group-hover:text-accent transition-colors group-hover:translate-y-0 translate-y-full opacity-0 group-hover:opacity-100 duration-500 delay-200"
                  >
                    Prozkoumat <span className="text-accent">→</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent/50 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100" />
          </motion.div>
        ))}
      </motion.main>
    </>
  );
}
