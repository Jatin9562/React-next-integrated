import React, { Component } from 'react'
import Card from './CardComponent'
import axios from 'axios';
import {createClient} from 'contentful'



export default function Template({cards}) {
    console.log(cards)
 
    
    

        return (
            

            <div className="grid-main">               
                    {
                        cards.map(card => {
                            return <Card key={card.sys.id} cardClass={card.fields.cardClass} cardText={card.fields.class} cardColor={card.fields.color} />
                        })
                    }
             
            </div>
        )
    }



