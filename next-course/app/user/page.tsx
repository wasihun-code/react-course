import React from 'react';

interface User {
    id: number,
    uid: string,
    first_name: string,
    last_name: string
}
const link: string = process.env.API_LINK || '';

export default async function Page(): Promise<React.JSX.Element> {
    // const res = await fetch(link, {
    //     headers: {
    //         'X-Api-Key': process.env.X_API_KEY || ''
    //     },
    //     next: { revalidate: 10 },

    // });

    const userRequest1 = fetch(link, {
        cache: 'no-store', 
        headers: {
            'X-Api-Key': process.env.X_API_KEY || ''
        },
    });
    const userRequest2 = fetch(link, {
        cache: 'no-store', 
        headers: {
            'X-Api-Key': process.env.X_API_KEY || ''
        },
    });

    const [res1, res2] = await Promise.all([userRequest1, userRequest2])

    const [data1, data2]: [User[], User[]] = await Promise.all([res1.json(), res2.json()]);
    const user1 = data1[0];
    const user2 = data2[0];
    console.log("User 1:", user1);
    console.log("User 2:", user2);
    return (
        <div className="p-4 border rounded shadow">
            <h1 className="text-xl font-bold">Random User</h1>
            <p>ID: {user1.id}</p>
            <p>Name: {user1.first_name} {user1.last_name}</p>
            
            <hr className="my-4" />

            <p>ID: {user2.id}</p>
            <p>Name: {user2.first_name} {user2.last_name}</p>
        </div>
    )
}