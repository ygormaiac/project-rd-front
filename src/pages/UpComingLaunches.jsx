import React from 'react';
import useFetchApi from '../useFetchApi';
import LaunchCard from '../components/launchCard';
import NavbarInitial from '../components/NavbarInitial';
import Loading from '../components/Loading';

export default function UpComingLaunches() {
    const { upComingLaunches } = useFetchApi();

    return (
        <div>
            <NavbarInitial />
            <section className="container-launches">
                <h2>Ver todos os próximos lançamentos</h2>
                <div className="launches-list-all">
                    { upComingLaunches ? upComingLaunches.map((item, index) => (
                        <LaunchCard key={index} launch={item} />
                    )) : <Loading /> }
                </div>
            </section>
        </div>
    )
}