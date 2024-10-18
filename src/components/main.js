import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaPhp, FaDocker } from 'react-icons/fa'; // Add PHP and Docker icons
import { DiRuby } from 'react-icons/di'; // Add Ruby on Rails icon

export default function Main({ darkMode }) {
    const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });

    return (
        <main className={`p-4 ${darkMode ? 'dark' : ''}`}>
            {/*Home section*/}
            <section id="home" className="pt-28 lg:pt-36">
                <div className='container items-center lg:grid lg:grid-cols-2 lg-gap-10'>
                    <div>
                        <div className="flex item-center gap-3">
                            <figure className="img-box w-9 h-9 rounded-lg">
                                <img src="/avatar.jpg" width={40} height={40} alt="Hoyoung Kim portfolio" className='img-cover' />
                            </figure>
                            <div className={`flex items-center gap-1.5 ${darkMode ? 'text-zinc-300' : 'text-zinc-600'} text-sm tracking-wide`}>
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                    <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                                </span>
                                Available for work
                            </div>
                        </div>
                        <h2 className={`headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 lg:mb-10`}>
                            Hoyoung Kim <br />
                            Full-Stack Web Developer
                        </h2>
                        <div id='space' className='flex items-center gap-3'>
                            <ButtonPrimary darkMode={darkMode} />
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                            <img src="cat.jpeg" width={400} height={400} alt="Hoyoung Kim" className='w-full' />
                        </figure>
                    </div>
                </div>
            </section>

            {/* About and Skills Container */}
            <section id="about-skills" className={`min-h-screen flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">
                    {/* About Section */}
                    <div className="border-r border-gray-400 pr-6">
                        <h1 className="text-4xl font-bold mb-8">About Me</h1>
                        <p className="text-xl mb-4">
                            Fully committed to the philosophy of life-long learning, I'm a full-stack developer with a deep passion for JavaScript, React, and all things web development.
                            The unique combination of creativity, logic, technology, and never running out of new things to discover drives my excitement and passion for web development.
                            When I'm not at my computer, I like to spend my time reading, keeping fit, and playing guitar.
                        </p>
                    </div>

                    {/* Skills Section with Animation */}
                    <div ref={skillsRef} className={`${skillsInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_4px,_black_calc(100%-4px),transparent_100%)]`}>
                        <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Skills</h2>
                        <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaHtml5 className="text-orange-600 text-8xl mt-14" />
                                        <span>HTML5</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaCss3Alt className="text-blue-600 text-8xl mt-14" />
                                        <span>CSS3</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaJs className="text-yellow-500 text-8xl mt-14" />
                                        <span>JavaScript</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaReact className="text-blue-400 text-8xl mt-14" />
                                        <span>React</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaNodeJs className="text-green-500 text-8xl mt-14" />
                                        <span>Node.js</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaGit className="text-red-600 text-8xl mt-14" />
                                        <span>Git</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <DiRuby className="text-red-500 text-8xl mt-14" />
                                        <span>Ruby on Rails</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaPhp className="text-indigo-600 text-8xl mt-14" />
                                        <span>PHP</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaDocker className="text-blue-500 text-8xl mt-14" />
                                        <span>Docker</span>
                                    </div>
                                </li>
                            </ul>
                            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaHtml5 className="text-orange-600 text-8xl mt-14" />
                                        <span>HTML5</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaCss3Alt className="text-blue-600 text-8xl mt-14" />
                                        <span>CSS3</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaJs className="text-yellow-500 text-8xl mt-14" />
                                        <span>JavaScript</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaReact className="text-blue-400 text-8xl mt-14" />
                                        <span>React</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaNodeJs className="text-green-500 text-8xl mt-14" />
                                        <span>Node.js</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaGit className="text-red-600 text-8xl mt-14" />
                                        <span>Git</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <DiRuby className="text-red-500 text-8xl mt-14" />
                                        <span>Ruby on Rails</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaPhp className="text-indigo-600 text-8xl mt-14" />
                                        <span>PHP</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-col items-center">
                                        <FaDocker className="text-blue-500 text-8xl mt-14" />
                                        <span>Docker</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/*Projects section*/}
            <section id="projects" className="min-h-screen flex items-center justify-center">

            </section>
        </main>
    );
}

function ButtonPrimary({ darkMode }) {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf';
        link.download = 'Hoyoung_Kim_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleResumeDownload}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg focus:outline-none transition-colors duration-300 ${darkMode
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
        >
            <AiOutlineDownload size={20} />
            Resume
        </button>
    );
}