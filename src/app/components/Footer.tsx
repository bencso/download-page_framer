"use client";
import { PiCopyrightBold } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer 
            className="bg-blue-chill-800 rounded-t-lg shadow select-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <ul className="flex flex-col sm:flex-row  text-sm font-medium text-blue-chill-300 sm:mb-0">
                        <li className="mb-2 sm:mb-0">
                            <a href="#" className="me-4 md:me-6">About</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-blue-chill-600 sm:mx-auto lg:my-8" />
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm text-blue-chill-300">
                    <span className="hidden md:inline-block">All Rights Reserved.</span>
                    <span className="hidden md:inline-block">© 2025</span>
                    <span className="flex items-center space-x-1">
                        <span>Developed by</span>
                        <a href="#" className="text-blue-chill-300 hover:text-blue-chill-100">Bencso</a>
                    </span>
                </div>
            </div>
        </motion.footer>
    )
}