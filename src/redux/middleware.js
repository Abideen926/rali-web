import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const tokenCookie = req.cookies.get('token')?.value;
  const userVerified = req.cookies.get('isVerified')?.value;

  console.log('Token Cookie:', tokenCookie);
  console.log('User Verified:', userVerified);
  console.log('Pathname:', pathname);

  if (!tokenCookie && pathname !== '/applicant/login') {
    console.log('Redirecting to /applicant/login');
    return NextResponse.redirect(new URL('/applicant/login', req.url));
  }

  if (tokenCookie && userVerified !== 'true' && pathname !== '/form/emailVerification') {
    console.log('Redirecting to /form/emailVerification');
    return NextResponse.redirect(new URL('/form/emailVerification', req.url));
  }

  if (tokenCookie && userVerified === 'true' && pathname !== '/applicant/dashboard') {
    console.log('Redirecting to /applicant/dashboard');
    return NextResponse.redirect(new URL('/applicant/dashboard', req.url));
  }

  console.log('Proceeding to NextResponse.next()');
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|assets/images|favicon.ico).*)',
  ],
};




// import { NextResponse } from 'next/server';

// export function middleware(req) {
//   const { pathname } = req.nextUrl;

//   const tokenCookie = req.cookies.get('token')?.value;
//   const userVerified = req.cookies.get('verified')?.value;

//   // const dashboardRoutes = {
//   //   applicant: '/applicant/dashboard',
//   //   employeer: '/employeer/dashboard',
//   // };
  

//   if (!tokenCookie && pathname !== '/applicant/login') {
//     return NextResponse.redirect(new URL('/applicant/login', req.url));
//   }

//   if (tokenCookie) {
//     // Redirect to email verification page if the user is not verified
//     // if (!userVerified) {
//     //   return NextResponse.redirect(new URL('/form/emailVerification', req.url));
//     // }

//     // Redirect to the appropriate dashboard if the user is verified
//     // const redirectPath = dashboardRoutes[userVerified];
//     // if (redirectPath) {
//     //   return NextResponse.redirect(new URL(redirectPath, req.url));
//     // }

//     if (userVerified){
//       return NextResponse.redirect(new URL('/applicant/dashboard', req.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|assets/images|favicon.ico).*)',
//   ],
// };






































// import { NextResponse } from 'next/server';

// export function middleware(req) {
//   const { pathname } = req.nextUrl;

//   const tokenCookie = req.cookies.get('token')?.value;
//   const userVerified = req.cookies.get('verified')?.value;

//   const dashboardRoutes = {
//     applicant: '/applicant/dashboard',
//     employeer: '/employeer/dashboard',
//   };

//   if (!tokenCookie && pathname !== '/applicant/login') {
//     return NextResponse.redirect(new URL('/applicant/login', req.url));
//   }

//   if (tokenCookie && userVerified) {
//     const redirectPath = dashboardRoutes[userVerified];
//     if (redirectPath) {
//       return NextResponse.redirect(new URL('/applicant/dashboard', req.url));
//     }
//     if (redirectPath && !userVerified) {
//       return NextResponse.redirect(new URL('form/emailVerification', req.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|assets/images|favicon.ico).*)',
//   ],
// };


