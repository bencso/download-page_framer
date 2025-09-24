"use client";

import { useState, useEffect, useRef } from "react";
import { GoDesktopDownload } from "react-icons/go";
import { CgMouse } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { PiHandWithdraw } from "react-icons/pi";

export default function Hero() {
    const [showScrollDown, setShowScrollDown] = useState(true);
    const scrollDownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollDownRef.current) {
                const btnY = scrollDownRef.current.offsetTop;
                if (window.scrollY > btnY) {
                    setShowScrollDown(false);
                } else {
                    setShowScrollDown(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="overflow-hidden select-none py-32 sm:py-40 lg:py-52">
            <div className="mx-auto max-w-2xl text-blue-chill-900">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden sm:mb-8 sm:flex sm:justify-center"
                >
                    <div className="bg-blue-chill-300 p-2 rounded-full flex items-center justify-center">
                        <a
                            href="/patch-notes"
                            className="text-xs font-semibold text-blue-chill-900 flex items-center group"
                        >
                            Beta v0.0.0
                            <FaAngleRight className="ml-1 text-blue-chill-900 group-hover:rotate-90 transition-transform duration-300" />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h1 className="text-balance text-5xl font-semibold tracking-tigh sm:text-7xl">
                        Download multiple apps with ease!
                    </h1>
                    <p className="mt-8 px-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        No more problems after reinstalling Windows! Download your favourite apps with just a few clicks!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <motion.a
                            href="#downloadSection"
                            whileHover={{ scale: 1.1 }}
                            className="rounded-full bg-gradient-to-r from-blue-chill-600 via-blue-chill-700 to-blue-chill-800 px-5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-chill-600"
                        >
                            Download Now <GoDesktopDownload className="inline-block ml-2 text-xl" />
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div
                    ref={scrollDownRef}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: showScrollDown ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="transition-opacity duration-500"
                >
                    <div className="mt-16 flex justify-center">
                        <motion.div
                            initial={{ y: 0, opacity: 1 }}
                            whileInView={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-blue-chill-600"
                        >
                            <div className="block sm:hidden">
                                <PiHandWithdraw className="text-4xl" />
                            </div>
                            <div className="hidden sm:block">
                                <CgMouse className="text-2xl" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: showScrollDown ? 0 : 1, scale: showScrollDown ? 0.5 : 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 rounded-full bg-blue-chill-600 p-3 text-white shadow-sm hover:bg-blue-chill-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-chill-600"
                >
                    <FaArrowUp className="text-xl" />
                </motion.button>
            </div>
        </section>
    );
}
