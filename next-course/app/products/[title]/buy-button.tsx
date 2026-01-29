'use client'

import addToCart from "@/app/actions"

interface Props {
    price: number
}

export default function BuyButton(props: Props) {
    return (
        <button className="p-2 m-2 b-2 rounded"
        onClick={
            () => {
                alert(`Buying for ${props.price}`)
                addToCart(props.price);
            }
        }>
            Buy Button
        </button>
    )
}