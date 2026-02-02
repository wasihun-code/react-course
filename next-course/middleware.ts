import { NextResponse, NextRequest} from 'next/server';


export function middleware(req: NextRequest) : Promise<NextResponse> | NextResponse {
    const token = req.cookies.get('auth_token');

    if (!token) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/user', req.url));
}

export const config = {
    matcher: ['/dashboard/:path*'],
}