import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavbarInitial() {
    const activeStyle = {
        color: "#ffffff",
    }

    return (
        <div>
            <section className="box-initial image-initial">
                <div className="title-initial">
                    <h1>SpaceX</h1>
                    <p>A sua plataforma para ficar atualizado sobre todos os lançamentos espaciais.</p>
                </div>
            </section>
            <nav className="navbar-initial">
                <ul>
                    <li>
                    <NavLink
                        to="/"
                        className="navlink-name"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/launches"
                        className="navlink-name"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        Todos os lançamentos
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/upcoming-launches"
                        className="navlink-name"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        Todos os próximos lançamentos
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/past-launches"
                        className="navlink-name"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        Todos os lançamentos anteriores
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/next-launches"
                        className="navlink-name"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        Próximo lançamento
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/lastest-launches"
                        className="navlink-name"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        Lançamento anterior
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}