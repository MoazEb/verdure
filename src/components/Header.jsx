"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "PRODUCTS", href: "/products" },
        { name: "ABOUT", href: "/about" },
    ];

    const menuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.3,
            },
        }),
    };

    return (
        <header className="sticky top-0 z-50 bg-[#c8e0c8]">
            <div className="container mx-auto py-2 flex justify-between items-center px-4 md:justify-center">
                <Link href="/">
                    <h1 className="text-3xl md:text-4xl text-green-800 font-medium tracking-wider">Verdūre</h1>
                </Link>

                {/* Mobile menu button */}
                <motion.button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-green-800 hover:text-green-600 focus:outline-none"
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.9 }}
                >
                    {menuOpen ? (
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ rotate: 90 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </motion.svg>
                    )}
                </motion.button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex container mx-auto pb-2 justify-center items-center">
                <div className="flex flex-wrap justify-center space-x-4 lg:space-x-8 text-base font-medium text-green-700">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <span className="hover:text-green-500 transition-colors duration-300 px-1 py-2">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Navigation with Animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        className="md:hidden container mx-auto overflow-hidden"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="flex flex-col space-y-3 text-xs font-medium text-green-700 py-4">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => setMenuOpen(false)}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Link href={item.href}>
                                        <span className="hover:text-green-500 transition-colors duration-300 block text-center py-2">
                                            {item.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
