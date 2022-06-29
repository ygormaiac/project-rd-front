import React from 'react';
import useFetchApi from '../useFetchApi';
import NavbarInitial from '../components/NavbarInitial';
import LaunchCard from '../components/launchCard';

export default function NextLaunches() {
    const { nextLaunches } = useFetchApi();
    console.log(nextLaunches)

    return (
        <div>
            <NavbarInitial />
            <section className="container-launches">
                <h2>Ver o próximo lançamento</h2>
                <div className="launches-list-all">
                    <LaunchCard launch={nextLaunches} />
                </div>
            </section>
        </div>
    )
}