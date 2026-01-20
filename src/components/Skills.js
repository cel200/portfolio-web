'use client';

import { motion } from 'framer-motion';
import {
    SiHtml5, SiCss3, SiJavascript, SiReact,
    SiNextdotjs, SiNodedotjs, SiMongodb, SiRedux,
    SiExpress
} from 'react-icons/si';
import styles from './Skills.module.css';

const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' }, // Dark mode adapted
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
     { name: 'Express', icon: SiExpress, color: '#ffffff' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },

    
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={`container`}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    My <span className="text-gradient">Skills</span>
                </motion.h2>

                <div className={styles.grid}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-panel ${styles.card}`}
                        >
                            <skill.icon size={48} style={{ color: skill.color }} />
                            <span className={styles.name}>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
