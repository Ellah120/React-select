import "./shoe.css";

function Shoe(props) {
  return(
    <div className="shoe">
      <h2>{props.brand}</h2>
      <h4>{props.color}</h4>
      <h3>{props.price}</h3>
      <h4>{props.size}</h4>
      <h5>{props.quantity}</h5>
    </div>
  )
}

export default Shoe;