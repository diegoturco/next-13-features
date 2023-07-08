## Sample Next.js features

You can access the application [here](https://nextjs-13-diegoturco.vercel.app/products/10)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next.js

1. SSR: Server-Side Rendering
2. SSG: Static Site Generation
3. CSR: Client-side data fetching with SWR. Client-side data fetching is useful when your page doesn't require SEO indexing, when you don't need to pre-render your data, or when the content of your pages needs to update frequently

## Next.js 13

- Server-side first
- Revalidate = 30 per page or request
- Partial hydration (when you need the browser API and javascript interactions/events)
- Request Waterfall
- ReactSuspense for loading components
- Streaming allows you to incrementally render parts of your UI to the client
- Default cache for server-side like react-query. use `route.refresh` to invalidate the cache
- Prefetching
- Use `'user client'` to make client pages in the next.js 13. You can use partial client-side on the same page as well.    

## References
- https://nextjs.org/docs/advanced-features/react-18/streaming

