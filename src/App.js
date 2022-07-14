import "./App.css";
import Card from "./components/Card";
// import Hero from "./components/Hero";s
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  let cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        coverImg={item.coverImg}
        stats={item.stats}
        location={item.location}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
