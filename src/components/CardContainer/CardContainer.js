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
       {cards}
    </section>
  )
}

export default Container