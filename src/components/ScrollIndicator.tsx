'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const TOTAL_SECTIONS = 4;

export default function ScrollIndicator() {
    const [activeSection, setActiveSection] = useState(1);

    useEffect(() => {
        const scrollContainer = document.querySelector('main');
        if (!scrollContainer) return;

        const sections = Array.from(scrollContainer.children) as HTMLElement[];
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const index = sections.indexOf(entry.target as HTMLElement);
                        if (index !== -1) {
                            setActiveSection(index + 1);
                        }
                    }
                }
            },
            {
                root: scrollContainer,
                threshold: 0.6,
            }
        );

        for (const section of sections) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const showUpArrow = activeSection > 1;
    const showDownArrow = activeSection < TOTAL_SECTIONS;

    return (
        <div className="md:hidden pointer-events-none z-40">
            {showUpArrow && (
                <motion.div
                    key={`up-${activeSection}`}
                    className="fixed top-24 left-1/2 -translate-x-1/2"
                    animate={{
                        y: [0, -8, 0],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ChevronUp className="w-10 h-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                </motion.div>
            )}

            {showDownArrow && (
                <motion.div
                    key={`down-${activeSection}`}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2"
                    animate={{
                        y: [0, 8, 0],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ChevronDown className="w-10 h-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                </motion.div>
            )}
        </div>
    );
}
