- Avoid Context and Reducer API. Use tiny libraries like Valtio, Jotai, or Zustand to manage global states that has no side effects.
- Avoid using && and always use ternary. Do not use nested ternaries.
- Think whether each state you write have side effects on the children
- If you have a business logic independent of UI that you want to share in separate places, use render props pattern or children as a function pattern.
- Store sensitive info in the httpOnly cookie
- Encode your persistence state instead of storing plain readable strings in local storage
- If you have any computation that is synchronous and blocks main thread, opt in for web workers
- Implement client side caching
- Memoize components that should not be re-rendered on parent updates.
- Use portals to manage modals, toasts, cookie banner, etc.
- If you are using SPA like Vite or CRA, write a script to generate .html file for each page.
- Use brotli compression for faster resource downloads.
- Folder structure. Separate your components, ui, assets, pages, utilities, localizations, libs, services, api implementation, hooks, providers, reducers,routers, styles, etc.
- Setup error boundary. Provide helpful message if possible and add an option for retry when the exceptions occur.
- Do route level code splitting(lazy loading) first by default. Apply code splitting to the parts that is heavy that is only triggered on certain actions.
- Code split your packages as well so that if the page is not using that package, it will not be downloaded.
- Use TypeScript.
