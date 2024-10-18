import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError('All fields are required.');
            return;
        }
        window.location.href = `mailto:achi5183@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (From: ${formData.email})`;
    };

    return (
        <section id="contact" className="min-h-screen flex justify-center items-center py-12 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">

                {/* Left: Image */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/cat.jpeg"
                        alt="Contact illustration"
                        className="rounded-lg w-full object-cover"
                    />
                </div>

                {/* Right: Contact Form */}
                <div className="w-full md:w-1/2 md:pl-12">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="text-lg text-gray-700 dark:text-gray-300">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded"
                                required
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-lg text-gray-700 dark:text-gray-300">E-mail</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded"
                                required
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="message" className="text-lg text-gray-700 dark:text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded"
                                rows="4"
                                required
                            />
                        </div>

                        {error && <p className="text-red-500">{error}</p>}

                        <button
                            type="submit"
                            className="mt-6 bg-black dark:bg-white dark:text-black text-white py-3 px-6 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Right Column: Contact Information */}
                    <div className="mt-8 text-gray-700 dark:text-gray-300">
                        <h3 className="text-xl font-semibold">Contact</h3>
                        <p>achi5183@gmail.com</p>
                        <h3 className="mt-4 text-xl font-semibold">Based in</h3>
                        <p>Laie, Hawaii</p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-xl text-gray-700 dark:text-gray-300"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-xl text-gray-700 dark:text-gray-300"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter text-xl text-gray-700 dark:text-gray-300"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
