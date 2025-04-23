import Link from "next/link";
import Image from "next/image";
import morivea from "../assets/images/morivea/2.png";
import glowCha from "../assets/images/glowCha/2.png";
import cumorriha from "../assets/images/cumorriha/2.png";

const products = [
    {
        name: "Brightening Eye Cream",
        image: morivea,
    },
    {
        name: "Natural Mineral Foundation",
        image: glowCha,
    },
    {
        name: "Overnight Recovery Mask",
        image: cumorriha,
    },
];

export default function OurProducts() {
    return (
        <section className="py-10 md:px-10 font-serif font-medium ">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl md:text-[2.4rem] text-[#333] font-medium italic">Our Products</h2>
                    <Link href="/products">
                        <span className="text-green-600 hover:text-green-700 transition">View All →</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full z-10">
                                    NEW
                                </div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="group-hover:scale-105 transition-transform duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl text-gray-800 pl-2">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
