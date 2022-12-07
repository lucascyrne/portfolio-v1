import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const NavItem: FC<{
	activeItem: string,
	setActiveItem: Function,
	name: string,
	route: string
}> = ({
	activeItem,
	setActiveItem,
	name,
	route
}) => {
		return (
			activeItem !== name ? (
				<Link href={route}>
					<span onClick={() => setActiveItem(name)}
						className="hover:text-green"
					>{name}</span>
				</Link>
			) : null
		)
	}

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	const { pathname } = useRouter()

	useEffect(() => {
		if (pathname === '/') setActiveItem('About');
		if (pathname === '/projects') setActiveItem('Projects');
		if (pathname === '/resume') setActiveItem('Resume');
	}, [])

	return (
		<div className="flex justify-between px-5 py-3 my-3">
			<span className="font-bold text-green text-xl md:text-2xl border-b-4 border-green">{activeItem}</span>
			<div className="flex space-x-5 text-lg">
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume" />
			</div>
		</div>
	)
}

export default Navbar;