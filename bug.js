```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because the import is not valid
  import { useRouter } from 'next/router';

  const router = useRouter();

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.push('/')}>Go back home</button>
    </div>
  );
}
```