import BuyButton from "./buy-button";


interface DataProp {
    price: number,
    name: string
}

const getData = (id: string) => new Promise<DataProp>((resolve, _reject) => {
    setTimeout(() => {
        resolve({price: 100, name: "Monitor x"});
    }, 1000)
})
    

export default async function Page() {
    const data: DataProp  = await getData("monitor x");
    console.log(data);

    return <div>
        <h1>Name: {data.name}</h1>
        <p>Price: {data.price}</p>

        <BuyButton price={data.price}/>
    </div>
}