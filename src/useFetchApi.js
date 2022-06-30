import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useFetchApi() {
    const [launchesAll, setLaunchesAll] = useState([]);
    const [lastestLaunches, setLastestLaunches] = useState();
    const [nextLaunches, setNextLaunches] = useState();
    const [upComingLaunches, setUpComingLaunches] = useState([]);
    const [pastLaunches, setPastLaunches] = useState([]);

    useEffect(() => {
        function allLaunches() {
            axios.get('https://project-rd-api.herokuapp.com/launches')
            .then((response) => setLaunchesAll(response.data))
            .catch((err) => console.error('Ocorreu o seguinte erro:' + err));
        }
        allLaunches();

        function launchesLastest() {
            axios.get('https://project-rd-api.herokuapp.com/launches/lastest')
            .then((response) => setLastestLaunches(response.data))
            .catch((err) => console.error('Ocorreu o seguinte erro:' + err));
        }
        launchesLastest();

        function launchesNext() {
            axios.get('https://project-rd-api.herokuapp.com/launches/next')
            .then((response) => setNextLaunches(response.data))
            .catch((err) => console.error('Ocorreu o seguinte erro:' + err));
        }
        launchesNext();

        function launchesUpComing() {
            axios.get('https://project-rd-api.herokuapp.com/launches/upcoming')
            .then((response) => setUpComingLaunches(response.data))
            .catch((err) => console.error('Ocorreu o seguinte erro:' + err));
        }
        launchesUpComing();

        function launchesPast() {
            axios.get('https://project-rd-api.herokuapp.com/launches/past')
            .then((response) => setPastLaunches(response.data))
            .catch((err) => console.error('Ocorreu o seguinte erro:' + err));
        }
        launchesPast();
    }, []);

    return {
        launchesAll,
        setLaunchesAll,
        lastestLaunches,
        setLastestLaunches,
        nextLaunches,
        setNextLaunches,
        upComingLaunches,
        setUpComingLaunches,
        pastLaunches,
        setPastLaunches
    }
}