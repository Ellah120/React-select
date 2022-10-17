import Shoe from "../Shoe";
import beems from "../../data";

function Shoes (){
  return(
    <>
    {beems.map((beem) => (
      <Shoe
      key={beem.id}
      brand={beem.brand}
      color={beem.color}
      price={beem.price}
      size={beem.price}
      quantity={beem.quantity}
      />
    ))}
    </>
  )
}

export default Shoes;