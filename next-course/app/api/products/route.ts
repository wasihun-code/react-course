import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) : Promise<NextResponse> {
    try {
        const body = await request.json();    
        const {name, price} = body;
        console.log("Creating product with ", name, "and", price);
        return NextResponse.json({result: "Product Created", name, price})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Product Creation Failed", status: 400});
    }
}
