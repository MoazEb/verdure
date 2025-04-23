import React from "react";

export default function CustomerFeedback() {
    return (
        <section className="py-16 sm:py-24 bg-green-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-10 text-center">
                    <h2 className="text-4xl italic font-light text-green-700 mb-3 font-serif tracking-tight">
                        We'd Love Your Feedback!
                    </h2>
                    <p className="mb-2 text-slate-600">
                        Help us improve by sharing your experience with our products and services.
                    </p>
                    <p className="mb-6 text-sm text-slate-500">Your feedback is submitted anonymously.</p>

                    <form className="flex flex-col gap-5">
                        <textarea
                            placeholder="Tell us what you think..."
                            rows="5"
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:border-green-500 resize-none transition duration-150 ease-in-out"
                        ></textarea>
                        <div className="mt-2">
                            <button
                                type="submit"
                                className="w-full sm:w-auto sm:px-10 bg-green-600 cursor-pointer text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                            >
                                Send Feedback
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
