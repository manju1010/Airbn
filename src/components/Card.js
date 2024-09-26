

import star from "../images/star.jpeg";
function Card(props) {
    console.log(props);
    return (
        <section >
        <div className="card">
            
          <img src={require(`../images/${props.img}`)} 
          alt="grid"
          className="card-1"
          >
          </img>
          <div className="card--stats">
          <img src={star} alt="star" className="card--star" />
          <span>{props.rating}</span>
          <span className="grey">{props.review} -</span>
          <span className ="grey">{props.country}</span>
          <p>{props.title}        </p>
          <p><span className="bold">From ${props.price}</span>/ person          </p>
          </div>

          

          
        </div>
        </section>
    )
}

export default Card;