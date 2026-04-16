'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Nearshopz:E-Commerce Website',
    description:
      'NearShopz is a Trivandrum-based eCommerce platform built with React, Next.js, MongoDB, and GraphQL that allows users to securely purchase products from local stores while providing a responsive admin portal for managing products, orders, and users.',
    tags: ['React', 'Redux', 'Node.js', 'Chart.js'],
    // image: '/images/customer.png',
  },
  {
    title: '4Labs website',
    description:
      'Developed a high-performance, SEO-optimized website using Next.js and Strapi CMS with responsive UI components, server-side rendering, and dynamic content integration.',
    tags: ['Next.js', 'Strapi', 'Framer Motion', 'seo', 'performance'],
    // image: '/images/4labs3.png',
  },
  {
    title: 'Marketing Portal',
    description:
      'Built a marketing automation portal UI that supports bulk WhatsApp messaging, campaign management, and file uploads through REST APIs with a focus on stability and usability.',
    tags: ['React js', 'Redux', 'CSS Modules', 'socket.io'],
    // image: '/images/marketing.png',
  },
  {
    id: 4,
    title: 'Manpower Souq Admin Panel',
    description:
      'Developing a responsive Next.js-based admin panel for a manpower management system with dynamic features such as company management, worker profiles, and account request handling using REST and GraphQL APIs.',
    // image: '/images/manpower.png',
    tags: ['Next js', 'Redux', 'socket.io', 'Node js', 'Graphql', 'MongoDb', 'Express'],
  },
  {
    id: 5,
    title: 'Sub Contractor Portal',
    // image: '/images/image.png',
    description:
      'Developing a responsive subcontractor portal that enables contract management, bulk worker uploads, and dynamic data handling while seamlessly integrating with the Manpower Souq system.',
    tags: ['Next js', 'Redux', 'socket.io', 'Node js', 'Graphql', 'MongoDb', 'Express'],
  },
  {
    id: 5,
    title: 'Saloon Booking System',
    // image: '/images/image.png',
    description:
      'A Salon Booking System is a web application that simplifies appointment scheduling for customers and salon staff. Users can browse services, select time slots, book appointments, and get instant assistance through an AI chatbot. The system also includes an admin panel to manage services, staff availability, and bookings efficiently.',
    tags: ['Next js', 'Redux', 'socket.io', 'Node js', 'Rest Api', 'MongoDb', 'Express','Python','NLP'],
  },
];


export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Featured <span className="text-gradient">Projects</span>
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`glass-panel ${styles.card}`}
                        >
                            {/* <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.image}
                                />
                            </div> */}
                            <div className={styles.content}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
