import React from 'react'
import '../../Styles/home-page.css'


const categories=["Tv","Laptop","Mobile","Audio","Appliances"]
export const CategoriesBar = ({products,setProductsByCategory}) => {
  const[currentCategory,setCurrentCategory]=React.useState("")
  const[shouldFilter,setShouldFilter]=React.useState(false)
  React.useEffect(() => {
    if(shouldFilter){
        setProductsByCategory(products.filter(product => product.category.toLowerCase() === currentCategory))
  }else{
        setProductsByCategory(products)
  }
    }
    , [currentCategory,shouldFilter])

function handleClick(category){
  setCurrentCategory(category.toLowerCase())
  setShouldFilter(true)
}
return (
  <div className='categories-bar'>
      <h3 onClick={()=>setShouldFilter(false)}>Categories</h3>
      {categories.map((category)=><p
      onClick={() => {handleClick(category)}}>{category}</p>)}
  </div>
)
}

