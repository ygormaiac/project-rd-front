import React from 'react';
import useFetchApi from '../useFetchApi';
import NavbarInitial from '../components/NavbarInitial';
import LaunchCard from '../components/launchCard';
import Loading from '../components/Loading';

export default function AllLaunches() {
    const { launchesAll } = useFetchApi();

    return (
        <div>
            <NavbarInitial />
            <section className="container-launches">
                <h2>Ver todos os lançamentos</h2>
                <div className="launches-list-all">
                    { launchesAll ? launchesAll.map((item, index) => (
                        <LaunchCard key={index} launch={item} />
                    )) : <Loading /> }
                </div>
            </section>
        </div>
    )
}