function PropertyCard({title,price,location,bedrooms,image}){
return(
 <div>
    <img src={image} alt={title}/>
    <div>
        <h3>{title}</h3>
        <p className="price">${price.toLocaleString("en-ET", { style: "currency", currency: "ETB" })}</p>
        <p className="location">{location}</p>
        <span classname="beds">{bedrooms}Beds</span>
    </div>
 </div>
);
}
export default PropertyCard;