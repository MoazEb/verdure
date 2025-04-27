"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { team } from "../app/about/data";
import { containerVariants, titleVariants } from "@/app/variants/AnimationVariants";

export default function TeamSection() {
    return (
        <section className="py-16 bg-[#f8fbf8] font-serif md:px-10">
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={containerVariants}
                className="container mx-auto px-4"
            >
                {/* Replaced motion.div with div and removed animation props */}
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={titleVariants}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl italic font-serif tracking-tight text-green-800 sm:text-[2.5rem] mb-4">
                        Meet Our Team
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        The passionate individuals behind Verdūre who are dedicated to bringing the beauty and benefits
                        of plants into your living spaces.
                    </p>
                </motion.div>

                {/* Replaced motion.div with div and removed animation props */}
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Image Container */}
                                <div className="md:w-1/3 relative h-64 md:h-auto">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        placeholder="blur"
                                        sizes="(max-width: 767px) 100vw, (min-width: 768px) 17vw" // Keep sizes for optimization
                                    />
                                </div>
                                {/* Content Container */}
                                <div className="md:w-2/3 p-6">
                                    <div className="mb-1">
                                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                            {member.role}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-serif text-green-800 italic mb-3">{member.name}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
