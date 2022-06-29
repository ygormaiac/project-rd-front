import React from 'react';
import useFetchApi from '../useFetchApi';
import LaunchCard from '../components/launchCard';
import NavbarInitial from '../components/NavbarInitial';

export default function LastestLaunches() {
    const { lastestLaunches } = useFetchApi();

    return (
        <div>
            <NavbarInitial />
            <section className="container-launches">
                <h2>Ver o lançamento anterior</h2>
                <div className="launches-list-all">
                    { <LaunchCard launch={lastestLaunches} /> }
                </div>
            </section>
        </div>
    )
}