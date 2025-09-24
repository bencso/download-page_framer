"use client";

import { motion } from "framer-motion";
import PatchNotesList from "../components/Patchnotes";

export default function PatchNotes() {
    return (
        <div className='p-10 flex flex-col gap-4'>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">
                Patch notes
                </motion.h1>
                <PatchNotesList/>
        </div>
    );
}