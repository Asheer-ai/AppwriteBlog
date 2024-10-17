import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
return (
    <footer className="bg-gray-800 text-gray-200 py-10">
    <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between">
        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between h-full">
            <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
            </div>
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Ink & Insight. All Rights Reserved.
            </p>
            </div>
        </div>

        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">Company</h3>
            <ul className="space-y-4">
            {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                <li key={item}>
                <Link
                    className="hover:text-blue-400 transition duration-200"
                    to="/"
                >
                    {item}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">Support</h3>
            <ul className="space-y-4">
            {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                <li key={item}>
                <Link
                    className="hover:text-blue-400 transition duration-200"
                    to="/"
                >
                    {item}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">Legals</h3>
            <ul className="space-y-4">
            {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                <li key={item}>
                <Link
                    className="hover:text-blue-400 transition duration-200"
                    to="/"
                >
                    {item}
                </Link>
                </li>
            ))}
            </ul>
        </div>
        </div>
        
    
        <div className="mt-10 flex justify-center space-x-6">
        <a href="#" aria-label="Facebook" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i> 
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-blue-400">
            <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
            <i className="fab fa-linkedin-in"></i>
        </a>
        </div>
    </div>
    </footer>)
}

export default Footer
