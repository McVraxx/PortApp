import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex  justify-start items-center"
          >
            <div>
              <h4 className="text-x1 uppercase font-medium mb-2 tracking-wide">
                Napisz do nas !
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Czas na <br /> ODZWIEDZINY !
              </h2>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-400 transition-all"
              type="text"
              placeholder="Your email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-400 transition-all"
              type="text"
              placeholder="Your name"
            />
            <textarea className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-green-400 transition-all resize-none mb-12"></textarea>
            <button className="btn btn-lg"> Wyślij wiadomość </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
