'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import Image from 'next/image';

const menuItems = [
    { label: 'Interní systém', href: 'https://odoo.pjgroup.cz' },
    { label: 'PJ Reality', href: 'https://pjreality.cz' },
    { label: 'PJ Design', href: 'https://pjdesign.cz' },
    { label: 'PJ Reko', href: 'https://pjreko.cz' },
    { label: 'PJ Správa', href: 'https://pjsprava.cz' },
];

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed top-24 right-8 z-50 p-2 text-accent hover:text-red-500 transition-colors"
                aria-label="Menu"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <MenuIcon className="w-8 h-8 md:w-10 md:h-10" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center overflow-hidden"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 opacity-100">
                            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay to darken image if needed, or rely on image opacity */}
                            {/* User asked for: solid black background (done by parent bg-black), image with 30-60% opacity. 
                                 Actually user said "opacity pozadi dobre jenom pod nej dej cerne pozadi a tomu opacitu 100%".
                                 So: Container bg-black. Image opacity-40.
                             */}
                            <Image
                                src="/images/Background.png"
                                alt=""
                                fill
                                className="object-cover opacity-40"
                            />
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-24 right-8 p-2 text-accent hover:text-red-500 transition-colors z-20"
                            aria-label="Close Menu"
                        >
                            <X className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <nav className="flex flex-col items-center gap-8 md:gap-12 z-20">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-display text-3xl md:text-5xl font-bold text-white hover:text-accent transition-colors uppercase tracking-tight"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Credits Footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-8 left-0 w-full text-center z-20"
                        >
                            <p className="text-white/30 text-xs md:text-sm font-light tracking-widest transition-all duration-300 hover:text-white/80 hover:scale-105">
                                Made by <a href="https://www.linkedin.com/in/martin-svanda-b8491a264/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Martin Švanda</a> from <a href="https://praut.cz" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Praut s.r.o.</a>
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
