import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { HomeIcon, UserIcon, CodeIcon, MailIcon } from '@heroicons/react/solid';

export default function Header({ toggleDarkMode, darkMode }) {
    return (
        <header className={`fixed top-0 left-0 w-full z-10 p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} shadow-lg`}>
            <nav className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href="#home" className="flex items-center"><HomeIcon className="h-5 w-5 mr-1" />Home</a>
                    <a href="#about-skills" className="flex items-center"><UserIcon className="h-5 w-5 mr-1" />About</a>
                    <a href="#projects" className="flex items-center"><CodeIcon className="h-5 w-5 mr-1" />Projects</a>
                    <a href="#contact" className="flex items-center"><MailIcon className="h-5 w-5 mr-1" />Contact</a>
                </div>
                <button onClick={toggleDarkMode} className="flex items-center">
                    {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                </button>
            </nav>
        </header>
    );
}
