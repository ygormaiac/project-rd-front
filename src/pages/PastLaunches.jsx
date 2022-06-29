import React from 'react';
import useFetchApi from '../useFetchApi';
import LaunchCard from '../components/launchCard';
import NavbarInitial from '../components/NavbarInitial';

export default function PastLaunches() {
    const { pastLaunches } = useFetchApi();

    return (
        <div>
            <NavbarInitial />
            <section className="container-launches">
                <h2>Ver todos os lançamentos anteriores</h2>
                <div className="launches-list-all">
                    { pastLaunches.map((item, index) => (
                        <LaunchCard key={index} launch={item} />
                    ))}
                </div>
            </section>
        </div>
    )
}