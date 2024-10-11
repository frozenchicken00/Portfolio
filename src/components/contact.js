import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:achi5183@gmail.com?subject=${formData.name}&body=${formData.message}`;
    };

    return (
        <section id="contact" className="p-4">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border p-2"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border p-2"
                    required
                />
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border p-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
            </form>
        </section>
    );
}
