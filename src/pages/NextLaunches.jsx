import React from 'react';
import useFetchApi from '../useFetchApi';
import NavbarInitial from '../components/NavbarInitial';
import LaunchCard from '../components/launchCard';
import Loading from '../components/Loading';

export default function NextLaunches() {
    const { nextLaunches } = useFetchApi();

    return (
        <div>
            <NavbarInitial />
            <section className="container-launches">
                <h2>Ver o próximo lançamento</h2>
                <div className="launches-list-next-last">
                    {nextLaunches ? <LaunchCard launch={nextLaunches} /> : <Loading />}
                </div>
            </section>
        </div>
    )
}