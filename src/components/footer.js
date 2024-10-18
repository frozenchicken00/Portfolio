export default function Footer({ darkMode }) {
    return (
        <footer className={`w-full z-10 p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} text-center shadow-lg border-t border-gray-200`}>
            <a href="https://www.linkedin.com/in/hoyoung-kim-946992281/" target="_blank" rel="noopener noreferrer" className="mx-2">LinkedIn</a>
            <a href="https://github.com/frozenchicken00" target="_blank" rel="noopener noreferrer" className="mx-2">GitHub</a>
            <p>&copy; Hoyoung Kim 2024</p>
        </footer>
    );
}