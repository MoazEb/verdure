'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { itemVariants, containerVariants } from "@/app/variants/AnimationVariants";
import { products } from "../data";
import { useParams } from "next/navigation";
import NotFound from "@/components/NotFound";

export default function ProductPage() {
    const [activeImage, setActiveImage] = useState(0);
    const params = useParams()
    const product = products.find(product => product.id === parseInt(params.id))

    if (!product) {
        return <NotFound />
    }

    return (
        <main className="py-8 px-4 md:px-10 font-serif bg-[#f8fbf8]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left column - Images */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Main image */}
                        <motion.div
                            className="relative h-96 md:h-[500px] bg-white rounded-2xl overflow-hidden mb-4 shadow-sm flex justify-center items-center"
                            variants={itemVariants}
                        >
                            <Image
                                src={product.images[activeImage]}
                                alt={`${product.name} - view ${activeImage + 1}`}
                                // fill
                                width={500}
                                height={500}
                                className="object-cover hover:scale-[1.03] transition-transform duration-700"
                                style={{ objectPosition: "center" }}
                            />
                        </motion.div>

                        {/* Thumbnail gallery */}
                        <motion.div
                            className="grid grid-cols-4 gap-3"
                            variants={itemVariants}
                        >
                            {product.images.map((image, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`relative h-24 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center ${activeImage === idx ? 'ring-2 ring-green-500' : ''
                                        }`}
                                    onClick={() => setActiveImage(idx)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} thumbnail ${idx + 1}`}
                                        width={100}
                                        height={100}
                                        className="object-cover"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right column - Product details */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl md:text-5xl font-serif text-green-800 italic mb-2">{product.name}</h1>
                            <div className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-6">
                                {product.category}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="prose prose-green mb-8"
                        >
                            <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-8">
                            <h2 className="text-2xl text-green-800 italic mb-4">Product Details</h2>
                            <ul className="space-y-2">
                                {product.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span className="text-gray-700">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h2 className="text-2xl text-green-800 italic mb-4">Care Instructions</h2>
                            <div className="p-6 bg-[#e8f5e8] rounded-xl">
                                <p className="text-gray-700">{product.care}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}