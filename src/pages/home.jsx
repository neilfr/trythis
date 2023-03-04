import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Arrow from "../components/arrow";
import SkillFlipCard from "../components/skillflipcard";
import ProjectFlipCard from "../components/projectflipcard";
import CodeWarriorsHome from "../resources/codewarriors_home.jpg";
import SnapCycleHome from "../resources/snapcycle_home.png";
import PortfolioSkills from "../resources/portfolio_skills.png";
import {useNavigate} from "react-router";
import {
    SiTailwindcss,
    SiCss3,
    SiJavascript,
    SiMysql,
    SiPython,
    SiReact,
    SiFigma,
    SiLinux,
    SiGit,
    SiC,
} from "react-icons/si";
import {DiJava} from "react-icons/di";
const home = () => {
    let navigate = useNavigate()
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToSkills = () => {
        const element = document.getElementById('skills');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const goToProjects = () => {
        navigate('/projects')
    }
    return (
        <>
            <div className=" bg-gray-900 w-screen font-bold text-white">
                <Navbar/>
                <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 mt-8 text-white h-screen flex flex-col items-center justify-center">
                    <div className="xl:text-8xl text-3xl">
                        AIDAN FROGGATT
                    </div>
                    <div className="mt-4 xl:text-3xl text-l">
                        Software Engineering Student
                    </div>
                    <button className="mt-64" onClick={scrollToProjects}>
                        <Arrow/>
                    </button>
                </div>

                <div id="projects" className="min-h-screen flex flex-col justify-center items-center text-3xl xl:text-5xl text-white">
                    <button className="btn-scroll mb-16" onClick={scrollToProjects}>
                        Projects
                    </button>
                    <div className="xl:mb-32 p-4 flex flex-row flex-wrap gap-16 justify-center items-center">
                        <ProjectFlipCard project={<div className="xl:hover:scale-110 flex flex-col justify-center text-xl xl:text-4xl items-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-4 shadow-lg shadow-black">
                            <div className="pb-4">Portfolio</div>
                            <div><img src={PortfolioSkills} className="flex h-auto max-w-1/2 xl:h-64 w-projectPicMobile h-projectPicMobile xl:w-projectPic border-4 border-gray-900"/></div>
                        </div>} text="My personal portfolio outlining my projects and skills" moreInfo={<div className="hover:text-yellow-400" onClick={goToProjects}>MORE INFO</div>} projectTitle="Portfolio"/>
                        <ProjectFlipCard project={<div className="xl:hover:scale-110 flex flex-col justify-center text-xl xl:text-4xl items-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-4 shadow-lg shadow-black">
                            <div className="pb-4">SnapCycle</div>
                            <div><img src={SnapCycleHome} className="flex h-auto max-w-1/2 xl:h-64 w-projectPicMobile h-projectPicMobile xl:w-projectPic border-4 border-gray-900"/></div>
                        </div>} text="SnapCycle is a web app that scans items and provides information about the environmental impact using AI" moreInfo={<div className="hover:text-yellow-400" onClick={goToProjects}>MORE INFO</div>} projectTitle="SnapCycle"/>
                        <ProjectFlipCard project={<div className="xl:hover:scale-110 flex flex-col justify-center text-xl xl:text-4xl items-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-4 shadow-lg shadow-black">
                            <div className="pb-4">CodeWarriors</div>
                            <div><img src={CodeWarriorsHome} className="flex h-auto max-w-1/2 xl:h-64 w-projectPicMobile h-projectPicMobile xl:w-projectPic border-4 border-gray-900"/></div>
                        </div>} text="CodeWarriors is a gamified web app that teaches programming skills" moreInfo={<div className="hover:text-yellow-400" onClick={goToProjects}>MORE INFO</div>} projectTitle="CodeWarriors"/>
                    </div>
                </div>

                <div id="skills" className="min-h-screen xl:mb-32 bg-gray-900 flex flex-col items-center justify-center text-5xl text-white pl-8 pt-8">
                    <button className="btn-scroll mb-8 text-3xl xl:text-4xl" onClick={scrollToSkills}>
                        Skills
                    </button>
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiReact/>} text="React"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiJavascript size="48"/>} text="JavaScirpt"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiCss3 size="48"/>} text="CSS"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiTailwindcss size="48"/>} text="Tailwind"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<DiJava size="48"/>} text="Java"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8"><SkillFlipCard icon={<SiC size="48"/>} text="C"/></div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiPython size="48"/>} text="Python"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiMysql size="48"/>} text="MySQL"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiFigma size="48"/>} text="Figma"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiGit size="48"/>} text="Git"/>}</div>
                        <div className="shadow-md shadow-black hover:scale-110 flex flex-col justify-center items-center bg-gray-800 m-3 xl:m-8">{<SkillFlipCard icon={<SiLinux size="48"/>} text="Linux"/>}</div>

                    </div>

                </div>


                <div className="bg-gray-900 border-t-4 border-amber-300 h-auto flex flex-row justify-center items-center text-9xl text-white">
                    <Footer/>
                </div>
            </div>
        </>

    );
};

export default home;