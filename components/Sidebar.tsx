import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div>
            <img src="https://pbs.twimg.com/profile_images/1593299186572836864/ko7JeoXk_400x400.jpg"
                alt="A photo of me gently smiling"
                className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan"><span className="text-green-400">Lucas</span> Cyrne</h3>
            <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-700 rounded-full text-sm">Full-stack Developer</p>
            <a
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-700 text-sm rounded-full"
                href=""
                download="name"
            >
                <GiTie className="w-6 h-6" /> Download resume</a>
            {/* Social Icons */}
            <div className="flex justify-around mx-auto my-5 w-9/12 md:w-full text-green-400">
                <a href="">
                    <AiFillYoutube className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            {/* Address */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-700"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center space-x-2 text-sm">
                    <GoLocation />
                    <span>Pernambuco, Brazil</span>
                </div>
                <p className="py-2 text-sm">cyrne24@gmail.com</p>
                <p className="py-2 text-sm">+55(81)99922-6282</p>
            </div>
            {/* Email Button */}
            <button className="bg-gradient-to-r py-2 my-2 px-5 from-green to-blue-400 w-8/12 rounded-full text-white text-sm focus:outline-none"
                onClick={() => window.open('mailto: cyrne24@gmail.com')}
            >Email me</button>
            {/* todo: use icon button */}
            <button className="bg-gradient-to-r py-2 my-2 px-5 bg-black from-green to-blue-400 w-8/12 rounded-full text-white text-sm cursor-pointer"
                onClick={changeTheme}>
                Toogle Theme
            </button>
        </div>
    )
}

export default Sidebar;