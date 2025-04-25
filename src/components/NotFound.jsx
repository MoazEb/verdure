import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { containerVariants, itemVariants } from "@/app/AnimationVariants";
export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#f8fbf8] font-serif flex items-center justify-center py-16 px-4">
            <motion.div
                className="container max-w-4xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-5xl md:text-9xl font-serif text-green-800 italic mb-6"
                    variants={itemVariants}
                >
                    404
                </motion.h1>

                <motion.h2 className="text-2xl md:text-3xl text-green-700 mb-8" variants={itemVariants}>
                    Oops! This page seems to have wilted away.
                </motion.h2>

                <motion.p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto" variants={itemVariants}>
                    We couldn't find the page you were looking for. Perhaps it's time to return home and tend to our
                    other thriving plants?
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Link href="/">
                        <span className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors duration-300">
                            Return to Home
                        </span>
                    </Link>
                </motion.div>

                <motion.div className="mt-16 text-sm text-green-600 underline cursor-pointer" variants={itemVariants}>
                    <Link href="/products">
                        <span>Browse our products instead</span>
                    </Link>
                </motion.div>
            </motion.div>
        </main>
    );
}
