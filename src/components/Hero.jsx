import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import product_image from "../assets/images/morivea/1.png";
import CyclingAnimatedText from "./CyclingAnimatedText";
import { containerVariants, itemVariants, shapeVariants, imageVariants } from "@/app/variants/AnimationVariants";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative  h-[110vh]  md:h-[90vh] bg-[#f8f7f3] overflow-hidden flex flex-col">
            <div className="wrapper relative -top-25 md:-top-5">
                {/* Background Elements */}
                <motion.div
                    className="absolute top-[0%] left-[-5%] w-72 h-72 sm:w-[45rem] sm:h-[45rem] bg-green-300/25 rounded-full opacity-60 blur-3xl pointer-events-none"
                    variants={shapeVariants}
                    initial="hidden"
                    whileInView="float"
                />
                {/* Main Content Area */}
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex-grow flex items-center relative z-10 pt-28 pb-16 lg:pt-32 lg:pb-20">
                    <motion.div
                        className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12 lg:gap-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        {/* --- Text Content --- */}
                        <motion.div className="w-full lg:w-[55%] text-center lg:text-left" variants={itemVariants}>
                            <motion.h1
                                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light mb-6 text-[#333] !leading-tight tracking-tight"
                                variants={itemVariants}
                            >
                                Nature's{" "}
                                <CyclingAnimatedText
                                    texts={["gentle touch,", "radiant glow,", "green solution,"]}
                                    tag="span"
                                    className="text-[#2c5e2e] italic font-normal"
                                />
                                <br />
                                Powerful results.
                            </motion.h1>

                            <motion.p
                                className="text-base sm:text-lg text-[#555] mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                                variants={itemVariants}
                            >
                                Experience the power of nature, the power of green light. Verdure, discover potent,
                                plant-derived formulas crafted for visible vitality and real solution for real problems.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                                variants={itemVariants}
                            >
                                <Link href={"/products"}>
                                    <button className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-[#3a8b3d] hover:bg-[#518b54] text-white text-sm uppercase tracking-wider font-light transition duration-300 rounded cursor-pointer overflow-hidden">
                                        <span className="relative z-10">View Collection</span>
                                        {/* Subtle hover effect */}
                                        <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                                    </button>
                                </Link>
                                <Link href={"/about"}>
                                    <button className="group inline-flex items-center justify-center px-8 py-3.5 border border-[#2c5e2e]/50 text-[#2c5e2e] text-sm uppercase tracking-wider font-light transition duration-300 hover:bg-[#e9efe9] hover:border-[#2c5e2e] rounded cursor-pointer">
                                        About Our Team
                                        <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* --- Image Content --- */}
                        <motion.div
                            className="w-full max-w-sm lg:max-w-none lg:w-[45%] relative flex justify-center items-center mt-10 lg:mt-0"
                            variants={imageVariants}
                        >
                            <motion.div
                                className="absolute inset-0 flex justify-center items-center"
                                whileInView={{ rotate: 45 }}
                                transition={{ repeat: Infinity, repeatType: "reverse", duration: 10, ease: "linear" }}
                            >
                                <div className="w-[85%] h-[85%] bg-gradient-to-br from-[#96bb97] via-[#96bb97]/50 to-transparent rounded-[50%_50%_70%_30%_/_40%_60%_40%_60%] transform rotate-[-15deg]"></div>
                            </motion.div>

                            {/* Floating Image */}
                            <motion.div
                                className="relative z-10 w-[70%] sm:w-[60%] lg:w-[75%]"
                                whileInView={{ y: ["0%", "-3%", "0%"] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            >
                                <Image
                                    src={product_image}
                                    alt="verdure Signature Botanical Serum in frosted glass bottle"
                                    width={0}
                                    height={0}
                                    className="drop-shadow-xl"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden lg:block z-20 cursor-pointer">
                    <motion.button
                        className="text-xs uppercase tracking-widest text-[#2c5e2e]/60 flex flex-col items-center group"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} // Smooth scroll down
                        aria-label="Scroll down"
                    >
                        Scroll
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mt-1 transform group-hover:translate-y-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
