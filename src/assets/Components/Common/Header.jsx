import React from 'react'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/">
                        My Website
                    </a>

                    <div className="navbar-nav ms-auto">
                        <a className="nav-link text-white" href="/">
                            Home
                        </a>
                        <a className="nav-link text-white" href="/">
                            Services
                        </a>
                        <a className="nav-link text-white" href="/">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

        </>
    );
};

