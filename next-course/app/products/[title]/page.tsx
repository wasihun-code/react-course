import React from "react";
import GalleryPage from "../../gallery/page";
import { Metadata } from "next";

import dynamic from "next/dynamic";

const BuyButton = dynamic(() => import("./buy-button"), {
    loading: () => <p>Loading Buy Button...</p>,
    ssr: 'false'
});

interface DataProp {
    price: number,
    name: string
}

const getData = (id: string) => new Promise<DataProp>((resolve, _reject) => {
    setTimeout(() => {
        resolve({price: 100, name: "Monitor x"});
    }, 1000)
})

interface PageProps {
    params: {
        title: string
    }
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const data: DataProp  = await getData(params.title);
    console.log(data);
    return {
        title: data.name,
        description: "Product details page"
    }
}
    

export default async function Page({params}: PageProps): Promise<React.JSX.Element> {
    const data: DataProp  = await getData(params.title);

    return (
        <div>
            <h1>Name: {data.name}</h1>
            <p>Price: {data.price}</p>
            <BuyButton price={data.price}/>
            <GalleryPage />
        </div>
    )
}