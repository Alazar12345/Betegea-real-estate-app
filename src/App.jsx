import Header from "./components/Header/Header";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import Card from "./components/Card/Card";

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
    const selectedCategory = "House";
    const filteredProperties = propertiesData.filter(
        (item) => item.category === selectedCategory
    );
    return(
     <div className="app-container">
        <Header/>
        <h2>Showing:{selectedCategory}s</h2>
        {filteredProperties.length === 0 ?(
            <p className="no-results">No properties found in this category.</p>
        ):(
        <main className="property-list">
            {filteredProperties.map((property)=>(
               <Card key={property.id}>
                <PropertyCard {...property}/>
               </Card>
            ))}
        </main>
        )}
     </div>
    );
}

export default App;