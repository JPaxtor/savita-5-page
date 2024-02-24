import { motion } from "framer-motion";
import { ImagesSlider, TypewriterEffectSmooth } from "./ui";
import { t } from "i18next";

interface HeroProps {
  heroTitle: string;
}

export const Hero: React.FC<HeroProps> = ({ heroTitle }) => {
  const images = [
    "https://t4.ftcdn.net/jpg/01/90/23/31/360_F_190233116_SFPKKdq5bAZ6X7V0O1XzsCPhZP7xZlws.jpg",
    "https://wallpapers.com/images/featured/el-salvador-m2intlu9flr3ur21.jpg",
  ];
  const wordArray = heroTitle.split(" ");
  const words = wordArray.map((word, index) => {
    if (index == 2 || index == 3) {
      return {
        text: word,
        className: "text-blue-300 dark:text-blue-300",
      };
    } else {
      return {
        text: word,
      };
    }
  });

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  py-4"></motion.p>
        <TypewriterEffectSmooth words={words}></TypewriterEffectSmooth>
      </motion.div>
    </ImagesSlider>
  );
};
