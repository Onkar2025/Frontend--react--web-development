import Button from "../component/button"
import "./recomnded.css"
function recomnded({handleClick}) {
  return <>
  <div>
    <h2 className="recommended-title">Recommended</h2>
    <div className="recommended-flex">
      <Button onClickHandler={handleClick} value="" title="All products" />
      <Button onClickHandler={handleClick} value="Nike" title="Nike" />
      <Button onClickHandler={handleClick} value="addidas" title="addidas" />
      <Button onClickHandler={handleClick} value="pumma" title="pumma" />
      <Button onClickHandler={handleClick} value="vans" title="vans" />
    </div>
  </div>
</>
}

export default recomnded;