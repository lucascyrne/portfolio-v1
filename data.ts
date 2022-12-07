import { IService, ISkill } from './type'
import { FaServer } from 'react-icons/fa'
import { RiComputerLine } from 'react-icons/ri'
import { MdDeveloperMode } from 'react-icons/md'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
    {
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>',
        Icon: RiComputerLine,
    },
    {
        title: 'Backend Development',
        about: 'handle database, server, api using <b>Express</b> & other popular frameworks',
        Icon: FaServer,
    },
    {
        title: 'API Development',
        about: 'I can develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>',
        Icon: AiOutlineApi,
    },
    {
        title: 'Competitive Coder',
        about: 'a daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>',
        Icon: MdDeveloperMode,
    },
    {
        title: 'UI/UX designer',
        about: 'stunning user interface designer using <b>Figma</b> and <b>Framer</b>',
        Icon: AiOutlineAntDesign,
    },
    {
        title: 'Whatever....',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
        Icon: RiComputerLine,
    },
]

export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: 'Javascript',
        level: '100%',
        Icon: BsCircleFill,
    },
    {
        name: 'React Native',
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: 'React',
        level: '90%',
        Icon: BsCircleFill,
    },
    {
        name: 'Django',
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: 'C',
        level: '70%',
        Icon: BsCircleFill,
    },
]

export const tools: ISkill[] = [
    {
        name: 'Figma',
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: 'Framer',
        level: '100%',
        Icon: BsCircleFill,
    },
    {
        name: 'Illustrator',
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: 'Photoshop',
        level: '90%',
        Icon: BsCircleFill,
    },
    {
        name: 'Premiere',
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: 'Reaper',
        level: '70%',
        Icon: BsCircleFill,
    },
]
