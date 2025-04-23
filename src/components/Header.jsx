import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "PRODUCTS", href: "/products" },
        { name: "ABOUT", href: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#c8e0c8]">
            <div className="container mx-auto py-2 flex justify-center items-center">
                <Link href="/">
                    <h1 className="text-4xl text-green-800 font-medium tracking-wider">Verdūra</h1>
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden container mx-auto px-4 pb-2 flex justify-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-green-800 hover:text-green-600">
                    {menuOpen ? "Close" : "Menu"}
                </button>
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

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="md:hidden container mx-auto pb-4">
                    <div className="flex flex-col space-y-3 text-xs font-medium text-green-700">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <span className="hover:text-green-500 transition-colors duration-300 block text-center py-2">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
