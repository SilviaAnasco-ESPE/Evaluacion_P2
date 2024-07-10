import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            alert('Por favor completa todos los campos.');
            return;
        }
        
        setFormStatus('Mensaje enviado correctamente.');

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="flex justify-center items-center py-12">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full md:max-w-md">
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">Contacto</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </form>
                    {formData.name && formData.email && formData.message && !formStatus && (
                        <p className="mt-4 text-gray-600">Por favor, completa todos los campos antes de enviar.</p>
                    )}
                    {formStatus && <p className="mt-4 text-green-600">{formStatus}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactForm;