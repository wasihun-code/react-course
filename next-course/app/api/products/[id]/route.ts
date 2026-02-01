import {NextResponse, NextRequest} from 'next/server';

interface ContextType {
    params: { id: string}
}

export async function DELETE(_req: NextRequest, context: ContextType) : Promise<NextResponse> {
    const id = context.params.id;

    console.log("Deleting item with id", id);

    return NextResponse.json({
        message: `Product ${id} deleted`
    })
}