import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/v1/todos', function () {
    return HttpResponse.json([
      {
        id: '1',
        title: 'Mocked API',
        done: false,
      },
      {
        id: '2',
        title: 'Task Two',
        done: false,
      },
      {
        id: '3',
        title: 'Task Three',
        done: false,
      },
    ])
  }),
]
