import Head from 'next/head'
import Image from 'next/image'
import { services } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext, NextPage } from 'next';
import ServiceCard from '../components/ServiceCard';

const About: NextPage = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-grow flex-col px-6 pt-1">
      <Head>
        <title>Web Developer | Portfolio</title>
      </Head>

      <motion.h5 variants={fadeInUp} className="my-3 font-medium text-sm">
        I am currently pursuing B.Tech Degree (Final Year) in Computer
        Science Engineering from Academy of Technology. I have 3+ years of
        experience in Web Development and I have a Youtube Channel where I
        teach Full Stack Web Development
      </motion.h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{
        marginLeft: '-1.5rem',
        marginRight: '-1.5rem'
      }}>
        <h4 className="my-3 text-xl font-bold tracking-wide">What I am doing</h4>
        <motion.div className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {
            services.map(service => (
              <motion.div className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg"
                key={service.title}
                variants={fadeInUp}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About;

/* export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  const data = await res.json();
  return { props: { endpoint: process.env.VERCEL_URL } }
} */