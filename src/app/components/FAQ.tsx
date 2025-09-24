"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`accordion border-2 border-solid p-4 rounded-xl transition duration-500 ${isOpen ? "bg-blue-chill-200 border-blue-chill-900" : "bg-blue-chill-100 border-blue-chill-400"
        } mb-8 lg:p-4`}
      id={id}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-blue-chill-900 w-full transition duration-500 hover:text-blue-chill-600 ${isOpen ? "font-medium text-blue-chill-600 hover:text-blue-chill-950" : ""
          }`}
        aria-controls={`${id}-content`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.h3
          className="font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="w-6 h-6 text-blue-chill-900 transition duration-500 group-hover:text-blue-chill-600"
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown />
        </motion.div>
      </button>
      <motion.div
        id={`${id}-content`}
        className="accordion-content w-full overflow-hidden pr-4"
        aria-labelledby={id}
        initial={{ height: 0, opacity: 0, scale: 0.95 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="text-base text-blue-chill-900 px-3 py-4 font-normal leading-6" dangerouslySetInnerHTML={{ __html: content }}></p>
      </motion.div>
    </motion.div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      id: "faq1",
      title: "Is the app completely free?",
      content:
        "Yes, the app is completely free to use. There are no hidden fees or charges. You can use all the features of the app without any restrictions. Enjoy!",
    },
    {
      id: "faq2",
      title: "The app doesn't do anything harmful, does it?",
      content:
        "No, the app is completely safe to use. It does not contain any malware or viruses. You can trust the application to help you download and install applications on your computer. You can install applications using <b><a href='https://chocolatey.org/' target='_blank'>chocolatey</a></b> and <b><a href='https://learn.microsoft.com/en-us/windows/package-manager/' target='_blank'>Windows package manager</a></b>. In addition, it does not modify anything harmful in the registry." +
        "</br><b>However, I cannot be held responsible if data loss or anything else happens to your computer, use it at your own risk!</b>",
    },
    {
      id: "faq3",
      title: "What is debloating and what does it do?",
      content:
        "Debloating is the process of removing unnecessary software from your computer. This can help improve the performance of your computer and free up storage space. The app can help you debloat your computer by removing unwanted software and applications.",
    },
    {
      id: "faq4",
      title: "How do I report a bug or issue?",
      content:
        "If you encounter a bug or issue while using the app, please report it to the developer. You can report bugs and issues by sending an email to <b>"+
        "<a href='mailto:test@test.com' target='_blank'>test@test.com</a></b>. "+
        "Please describe in as much detail as possible what steps you took before the problem occurred and what operating system you are using. This will help the developer identify and fix the issue as quickly as possible.",
    },
    {
      id: "faq5",
      title: "How do I suggest a feature or improvement?",
      content:
        "If you have suggestions for new features or improvements to the app, please let the developer know. You can suggest new features and improvements by sending an email to " +
        "<b><a href='mailto:test@test.com' target='_blank'>test@test.com</a></b>. " +
        "Please describe in as much detail as possible what the new feature or improvement is and how it would benefit the application. Your feedback is important and will help make the app better for everyone."
    },
  ];

  return (
    <section className="select-none py-12 lg:py-16">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16">
          <motion.h2
            className="text-4xl font-semibold leading-10 text-blue-chill-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
            >
              <AccordionItem id={faq.id} title={faq.title} content={faq.content} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
