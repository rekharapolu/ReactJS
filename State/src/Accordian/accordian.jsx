import React from 'react'
import AccordionParent from './accordianParent';

const accordian = () => {
  return (
    <div>
        <h1>accordian</h1>
        {
            AccordionParent.map(({heading,content})=>{
                return(
                    <AccordionParent heading={heading} content={content} />
                )
            })
        }
    </div>
  )
}

export default accordian
