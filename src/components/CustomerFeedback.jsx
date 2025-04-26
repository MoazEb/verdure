import React, { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, titleVariants } from "@/app/variants/AnimationVariants";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

export default function CustomerFeedbackWhiteBgGreenAccents() {
    const [feedback, setFeedback] = useState("");
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                redirect: "follow",
                body: JSON.stringify({ feedback: feedback }),
            });
            setStatus("success");
            setFeedback("");
        } catch (error) {
            setErrorMessage("Failed to send feedback. Please check your connection and try again.");
            console.error("Submission Network Error:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <section className="py-16 pb-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-10 border border-gray-200"
                    >
                        <h3 className="text-2xl font-semibold text-green-700 mb-4">Thanks for submitting!</h3>
                        <p className="text-gray-600">We've received your feedback.</p>
                        {/* Note: This message appears even if the server had an internal error, due to no-cors limitations. */}
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 pb-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-4xl md:text-[2.5rem] italic font-light text-gray-800 mb-3 font-serif tracking-tight">
                        We'd Love Your Feedback!
                    </h2>
                    <p className="text-green-700 max-w-xl mx-auto">
                        Help us improve by sharing your experience with our products.
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-10 border border-gray-200"
                >
                    <motion.form
                        onSubmit={handleSubmit}
                        initial="hidden"
                        whileInView={"visible"}
                        variants={containerVariants}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col gap-5"
                    >
                        <motion.label variants={itemVariants} htmlFor="feedback-textarea-wa" className="sr-only">
                            Feedback
                        </motion.label>
                        <motion.textarea
                            id="feedback-textarea-wa"
                            name="feedback"
                            variants={itemVariants}
                            placeholder="Tell us what you think..."
                            rows="5"
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:border-green-500 resize-none transition duration-150 ease-in-out"
                            value={feedback}
                            onChange={handleInputChange}
                            required
                            disabled={status === "submitting"}
                        ></motion.textarea>
                        <motion.p variants={itemVariants} className="pl-2 text-sm text-gray-500">
                            Your feedback is submitted anonymously.
                        </motion.p>

                        {/* network error handling */}
                        {status === "error" && (
                            <motion.p className="text-red-600 text-sm pl-2">{errorMessage}</motion.p>
                        )}

                        <motion.div variants={itemVariants} className="mt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full sm:w-auto sm:px-10 bg-green-600 cursor-pointer text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Sending..." : "Send Feedback"}
                            </button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}
