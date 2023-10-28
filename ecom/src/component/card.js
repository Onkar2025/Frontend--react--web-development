
import {BsFillBagHeartFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'; // Assuming you're using the 'react-icons' librar

function card({img , title ,star , review , newprice, prePrise }) {
  return (
  <section className="card">
    <img src= {img} alt={title} className='card-img' />
    <div className="card-details">
      <h3 className="card-title">{title}</h3></div>
      <section className="card-review"> 
      <div>
        <AiFillStar/>{star}{star}{star}{star}
        </div>
        
        <div className="total-review">{review} </div>
      </section>
      <section className="card-price">
        <div className="price"><del>{prePrise}</del>{newprice}</div>
        <div><BsFillBagHeartFill className='bag-icon'/></div>
      </section>
  </section>
  );
}
export default card;
