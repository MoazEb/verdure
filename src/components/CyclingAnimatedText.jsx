import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence

// Variants for the container (controls staggering)
// We simplify this slightly as the key change handles re-triggering
const containerVariants = {
    hidden: { opacity: 0 }, // Start hidden to fade in container
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, // Adjust speed of character reveal
        },
    },
    exit: {
        // Add an exit animation for the container
        opacity: 0,
        transition: { duration: 0.3 }, // Brief fade out before next text
    },
};

// Variants for each individual character
const characterVariants = {
    hidden: {
        opacity: 0,
        y: 10, // Optional: slight animation
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", // Make it feel a bit lively
            damping: 15,
            stiffness: 100,
        },
    },
    // Exit variant for characters isn't strictly needed if container fades
};

const CyclingAnimatedText = ({
    texts = [], // Default to empty array
    className = "",
    delaySeconds = 2,
    tag = "div",
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true); // Controls presence for exit anim

    // Validate texts prop
    if (!Array.isArray(texts) || texts.length === 0) {
        console.error("CyclingAnimatedText: 'texts' prop must be a non-empty array of strings.");
        // Optionally return null or a placeholder
        return <MotionTag className={className}>No text provided.</MotionTag>;
    }

    const MotionTag = motion[tag]; // Dynamically select the motion component type
    const currentText = texts[currentIndex];

    useEffect(() => {
        // This effect handles the timed switching *after* the exit animation is done
        if (!isVisible) {
            // Set a timer to switch index *after* the fade out (exit transition duration)
            const switchTimer = setTimeout(() => {
                const nextIndex = (currentIndex + 1) % texts.length;
                setCurrentIndex(nextIndex);
                setIsVisible(true); // Make the new text visible to trigger entrance animation
            }, 300); // Match exit transition duration

            return () => clearTimeout(switchTimer); // Cleanup timer on unmount/change
        }
    }, [isVisible, currentIndex, texts.length]); // Re-run when visibility or index changes

    const handleAnimationComplete = (definition) => {
        // Only proceed if the 'visible' animation just finished
        if (definition === "visible" && isVisible) {
            // Set a timer for the specified delay *before* starting the exit animation
            const delayTimer = setTimeout(() => {
                setIsVisible(false); // Trigger the exit animation
            }, delaySeconds * 1000); // Convert seconds to milliseconds

            // No cleanup needed here, as a new component instance will be created on index change
            // If the component unmounts, the timer implicitly clears.
        }
    };

    return (
        <AnimatePresence mode="wait">
            {/* Use AnimatePresence to handle enter/exit animations smoothly */}
            {/* The key is crucial: changing it tells React/Framer Motion to treat */}
            {/* this as a completely new element, re-running animations */}
            {isVisible && (
                <MotionTag
                    key={currentIndex} // Force re-mount on index change
                    className={className}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit" // Define the exit animation state
                    onAnimationComplete={handleAnimationComplete} // Trigger delay logic when animation finishes
                    aria-label={currentText} // Accessibility for the current text
                    aria-live="polite" // Announce changes politely
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
