import Input from "../../component/input";
import "./catogery.css"
function catogery({handleChange}) {
  return <>
  <div><h2 className="sidebar-title">Catogory</h2></div>
  <div className="sidebar-items">
  <label  className="sidebar-label-container">
    <input onChange={handleChange} type="radio"  value= "" name="test"/>
  <span className="checkmark"></span>
  </label>
  <Input handleChange={handleChange} 
  value="sneakers"
  title = "sneakers" 
  name ="test"
  />
  <Input handleChange={handleChange} 
  value="flats"
  title = "Flats" 
  name ="test"
  />
  <Input handleChange={handleChange} 
  value="sandle"
  title = "sandle" 
  name ="test"
  />
  <Input handleChange={handleChange} 
  value="heals"
  title = "heals" 
  name ="test"
  />
  </div>
  </>
}

export default catogery;