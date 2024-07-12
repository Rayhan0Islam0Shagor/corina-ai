import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/auth/(.*)', '/partials/(.*)', '/images/(.*)'],
  ignoredRoutes: ['chatbot'],
});

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
