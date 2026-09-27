import PropTypes from "prop-types"
function Card ({children}){
    return <div className="card-wrapper">{children}</div>;
}
Card.PropTypes = {
    children:PropTypes.node.isRequired,
};
export default Card;