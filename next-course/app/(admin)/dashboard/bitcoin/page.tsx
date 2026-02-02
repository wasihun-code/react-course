'use client';

import useSWR from "swr";

const fetcher = (
    url: string
) => fetch(url, { cache: 'no-store' }).then((res) => res.json());

export default function BitcoinPage() : React.JSX.Element {
    const url = process.env.NEXT_PUBLIC_BITCOIN_API_LINK;

    const { isLoading, data, error } = useSWR(url, fetcher);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    console.log("Bitcoin Data:", data);
    return (
        <div className="p-4 border rounded shadow">
            <h1 className="text-xl font-bold">Bitcoin Price Index</h1>
            <p>URL: {data?.bpi?.USD?.rate}</p>
            <p>Domain: {data?.bpi?.USD?.description}</p>
        </div>
    )
}