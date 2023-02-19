"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and ivite them to play together in the same
            world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
      variants={fadeIn('up','tween',0.3,1)}
      className='relative mt-[68px] h-[550px]'>
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people"
          className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people"
          className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people"
          className="w-full h-full" />
        </div>

        <div className="absolute left-[13%] bottom-[20%] w-[160px] h-[140px] p-[6px]   rounded-xl bg-[#5d6680]">
          <img src="Card1.png" alt="people"
          className="w-full h-full" />
          <img src="Man1.png" alt="people"
          className="w-[35px] h-[35px] p-[6px] rounded-full absolute bottom-9 z-20" />
          <img src="Man2.png" alt="people"
          className="w-[35px] h-[35px] p-[6px] rounded-full absolute bottom-9 left-[1.1rem] z-10" />
          <img src="Man3.png" alt="people"
          className="w-[35px] h-[35px] p-[6px] rounded-full absolute bottom-9 left-[1.8rem] z-0" />
          <span className="absolute bottom-12 left-[4rem] text-white text-[9px]">+264 has joined</span>
          <span className="absolute bottom-3 left-[1rem] text-white text-[15px] font-bold">The Upside Down</span>
        </div>

        <div className="absolute right-[30%] top-[10%] w-[160px] h-[140px] p-[6px]   rounded-xl bg-[#5d6680]">
          <img src="Planeto.png" alt="people"
          className="w-full h-full" />
          <img src="Man1.png" alt="people"
          className="w-[35px] h-[35px] p-[6px] rounded-full absolute bottom-9 z-20" />
          <img src="Man2.png" alt="people"
          className="w-[35px] h-[35px] p-[6px] rounded-full absolute bottom-9 left-[1.1rem] z-10" />
          <img src="Man3.png" alt="people"
          className="w-[35px] h-[35px] p-[6px] rounded-full absolute bottom-9 left-[1.8rem] z-0" />
          <span className="absolute bottom-12 left-[4rem] text-white text-[9px]">+134 has joined</span>
          <span className="absolute bottom-3 left-[2rem] text-white text-[15px] font-bold">Hawkins Labs</span>
        </div>
        

      </motion.div>
    </motion.div>
  </section>
);

export default World;
