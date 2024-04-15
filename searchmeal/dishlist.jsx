import React from 'react'
import Dish from './dish'
export default function dishlist({dish}) {
  return (
    <main>
    <section>
    {dish.results.map((dish)=>{
        return <Dish key={dish.id} meal={dish} /> ;
    })}
    </section>
    </main>
  )
}
