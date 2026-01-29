"use server"


export default async function addToCart(
    price: number
){
    console.log("Server: Added item, price: ", price);
    return true;
}

