import Bar from "../components/Bar";
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import { fadeInUp, routeAnimation } from '../animations';
import { languages, tools } from "../data";
import { NextPage } from "next";

const Resume: NextPage = () => {
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
            {/* education & exp */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold text-md">Computer Science Engineering</h5>
                        <p className="font-semibold text-sm">Academy of Technology (2017-2021)</p>
                        <p className="my-3 text-sm">
                            I am currently pursuing B.tech in Computer Science
                            Engineering from Academy of Technology
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold text-md">Software Engineer Jr.</h5>
                        <p className="font-semibold text-sm">Lucid Dreams, Lovecrypto, Novo Atacarejo</p>
                        <p className="my-3 text-sm">
                            I don&apos;t know why I am doing this job
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* languages & tools */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2 text-sm">
                        {
                            languages.map(language => (
                                <Bar data={language} key={language.name} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Tools & Software
                    </h5>
                    <div className="my-2 text-sm">
                        {
                            tools.map(tool => (
                                <Bar data={tool} key={tool.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume;