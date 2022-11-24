import Loading from '@components/Loading/Loading';
import ProductList from '@components/ProductList/ProductList';
import Map from '@components/Map/Map';
import React, {useState, useEffect} from 'react';
import {Button} from 'semantic-ui-react'
//import fetch from 'node-fetch'

const Home = ({productList}) => {
    console.log(productList.length)

    return (
        <>
            <Map />
            <Button>Clic Here</Button>
        </>
    )
}

export const getServerSideProps = async () => {
    const resp = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const productList = await  resp.json();

    return {
        props: {productList}
    }
}

export default Home;
