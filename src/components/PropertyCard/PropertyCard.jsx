import PropTypes from "prop-types";
function PropertyCard({
    title,
    price,
    location,
    bedrooms,
    isFeatured,
    isAvailable,
    currency="ETB",
    image
}){
return(
 <div>
    
        {isFeatured && <span className="badge featured">Feature</span>}
        <img src={image} alt={title}/>
        <div className="property-info">
        <h3>{title}</h3>
        <span className={`status${isAvailable?"avaialble":"sold"}`}>{isAvailable ? "Available" :"Sold Out"}</span>
        <p className="price">
            {`currency === "ETB"? "ETB" :${currency}`}
            ${price.toLocaleString("en-ET", { style: "currency", currency: "ETB" })}</p>
        <p className="location">{location}</p>
        <span classname="beds">{bedrooms}Beds</span>
    </div>
 </div>
);
}

PropertyCard.PropTypes = {
    title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  isFeatured: PropTypes.bool,
  isAvailable: PropTypes.bool.isRequired,
  currency: PropTypes.string,
  image: PropTypes.string.isRequired,
};
export default PropertyCard;