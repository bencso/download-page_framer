"use client";
import { motion } from 'framer-motion';

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { type: 'spring', stiffness: 100 }
};

const containerClasses = `
    bg-gradient-to-r from-blue-chill-600 via-blue-chill-700 to-blue-chill-800
    text-white p-4 fixed top-0 left-0 w-full flex flex-col gap-3 justify-center
    z-50 shadow-lg select-none xl:flex-row xl:gap-6 xl:p-6
`;

const titleClasses = `
    text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl
`;

const messageClasses = `
    text-center text-xs sm:text-sm md:text-base lg:text-lg
`;

export default function Announcement() {
    return (
        <motion.div
            className={containerClasses}
            initial={containerVariants.initial}
            animate={containerVariants.animate}
            transition={containerVariants.transition}
        >
            <p className={titleClasses}>🚧 Under Construction 🚧</p>
            <p className={messageClasses}>
                We are currently in the process of updating our website. Some features may be temporarily unavailable.
            </p>
        </motion.div>
    );
}
