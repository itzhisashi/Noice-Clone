import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'select',
        contact: '',
        symptoms: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registration Successful! Redirecting to booking...");
        // Redirect logic here
    };

    return (
        <center>
        <div className=" min-h-[calc(100vh-64px)]flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-slate-900">Patient Registration</h2>
                    <p className="mt-2 text-center text-sm text-slate-600">Enter your details to generate a unique PHID</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input name="name" type="text" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-stale-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Full Name" onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <input name="age" type="number" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-stale-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Age" onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <select name="gender"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-stale-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                onChange={handleChange} value={formData.gender}>
                                <option value="select" disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <input name="contact" type="tel" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-stale-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Phone Number" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Register Patient
                        </button>
                    </div>
                </form>
            </div>
        </div></center>
    );
}
