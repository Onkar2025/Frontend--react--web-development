import "./sidebar.css";
import Category from "./catogery/catogery"
import Price from "./price/price"
import Color from "./colors/colors"
function sidebar(handleChange) {
  return <>
  <section className="sidebar">
    <div className="logo-container">
        <h1 className="sidebar-title">this is stiker 
        </h1>
    </div>
    <Category handleChange = {handleChange}/>
    <Color  handleChange= {handleChange}/>
    <Price handleChange = {handleChange}/>
  </section>
  </>
}
export default sidebar;