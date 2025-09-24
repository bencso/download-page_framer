import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.div
            className={`sticky top-4 z-50 shadow-sm backdrop-blur-xl border-1 border w-fit mx-auto border-solid p-4 rounded-full transition duration-500 bg-blue-chill-200/50 border-blue-chill-700 mb-8 lg:p-4`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ul className="flex flex-row gap-4 items-center px-4">
            <li>
                <a
                className="transition duration-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-blue-chill-600 after:transition-all after:duration-500 hover:after:w-full"
                href="/"
                >
                Home
                </a>
            </li>
            <li>
                 <a
                className="transition duration-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-blue-chill-600 after:transition-all after:duration-500 hover:after:w-full"
                href="/patchnotes"
                >
                Patch notes
                </a>
            </li>
            </ul>
        </motion.div>
    )
}