"use client";

import { motion } from "framer-motion";
import { BsWindows } from "react-icons/bs";
import { ReactNode, useState } from "react";
import { MdDownload, MdOutlineDownloadDone } from "react-icons/md";
import axios from "axios";

const motionProps = {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const MotionSection = ({ children }: { children: ReactNode }) => (
    <motion.div
        {...motionProps}
        id="downloadSection"
        className="overflow-hidden select-none px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-blue-chill-600 via-blue-chill-700 to-blue-chill-800 rounded-lg shadow-lg"
    >
        {children}
    </motion.div>
);

const MotionText = ({ children, className, delay = 0 }: { children: ReactNode, className: string, delay?: number }) => (
    <motion.div
        className={className}
        {...motionProps}
        transition={{ ...motionProps.transition, delay }}
    >
        {children}
    </motion.div>
);
const PlatformCard = () => {
    const [completed, setCompleted] = useState(false);

    const downloadItem = async (file: string) => {
        try {
            const response = await axios.get(file, { responseType: "blob" });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", file.split("/").pop() || "download");
            link.download = file.split("/").pop() || "download";
            document.body.appendChild(link);
            link.click();
            setCompleted(true);
            setTimeout(() => {
                setCompleted(false);
            }, 5000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <motion.div
            className="flex flex-col items-start"
            {...motionProps}
            transition={{ ...motionProps.transition, delay: 0.6 }}
        >
            <motion.div
                className="flex items-center justify-center p-4 mt-3 bg-blue-chill-100 rounded-lg shadow-lg"
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.8 }}
            >
                <BsWindows className="text-4xl text-blue-chill-900" />
            </motion.div>
            <motion.div
                className="flex flex-col items-start"
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 1.0 }}
            >
                <motion.h3 className="text-xl mt-3 font-semibold text-blue-chill-100">
                    Windows
                </motion.h3>
                <motion.p className="text-blue-chill-100">
                    Download the app for Windows 10 and later.
                </motion.p>
                <motion.div className="flex flex-col items-start space-y-2">
                    <motion.button
                        type="button"
                        className={`relative mt-4 py-3 px-4 lg:inline-flex items-center gap-x-2 hidden text-sm font-semibold rounded-md border ${completed ? 'border-blue-chill-900 bg-blue-chill-700 text-blue-chill-100' : 'border-blue-chill-100 bg-blue-chill-900 text-blue-chill-100'} focus:outline-none focus:bg-blue-chill-700 disabled:opacity-50 disabled:pointer-events-none transform shadow-lg`}
                        onClick={() => downloadItem("/img/test.png")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {completed ? <MdOutlineDownloadDone className="text-xl" /> : <MdDownload className="text-xl" />}
                        {completed ? 'Download Completed' : 'Download Installer'}
                    </motion.button>
                    <motion.div className="text-xs text-blue-chill-100">
                        <a href="/patch-notes/0.1" className="hover:underline">Version 0.1</a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default function Download() {
    return (
        <motion.section
            className="select-none py-12 lg:py-16"
            {...motionProps}
        >
            <motion.div
                className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                {...motionProps}
            >
            <MotionSection>

                <MotionText className="text-4xl font-semibold leading-10 text-blue-chill-100">
                    Download the app
                </MotionText>
                <PlatformCard />
            </MotionSection>
            </motion.div>
        </motion.section>
    );
}
