import React from "react";

import {Link} from 'react-router-dom';

const navLinks = [
    {
        title: "Techie Developers",
        Path: "/",
    },
    {
        title: "Developers",
        path: "/Developers",
    },
    {
        title: "Discord Bot",
        path: "/Discord /Bot",
    },
    {
        title: "Github",
        path: "/Github",
    },
];

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span>Techie Helper</span>
            <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                        
                    </li>
                ))}

                
            </ul>
        </nav>
    );
}


