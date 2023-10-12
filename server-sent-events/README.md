- Communication from server to client over HTTP.
- The content-type is binary stream(chunk encoding). The exact header value is `text/event-stream`.
- You should not end the request. SSE in browser has a mechanism to retry the connection when you end the request from server. So try ending the request and see in browser console, it keeps retrying. Instead don't end the request and see the streaming of data.
- You can only open maximum 6 SSE connections per domain.
- Like WS, SSE is difficult to scale horizontally as well.

- Use cases: Any use cases where client needs to just listen or show the data, SSE is suitable.
  - Live feed,
  - Client Logging of data,
  - To show progress of something that server is processing, etc.
