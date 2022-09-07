import Item from "../Item/Item.js"

const ItemList = ({itemsList}) => {
    console.log(itemList)
    return (
       <>
       {
        itemList.map((producto) => {
            return <Item
            nombre={producto.name}
            description={producto.description}
            price={producto.price}
            image={producto.image}
            />
        })}
       </>  
    );

};

export default ItemList
