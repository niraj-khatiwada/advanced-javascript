type Res<T> = {
  id: string
  cursor: string
  data: T[]
}

interface Data1 {
  name: string
}

interface Data2 {
  content: string
}

const data1: Res<Data1> = { id: '1', cursor: 'abc', data: [{ name: 'Niraj' }] }

const data2: Res<Data2> = {
  id: '1',
  cursor: 'abc',
  data: [{ content: 'Niraj' }],
}
