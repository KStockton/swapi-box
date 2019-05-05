import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss'
const shortid = require('shortid')

const Container = ({category}) => {
  console.log(category)
  let cards = category.map(item =>{
   return <Card {...item} key={shortid.generate()}/>
  })
  return (
    <section className="CardContainer-wrapper">
       {cards}
    </section>
  )
}

export default Container