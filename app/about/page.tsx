"use client";
import React from "react";
import OurJounery from "./OurJounery";
import ContributaionPage from "../event/ContributaionPage";
import TeamSection from "./TeamSection";
import OurEvents from "./OurEvents";
import { motion } from "framer-motion";
import Image from "next/image";
import YouTubeThumbnailPage from "./youtube-thumbnail";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const AboutPrayas = () => {
  return (
    <section className="bg-white text-gray-800 pt-[120px]">
      <div className="w-full container mx-auto px-4 py-8 md:py-16">
        <motion.div className="mb-12 flex items-center" {...fadeInUp}>
          <div className="h-[3px] w-[100px] bg-black mr-[20px]"></div>
          <p className="text-[22px] tracking-widest font-bold uppercase text-black">
            Know about us
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold leading-snug heading pb-4">
              PRAYAS FOUNDATION, <br />
              creating a better life tomorrow.
            </h2>

            <Image
              src="/gallery/80.jpg"
              alt="Journey Image"
              width={500}
              height={600}
              className="object-cover w-full h-[320px] rounded-2xl"
            />
          </motion.div>
          <motion.div {...fadeInUp}>
            <p className="text-gray-700 max-w-2xl">
              <span className="font-bold text-[18px] md:text-[22px] text-black">
                Prayas empowers underprivileged children, youth, and communities
                through education, skill development, and social responsibility.
              </span>
              <br />
              <span className="text-[16px] md:text-[20px] pt-2 block">
                At Prayas, we are dedicated to empowering unprivileged children
                and youth and communities through a holistic approach that
                blends education, skill development, and social responsibility.
                We equip children and young individuals with essential life
                skills and access to quality education, fostering confidence,
                leadership, and informed decision-making. Our vocational
                training programs build employability and self-reliance,
                enabling sustainable career pathways. Through active engagement
                in community service and environmental initiatives, we promote
                awareness, accountability, and responsible living. By embracing
                innovation and collaboration, we support green technologies,
                circular economy practices, and local partnerships to drive
                long-term, sustainable change.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mission & Vision Block */}
      <div className="bg-green-100 mb-8 md:mb-16 relative mt-[100px] md:mt-[300px]">
        <div className="container px-4 mx-auto">
          <motion.div
            className="top-[-68px] md:top-[-229px] relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/group_students.jpg"
              alt="Contribute Banner"
              className="w-full h-auto md:h-[500px] object-cover rounded-[15px] shadow-lg"
            />

            <div className="pt-[60px] md:pt-[150px] relative rounded-2xl p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div {...fadeInUp}>
                <h4 className="text-[16px] md:text-[20px] font-bold text-black uppercase tracking-wide mb-2">
                  Our Mission
                </h4>
                {/* <h3 className="text-lg md:text-4xl font-bold mb-3 text-gray-900 py-2">
                  We make sure to provide inclusive care for children with
                  special needs
                </h3> */}
                <p className="text-gray-700 text-md leading-relaxed">
                  To empower children and youth through education, life skills,
                  and community engagement, fostering confident, responsible,
                  and compassionate individuals.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} >
                <h4 className="text-[16px] md:text-[20px] font-bold text-black uppercase tracking-wide mb-2">
                  Our Vision
                </h4>
               
                <p className="text-gray-700 text-md leading-relaxed">
                  To build an inclusive and conscious society where every
                  individual realizes their potential and contributes to
                  collective well-being.
                </p>
              </motion.div>
            
            </div>
               <motion.div {...fadeInUp} className="p-4 md:p-10 grid grid-cols-1 md:grid-cols-1 gap-4" >
             
              
              
              <YouTubeThumbnailPage />
            </motion.div>
           
          </motion.div>
        </div>
      </div>

      {/* Sections with animations */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        <OurJounery />
        <TeamSection />
        <ContributaionPage
          title="At Prayas, we turn dreams into action
          empowering youth, building conscious
          communities, and creating real impact with
          integrity. Join us in shaping a brighter,
          inclusive future."
        />
        <div className="w-full container mx-auto px-4 py-4">
          <OurEvents />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPrayas;
