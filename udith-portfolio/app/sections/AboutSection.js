'use client'
import { motion } from 'framer-motion';

export default function About(){
    return (
        <section id='about' className="py-20 bg-gray-900">
            <div className="max-w">
                <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                >
                    <h2>About Me</h2>
                     <div className="h-1 w-20 bg-blue-600 mx-auto"></div>

                </motion.div>
            </div>
        </section>
    )
}