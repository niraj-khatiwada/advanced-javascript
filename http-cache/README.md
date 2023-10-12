Cache-Control Directives:

- no-store: No cache store, delete if there is existing copies as well.
- no-cache: Do not cache until you validate with server.
- must-revalidate: If the resource is already stale, do not serve it. Revalidate with server first. If a resource is fresh, `must-revalidate` perfectly allows a cache to serve it without forcing any revalidation. That's why we must use this directive with `max-age: X`

```
  no-store: never store anything
  no-cache: revalidate with server first. never hit cache first
  must-revalidate: never serve stale resource
```

- max-age: number -> Cache and server same response for the next X seconds.

- public: distribute the cache among clients.
- private: default one. Make this cache specific to the browsing client.
