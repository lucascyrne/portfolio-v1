import { FC } from "react";
import { ISkill } from "../type";
import { motion } from 'framer-motion';

const Bar: FC<{
  data: ISkill
}> = ({
  data: {
    Icon,
    name,
    level,
  }
}) => {
    const bar_width = `${level}`;

    const variants = {
      initial: {
        width: 0
      },
      animate: {
        width: bar_width,
        duration: 0.4,
        type: "string",
        damping: 10,
        stiffness: 100,
      }
    }

    return (
      <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-700">
        <motion.div className="flex items-center px-4 py-1 bg-gradient-to-r from-green to-blue-400 rounded-full"
          style={{ width: bar_width }}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Icon className="mr-3" />
          {name}
        </motion.div>
      </div >
    )
  }

export default Bar;