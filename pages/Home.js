import React, { Component } from 'react'
import Sidebar from '../component/Sidebar'
import Header from '../component/Header'
import Template from '../component/Template'
import { createClient } from 'contentful'

export async function getStaticProps() {

    const client = createClient({
        space: 'ij5ituuu43wj',
        accessToken: 'ZBupPq1bgXlXRMGcn9zGWOxrniFRGPLY_kEAusLlbUQ',
    })

    const res = await client.getEntries({ content_type: "card" });

    return {
        props: {
            cards: res.items,
        }
    }
}

export default function Home({ cards }) {
        // if(!localStorage.getItem('username')){
        //     return <Redirect to='/'/>
        // }


    return (

        <div className="Display container-fluid">
            <div >
                <Sidebar />
            </div>
            <div className="card-main">
                <Header />
                <br />
                <Template cards={cards} />
            </div>
        </div>
    )
}



