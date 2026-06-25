import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner />

            <section id="books">
                <Books data={data} />
            </section>
        </div>
    );
};

export default Home;