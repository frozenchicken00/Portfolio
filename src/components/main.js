import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AiOutlineDownload } from 'react-icons/ai';

export default function Main({ darkMode }) {
    const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });

    return (
        <main className={`p-4 ${darkMode ? 'dark' : ''}`}>
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
                            Web Developer
                        </h2>

                        <div className='flex items-center gap-3'>
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

            <section id="about" className={`min-h-screen flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <h1>About Me</h1>
            </section>

            <section id="skills" className={`min-h-screen flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <div ref={skillsRef} className={`${skillsInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
                    <h2>Skills</h2>
                    <p>Here are the technologies I work with...</p>
                </div>
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