import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Kiedy je oswojono?",
    description:
      "Ponad 6000 lat temu, starożytni Inkowie w Peru oswoili te zwierzęta dla ich delikatnego polaru. Inkowie cenili włókna Alpaca ponad złoto.",
  },
  {
    name: "Ile ważą?",
    description: "Alpaki ważą od 50 do 100 kilogramów.",
  },
  {
    name: "Ile żyją?",
    description:
      "Ponieważ są one całkowicie oswojonym zwierzęciem, alpaki mogą żyć dość długo. Jeśli są dobrze wychowane, to mogą żyć nawet do 20 lat.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-services bg-contain bg-no-repeat h-[640px]  bg-top"
          >
            <h2 className="h2  mb-6">Ciekawostki o alpakach</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">
              Dlaczego jesteśmy takie ciekawe...
            </h3>
            <button className="btn btn-sm">Zapraszamy do odwiedzin!</button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px]  mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm" href="#">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
