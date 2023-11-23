function getFullName(name: string, surname: string): string {
  return name + surname
}

console.log(typeof getFullName === 'function')

console.log(getFullName('Niraj', 'K'))
