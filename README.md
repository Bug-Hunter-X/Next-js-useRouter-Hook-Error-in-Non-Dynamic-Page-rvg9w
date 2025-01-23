## Next.js useRouter Hook Error in Non-Dynamic Pages

This repository demonstrates a common error encountered when using the `useRouter` hook in Next.js applications.  The `useRouter` hook is designed to work within pages that utilize dynamic routing.  If you attempt to use it in a statically rendered page, you will encounter an error.

The `bug.js` file showcases the problem.  The `about.js` page attempts to use `useRouter` in a non-dynamic context resulting in an error. The `bugSolution.js` file demonstrates a possible solution.