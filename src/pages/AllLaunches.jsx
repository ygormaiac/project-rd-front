import React from 'react';
import useFetchApi from '../useFetchApi';
import NavbarInitial from '../components/NavbarInitial';
import LaunchCard from '../components/launchCard';

export default function AllLaunches() {
    const { launchesAll } = useFetchApi();

    return (
        <div>
            <NavbarInitial />
            <section className="container-launches">
                <h2>Ver todos os lançamentos</h2>
                <div className="launches-list-all">
                    { launchesAll.map((item, index) => (
                        <LaunchCard key={index} launch={item} />
                    ))}
                </div>
            </section>
        </div>
    )
}