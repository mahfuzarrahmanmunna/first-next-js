import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyUserData = {
        role: "admin",
        email: "test@admin.com"
    }
    const isServicesPage = request.nextUrl.pathname.startsWith("/services");
    const isAdmin = dummyUserData.role === 'admin a';
    if (isServicesPage & !isAdmin) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    console.log(isServicesPage);
    return NextResponse.next()
}
