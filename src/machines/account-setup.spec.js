import {machine} from './account-setup'

test('happy path', () => {
  const testNext = (start: string, expected: string) => {
    expect(machine.transition(start, 'NEXT').value).toEqual(expected)
  }

  testNext('introduction', 'name')
  testNext('name', 'email')
  testNext('email', 'security')
  testNext('security', 'eligibility-number')
})
