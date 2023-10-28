

function input({handleChange , value , title , name , color }) {
    return (
      <lable className="sidebar-label-container">
        <input onChange={handleChange} type= {value} name = {name} />
        <span className="checkmark" style={color}></span> {title}
      </lable>
    );
  }
  export default input;
  