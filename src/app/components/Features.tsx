"use client";
import { MdOutlineChecklist, MdHourglassEmpty, MdHistory } from "react-icons/md";
import { motion } from "framer-motion";

const features = [
    {
        name: 'Use it again later!',
        description: 'Set it up once, so it only takes a click later!',
        icon: MdHistory,
    },
    {
        name: 'More at once!',
        description: 'Download more apps and speed up your computer!',
        icon: MdOutlineChecklist,
    },
    {
        name: 'After reinstallation!',
        description: 'No more hassle after reinstalling Windows!',
        icon: MdHourglassEmpty,
    },
]

export default function Features() {
    return (
        <section className="overflow-hidden select-none py-12 sm:py-16">
            <div className="overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div >
                            <div className="lg:max-w-lg">
                                <motion.h2
                                    className="text-base font-semibold leading-7 text-blue-chill-800"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Introducing
                                </motion.h2>
                                <motion.p
                                    className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-blue-chill-900 sm:text-5xl"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    Save your time!
                                </motion.p>
                                <motion.p
                                    className="mt-6 text-lg leading-8 text-blue-chill-600"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}

                                >
                                    <span className="font-semibold text-blue-chill-800">Download Manager</span> is a free application that helps you download multiple applications at once and set up your computer. Perfect for setting up a new computer or reinstalling Windows.
                                </motion.p>
                                <div className="mt-10 grid gap-y-8">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-x-4"
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}

                                        >
                                            <div className="flex items-center justify-center p-2 bg-blue-chill-800 rounded">
                                                <feature.icon className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-blue-chill-900">{feature.name}</h3>
                                                <p className="mt-2 text-blue-chill-600">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <motion.img
                            alt="Product photo by Andika Wiraputra (https://dribbble.com/shots/23530598-Fitplan-Planner-App)"
                            title="Product photo by Andika Wiraputra (https://dribbble.com/shots/23530598-Fitplan-Planner-App)"
                            src="https://cdn.dribbble.com/userupload/12728821/file/original-22c61a0ad3cf7b8bebf3d783d8947c5f.png?resize=2048x1536&vertical=center"
                            width={2432}
                            height={1442}
                            className="w-full h-full rounded-lg lg:rounded-3xl lg:shadow-2xl max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
