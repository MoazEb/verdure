"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, titleVariants } from "@/app/variants/AnimationVariants";
import { products } from "@/app/products/data";

export default function OurProducts() {
    return (
        <section className="py-10 md:px-10 font-serif font-medium">
            <div className="container mx-auto px-4">
                <motion.div
                    className="w-full mb-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    variants={titleVariants}
                >
                    <h2 className="text-4xl italic font-serif tracking-tight text-green-800 sm:text-[2.5rem]">
                        Our Products?
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    {products.map((product, index) => (
                        <Link key={index} href={`/products/${product.id}`}>
                            <motion.div className="group cursor-pointer" variants={itemVariants}>
                                <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full z-10">
                                        NEW
                                    </div>
                                    <Image
                                        src={product.images[1]}
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className="group-hover:scale-105 transition-transform duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="mt-4 w-full flex justify-center">
                                    <motion.h3
                                        className="text-lg italic text-green-900/85 text-center px-6 bg-[#d8f1d8]/40 w-fit rounded-full"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(216, 241, 216, 0.7)" }}
                                    >
                                        {product.name}
                                    </motion.h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
