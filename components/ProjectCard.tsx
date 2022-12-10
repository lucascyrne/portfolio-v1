import Image from "next/image";
import { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { motion } from 'framer-motion';
import { MdClose } from "react-icons/md";
import { projects } from "../data";
import { IProject } from "../type";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FC<{
  project: IProject,
  showDetail: null | number,
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs
  },
  showDetail,
  setShowDetail
}) => {
    return (
      <div>
        <Image
          src={image_path}
          alt={name}
          width={"350"}
          height={"150"}
          quality={"100"}
          className="cursor-pointer"
          onClick={() => setShowDetail(id)} />
        <p className="my-2 text-center">{name}</p>
        {
          showDetail === id && (
            <div className="absolute grid md:grid-cols-2 gap-x-12 p-2 md:p-10
            top-0 left-0 h-auto w-full bg-gray-100 dark:bg-dark-100 
            text-black dark:text-white z-10 rounded-lg">
              <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={fadeInUp} className="border-4 border-gray-100">
                  <Image src={image_path} alt={name} width={"350"} height={"150"} />
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex justify-center my-4 space-x-3"
                >
                  <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-sm bg-gray-100 dark:bg-dark-100">
                    <AiFillGithub />
                    <span>Github</span>
                  </a>
                  <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-sm bg-gray-100 dark:bg-dark-100">
                    <AiFillProject />
                    <span>Project</span>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                <motion.h3 variants={fadeInUp} className="mb-3 font-medium text-sm">{description}</motion.h3>
                <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                  {
                    key_techs.map(tech => <span key={tech}
                      className="px-2 py-1 m-1 bg-gray-200 dark:bg-dark-200">
                      {tech}
                    </span>)
                  }
                </motion.div>
              </motion.div>

              <button onClick={() => setShowDetail(null)}
                className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200">
                <MdClose size={30} />
              </button>
            </div>
          )
        }
      </div>
    )
  }

export default ProjectCard;