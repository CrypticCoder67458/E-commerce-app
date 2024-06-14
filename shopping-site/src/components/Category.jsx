import React from 'react'
import '../styles/components.css'

export function Category ({category,currentCategory,setCurrentCategory}) {
  function handleClick(){
    setCurrentCategory(category.type)

  }
  return (
    <div className='white-box-effect  category'
    onClick={handleClick}
    >
        <img src={category.img}/>
        <h3>{category.type}</h3>
    </div>
  )
}
