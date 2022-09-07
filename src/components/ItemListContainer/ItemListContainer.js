import data from "MockData.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js"

const ItemListContainer = ({greeting}) => {
    const [ items, setItems ] = useState ([]);

    const getData = New Promise((resolve, reject) =>(){
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });


    useEffect{() => {
      getData.then((result) => {
        setItems(result);
        console.log(result)
      })
    }, []};


    return (
    <>
    <ItemList itemsList={items} />
    </>
    );
};

export default ItemListContainer