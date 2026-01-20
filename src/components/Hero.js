'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <span className={styles.greeting}>Hi, I&#39;m a</span>
                    <h1 className={styles.title}>
                        Front End <span className="text-gradient">Developer</span>
                    </h1>
                    <p className={styles.description}>
                        Specializing in building exceptional digital experiences with
                        HTML, CSS, JS, React, Next.js, and Node.
                    </p>
                    <div className={styles.buttons}>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className={`${styles.button} ${styles.primary}`}
                        >
                            View Work
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className={`${styles.button} ${styles.secondary}`}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.visual}
                >
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/hero-3d.png"
                            alt="Digital Workspace"
                            fill
                            className={styles.heroImage}
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
