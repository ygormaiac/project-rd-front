import React from 'react';
import NavbarInitial from '../components/NavbarInitial';

export default function Homepage() {
    return (
        <main>
            <NavbarInitial />
            <div className="homepage-info">
                <h3>Somos uma plataforma onde você consegue saber em tempo real informações sobre lançamentos, sejam eles futuros ou passados.</h3>
                <h3>Gostaria de saber mais? Acesse o site e fique por dentro de tudo!</h3>
                <button ><a href="https://www.spacex.com/">QUERO SABER MAIS</a></button>
            </div>
        </main>
    )
}