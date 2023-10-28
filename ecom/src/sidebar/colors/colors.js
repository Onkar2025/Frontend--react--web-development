import "./colors.css";
import Input from "../../component/input";
function color({handleChange}) {
  return (
  <>
    <div className="ml">
       <h2 className="sidebar-title-peicetitle">Color</h2>    
     </div>
     <div className="sidebar-items">
      <label  className="sidebar-label-container">
        <input onChange={handleChange} type="radio"  value= "" name="test"/>
        <span className="checkmark all"></span>
      </label>
      <Input handleChange={handleChange} 
      value= "black"
      title = "Black" 
      name ="test1"
      />
      <Input handleChange={handleChange} 
      value= "blue"
      title = "Blue" 
      name ="test1"
      />
      <Input handleChange={handleChange} 
      value= "red"
      title = "Red" 
      name ="test1"
      />
      <Input handleChange={handleChange} 
      value= "green"
      title = "Green" 
      name ="test1"
      />
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name = "test1" />
        <span className="checkmark all" style={{background : "white" , border : "2px solid balck " }}></span>White
      </label>

    </div>
  </>
  );
}
export default color ;