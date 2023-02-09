'use client';

import {motion} from 'framer-motion';

import styles from '../styles';
import {slideIn, staggerContainer, textVariant} from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
        <div className="flex justify-center items-center flex-col relative z-10">
            <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
                VHD
            </motion.h1>
            <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
                <p className={styles.heroheadingSmall}>
                    Valentin Hrušovar
                </p>
            </motion.div>
        </div>

        <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

            <img
                src="https://scontent.flju1-1.fna.fbcdn.net/v/t39.30808-6/315775885_114399258150354_2904034755956858542_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=osSSKyk4JPAAX9bKVwN&_nc_ht=scontent.flju1-1.fna&oh=00_AfABOmx9OBs87eS80O4WhaT9XlPIEFbWu1dK4kXFOkRwQg&oe=63E93480"
                alt="hero_cover"
                className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
            />

            <a href="#explore">
                <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                </div>
            </a>
        </motion.div>
    </motion.div>
  </section>
);

export default Hero;
