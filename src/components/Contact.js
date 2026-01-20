'use client';

import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`glass-panel ${styles.wrapper}`}
                >
                    <div className={styles.info}>
                        <h2 className={styles.heading}>Let&#39;s <span className="text-gradient">Connect</span></h2>
                        <p className={styles.text}>
                            I&#39;m currently available for full-time positions.
                            If you have a project that needs some creative touch, let&#39;s chat.
                        </p>
                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span>Email</span>
                                <a href="celestamamachan@gmail.com">celestamamachan@gmail.com</a>
                            </div>
                            <div className={styles.detailItem}>
                                <span>Socials</span>
                                <div className={styles.links}>
                                    <a href="https://www.linkedin.com/in/celesta-mamachan-660873245/">LinkedIn</a>
                                    <a href="https://github.com/cel200">GitHub</a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.group}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="Name" />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className={styles.input} placeholder="Email" />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" className={styles.textarea} placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className={styles.submit}>
                            Send Message
                        </button>
                    </form> */}
                </motion.div>
            </div>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Dev Portfolio. Built with Next.js & Redux.</p>
            </footer>
        </section>
    );
}
