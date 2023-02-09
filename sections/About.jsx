'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title="| O nas" textStyles="text-center" />

            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
            >
                <span className="font-extrabold text-white">LASER CENTER</span> V podjetju VHD se ukvarjamo s profesionalnim laserskim izrezom in graviranjem vrsto let. Strankam v okviru laser centra zagotavljamo:
                {' '}
                <span className="font-extrabold text-white">

        </span>{' '}
                {' '}
                <span className="font-extrabold text-white">ZASNOVA IN DESIGN PROJEKTA</span> - Folije Več kot 15 let izkušenj pri delu s folijami nas uvršča v sam vrh ponudnikov profesionalnih storitev “wrappinga”{' '}
                <span className="font-extrabold text-white">“wrappinga”</span> v Sloveniji. Ne glede ali gre
            </motion.p>

            <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src="/arrow-down.svg"
                alt="arrow down"
                className="w-[18px] h-[28px] object-contain mt-[28px]"
            />
        </motion.div>
    </section>
);

export default About;
