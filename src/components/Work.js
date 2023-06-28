import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.jpg";
import Img2 from "../assets/portfolio-img2.jpg";
import Img3 from "../assets/portfolio-img3.jpg";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight ">
                Zajecia <br />z alapakami !
              </h2>
              <p className="max-w-sm mb-16">
                Miedzy innymi oferujemy poniższe atrakcję z naszymi futrzanymi
                podopiecznymi...
              </p>
              <button className="btn btn-sm">Zobacz wiecej</button>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300"></div>

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">Karmienie alpaki</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  Relaksujące karmienie alpak naszymi smakołykami
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300"></div>

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">Spacer z alpaką</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  30 minutowy spacer z alpaką po terenie hodowli
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300"></div>

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">
                  Oglądanie terenu hodowli i zwierzaków
                </span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-2 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  Zwiedzanie lub też pomoc w codziennym funkcjonowaniu hodowli
                  przy opowieści o ich potrzebach i zapewne mimowolnym głaskaniu
                  futrzaków!
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
