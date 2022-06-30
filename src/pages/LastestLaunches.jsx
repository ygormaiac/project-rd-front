import React from 'react';
import useFetchApi from '../useFetchApi';
import LaunchCard from '../components/launchCard';
import NavbarInitial from '../components/NavbarInitial';
import Loading from '../components/Loading';

export default function LastestLaunches() {
    const { lastestLaunches } = useFetchApi();

    return (
        <div>
            <NavbarInitial />
            <section className="container-launches">
                <h2>Ver o lançamento anterior</h2>
                <div className="launches-list-next-last">
                    { lastestLaunches ? <LaunchCard launch={lastestLaunches} /> : <Loading />}
                </div>
            </section>
        </div>
    )
}