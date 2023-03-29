import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20  lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]  bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Troszkę informacji o nas...</h2>
            <h3 className="h3 mb-4">
              Jesteśmy profesjonalnalnymi hodowcami alpak odmiany Huacaya.
            </h3>
            <p className="mb-6">
              Poza byciem właścicielami tych wspaniałych przyjemniaków dajemy
              również innym okazję do zapoznania się z tym niezbyt jeszcze w
              Polsce gatunkiem zwierząt które często budzą uśmiech na naszych
              twarzach.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10- mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Ilośc <br />
                  Zwierzaków
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? (
                    <CountUp start={0} end={1000} duration={10} />
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Ilość wywołanych <br />
                  uśmiechów
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={150} duration={8} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Ilość oplutych <br />
                  odwiedzających
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
