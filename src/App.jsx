import Header from "./components/Header/Header";
import PropertyCard from "./components/PropertyCard/PropertyCard";

//Sample Data
const propertiesData = [
  {
    id: 1,
    title: "Modern Suburban House",
    price: 450000,
    location: "Austin, TX",
    bedrooms: 4,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    title: "Downtown Luxury Condo",
    price: 720000,
    location: "Seattle, WA",
    bedrooms: 2,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 3,
    title: "Cozy Country Cottage",
    price: 280000,
    location: "Denver, CO",
    bedrooms: 3,
    image: "https://via.placeholder.com/300x200"
  }
];

function App(){
    return(
     <div>
        <Header/>
        <main>
            {propertiesData.map((property)=>(
               <PropertyCard
               key={property.id}
               title={property.title}
               price={property.price}
               location={property.location}
               bedrooms={property.bedrooms}
               image={property.image}
               /> 
            ))}
        </main>
     </div>
    );
}

export default App;