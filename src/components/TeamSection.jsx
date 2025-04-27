"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { containerVariants, itemVariants } from "@/app/variants/AnimationVariants";
import { team } from "../app/about/data"; // Assuming data.ts is in app/about/

export default function TeamSection() {
    return (
        <section className="py-16 bg-[#f8fbf8] font-serif md:px-10">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl italic font-serif tracking-tight text-green-800 sm:text-[2.5rem] mb-4">
                        Meet Our Team
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        The passionate individuals behind Verdūre who are dedicated to bringing the beauty and benefits
                        of plants into your living spaces.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            custom={index}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Image Container */}
                                <div className="md:w-1/3 relative h-64 md:h-auto">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill // Use fill to cover the container
                                        className="object-cover"
                                        // loading="lazy" // Already the default, but can be explicit
                                        placeholder="blur" // Optional: Show blur placeholder
                                        // You might need to generate blurDataURL if images are external/dynamic
                                        // blurDataURL={member.blurDataURL} // Example if needed
                                        sizes="(max-width: 767px) 100vw, (min-width: 768px) 17vw"
                                        // Explanation for sizes:
                                        // - Below 'md' (768px): Card takes full width, image container takes full card width (h-64 constraint).
                                        //   Let's approximate as 100vw for safety, though the height constraint limits it.
                                        // - 'md' and above: Grid has 2 columns (~50vw per column). Image container is md:w-1/3.
                                        //   So image width is roughly (1/3) * 50vw = ~16.67vw. Let's use 17vw.
                                        // Adjust these values based on your actual layout and padding/margins.
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
