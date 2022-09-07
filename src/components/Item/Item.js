
const Item = ({id, nombre, description, price, image, quantity}) => {
  return (
    <div>
        <h1>{nombre}</h1>
        <img src={image} alt={nombre}/>
        <p>{description}</p>
        <p>{price}</p>
        <p>{quantity}</p> 
    </div>
  );
};

export default Item