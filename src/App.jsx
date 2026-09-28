import { useState } from "react";
import Header from "./components/Header/Header";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import Card from "./components/Card/Card";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import InquiryFrom from "./components/InquiryForm/InquiryForm";

//Sample Data
const propertiesData = [
  {
    id: 1,
    title: "Modern Suburban House",
    price: 450000,
    location: "Austin, TX",
    category: "House",
    bedrooms: 4,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    title: "Downtown Luxury Condo",
    price: 720000,
    location: "Seattle, WA",
    category: "House",
    bedrooms: 2,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 3,
    title: "Cozy Country Cottage",
    price: 280000,
    location: "Denver, CO",
    category: "Condo",
    bedrooms: 3,
    image: "https://via.placeholder.com/300x200"
  }
];
 const categoriesList =["All","House","Condo","Villa"]
function App(){
    const [selectedCategory,setSelectedCategory] = useState("All");
    const filteredProperties = selectedCategory === "All"? propertiesData : propertiesData.filter(
        (item) => item.category === selectedCategory
    );
    return(
     <div className="app-container">
        <Header/>
        <CategoryBar
         categories={categoriesList}
         selectedCategory={selectedCategory}
         onSelect={setSelectedCategory}
        />
        <h2>Showing:{selectedCategory}Properties</h2>
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
        <hr/>
        <InquiryFrom/>
     </div>
    );
}

export default App;