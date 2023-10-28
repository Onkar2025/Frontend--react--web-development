import { useState } from "react";

import Navigation from "./navigation/nav";
import Product from "./products/product";
import Recomnded from "./recomnded/recomnded";
import Sidebar from "./sidebar/sidebar";
// databse
import product from "./db/data";
import Card from "./component/card";
function App() {

  const[selectedCategory,setSelectedCategory] = useState(null)
// input filter
  const[query , setQuery] = useState("")
  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

  const filtereditems = product.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );
// -----------------radio filters-------------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  // -----------------button filters-------------------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filtereddata(product, selected , query){
    let filteredProducts = product
    // filtering items 
    if(query){
      filteredProducts = filtereditems
    }
    //selected filter 
    if(selected ){
      filteredProducts = filteredProducts.filter(({Catogery,color,company , newprice, title}) => 
      Catogery === selected||
      color === selected||
      company === selected ||
      newprice === selected||
      title === selected);
    }
    return filteredProducts.map(({img , title ,star , review , newprice, prePrise }) => 
    <Card key = {Math.random()}
    img = { img}
    title = {title}
    star = {star}
    review = {review}
    newprice = {newprice}
    prePrise = {prePrise}
    />
    )
  }
  const result = filtereddata ( product , selectedCategory , query)
  return (
  <>
  <Sidebar handleChange = {handleChange}/>
  <Navigation query = {query} handleInputChange =  {handleChange}/>
  <Recomnded  handleClick ={handleClick} />
  <Product result = {result}/>
  </>
  );
}

export default App;
