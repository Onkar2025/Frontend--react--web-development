export function button({onClickHandler , value , title}) {
    return(
    <button onClick={onClickHandler} value={value} className="btns">{title}</button>
    );
  }
  export default button
  