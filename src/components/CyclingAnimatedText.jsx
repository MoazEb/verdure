import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, // Adjust speed of character reveal
        },
    },
    exit: {
        // Add an exit animation for the container
        opacity: 0,
        transition: { duration: 0.3 },
    },
};

const characterVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
        },
    },
};

const CyclingAnimatedText = ({ texts = [], className = "", delaySeconds = 2, tag = "div" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    if (!Array.isArray(texts) || texts.length === 0) {
        console.error("CyclingAnimatedText: 'texts' prop must be a non-empty array of strings.");
        return <MotionTag className={className}>No text provided.</MotionTag>;
    }

    const MotionTag = motion[tag];
    const currentText = texts[currentIndex];

    useEffect(() => {
        if (!isVisible) {
            const switchTimer = setTimeout(() => {
                const nextIndex = (currentIndex + 1) % texts.length;
                setCurrentIndex(nextIndex);
                setIsVisible(true);
            }, 300);

            return () => clearTimeout(switchTimer);
        }
    }, [isVisible, currentIndex, texts.length]); // Re-run when visibility or index changes

    const handleAnimationComplete = (definition) => {
        if (definition === "visible" && isVisible) {
            const delayTimer = setTimeout(() => {
                setIsVisible(false);
            }, delaySeconds * 1000);
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <MotionTag
                    key={currentIndex}
                    className={className}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onAnimationComplete={handleAnimationComplete}
                    aria-label={currentText}
                    aria-live="polite"
                >
                    {currentText.split("").map((char, index) => (
                        <motion.span
                            key={`${char}-${index}`}
                            variants={characterVariants}
                            style={{ display: "inline-block", minWidth: char === " " ? "0.25em" : "auto" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </MotionTag>
            )}
        </AnimatePresence>
    );
};

export default CyclingAnimatedText;
