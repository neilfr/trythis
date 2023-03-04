import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CodeWarriorsHome from "../resources/codewarriors_home.jpg";
import SnapCycleHome from "../resources/snapcycle_home.png";
import PortfolioSkills from "../resources/portfolio_skills.png";
import {useNavigate} from "react-router";
const projects = () => {
    let navigate = useNavigate()
    const goHome = () => {
        navigate("/home")
    }
    return (
        <>
            <div className="bg-gray-800 w-screen font-bold text-white">
                <Navbar/>

                <div className="bg-gray-900 pb-16">
                    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
                        <div className="flex flex-col justify-center items-center">
                            <div className="shadow-lg shadow-black p-4 mx-6 bg-gray-800 xl:mx-16 xl:mt-32 mt-24 flex xl:flex-row flex-col justify-center items-center">
                                <div className="xl:w-1/3 mx-16 xl:mx-0 flex flex-col justify-center text-2xl xl:text-4xl items-center rounded-xl">
                                    <div className="pb-4">Portfolio</div>
                                    <a onClick={goHome} className="xl:hover:opacity-50">
                                        <img src={PortfolioSkills} className="rounded-2xl border-4 border-gray-900"/>
                                    </a>
                                </div>
                                <div className="xl:w-2/3 xl:ml-16 text-sm xl:text-xl mt-8">
                                    My personal portfolio outlining my projects and skills<br/><br/>Developed using React JS and Tailwind CSS
                                </div>
                            </div>
                            <div className="shadow-lg shadow-black p-4 mx-6 bg-gray-800 xl:mx-16 xl:mt-32 mt-8 flex xl:flex-row flex-col justify-center items-center">
                                <div className="xl:w-1/3 mx-16 xl:mx-0 flex flex-col justify-center text-2xl xl:text-4xl items-center rounded-xl">
                                    <div className="pb-4">SnapCycle</div>
                                    <a href="https://devpost.com/software/snapcycle-hyx3qv" target="_blank" className="xl:hover:opacity-50">
                                        <img src={SnapCycleHome} className="rounded-2xl text-2xl border-4 border-gray-900"/>
                                    </a>
                                </div>
                                <div className="xl:w-2/3 xl:ml-16 text-sm xl:text-xl mt-8">
                                    Won Best Environmental Hack at MacHacks 3<br/><br/>
                                    SnapCycle is a web app that scans items and provides information about the environmental impact using AI<br/><br/>
                                    Developed using React, PyTorch, Python, and Flask
                                </div>
                            </div>
                            <div className="p-4 mx-6 bg-gray-800 shadow-lg shadow-black xl:mx-16 xl:mt-32 mt-8 flex xl:flex-row flex-col justify-center items-center">
                                <div className="xl:w-1/3 mx-16 xl:mx-0 flex flex-col justify-center xl:text-4xl text-2xl items-center rounded-xl">
                                    <div className="pb-4">CodeWarriors</div>
                                    <a href="https://devpost.com/software/code-warriors" target="_blank" className="xl:hover:opacity-50">
                                        <img src={CodeWarriorsHome} className="rounded-2xl border-4 border-gray-900"/>
                                    </a>
                                </div>
                                <div className="xl:w-2/3 xl:ml-16 text-sm xl:text-xl mt-8">
                                    Won 1st place for the best hack at DeltaHacks IX<br/><br/>
                                    CodeWarriors is a gamified web app that teaches programming skills<br/><br/>
                                    Developed using React and Tailwind.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 border-t-4 border-amber-300 h-auto flex flex-row justify-center items-center text-9xl text-white">
                    <Footer/>
                </div>
            </div>
        </>

    );
};

export default projects;