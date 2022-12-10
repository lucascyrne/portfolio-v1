import { Category } from "../type";
import { FC, useState } from "react";
import { motion } from 'framer-motion';
import { projects as projectsData } from '../data';
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import { NextPage } from "next";

const Projects: NextPage = () => {
	const [active, setActive] = useState("all");
	const [projects, setProjects] = useState(projectsData);
	const [showDetail, setShowDetail] = useState<number | null>(null);

	const handlerFilterCategory = (category: Category | "all") => {
		if (category === "all") {
			setProjects(projectsData);
			setActive(category);
			return;
		}

		const newArray = projectsData.filter(project => project.category.includes(category));
		setProjects(newArray);
		setActive(category);
	}

	return (
		<motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
			<ProjectNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
			<motion.div className="relative grid grid-cols-12 gap-4 my-3"
				variants={stagger}
				initial="initial"
				animate="animate"
			>
				{
					projects.map(project => (
						<motion.div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg" key={project.name}
							variants={fadeInUp}
						>
							<ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
						</motion.div>
					))
				}
			</motion.div>
		</motion.div>
	)
}

export default Projects;