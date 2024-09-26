
import Card from './components/Card';
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Data from './Data';

function App() {

  const cards = Data.map(items=>{
    return (
      <Card
      img = {items.coverImg}
    rating={items.stats.rating}
    review={items.stats.reviewCount}
    country={items.location}
    title={items.title}
    price={items.price}
    />
    )
  })
 

  return (
    <div>
    <Navbar />
    <Hero />
    <section className= "card--list">
      {cards}
    </section>

   
    </div>
  );
}

export default App;
// id: 1,
//         title: "Life Lessons with Katie Zaferes",
//         description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
//         price: 136,
//         coverImg: "katie-zaferes.png",
//         stats: {
//             rating: 5.0,
//             reviewCount: 6
//         },
//         location: "Online",
//         openSpots: 0,