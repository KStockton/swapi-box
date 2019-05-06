import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss'
const shortid = require('shortid')

const Container = ({category, topic}) => {
  let cards = category.map(item =>{
   return <Card {...item} key={shortid.generate()} topic={topic}/>
  })
  
  return (
    <section className="CardContainer-wrapper">
    <h1>{topic}</h1>
       {cards}
    </section>
  )
}

export default Container