import {machine} from './account-setup'
import {interpret} from 'xstate/lib/interpreter'

describe('transitions', () => {
  test('NEXT', () => {
    const testNext = (start, expected) => {
      expect(machine.transition(start, 'NEXT').value).toEqual(expected)
    }

    testNext('introduction', 'explanation')
    testNext('explanation', 'email')
    testNext('email', 'security')
    testNext('security', 'eligibility-number')
    testNext('eligibility-number', 'review')
  })

  test('BACK', () => {
    const testBack = (start, expected) => {
      expect(machine.transition(start, 'BACK').value).toEqual(expected)
    }

    testBack('review', 'eligibility-number')
    testBack('eligibility-number', 'security')
    testBack('security', 'email')
    testBack('email', 'explanation')
    testBack('explanation', 'introduction')
  })
})

describe('events', () => {
  test('NAME.CHANGE updates name in context', () => {
    const interpreter = interpret(machine).start()
    const name = 'Test Name'

    interpreter.send({type: 'NAME.CHANGE', value: name})

    expect(interpreter.state.context.name).toEqual(name)
  })

  test('EMAIL.CHANGE updates email in context', () => {
    const interpreter = interpret(machine).start()
    const email = 'test@testerson.com'

    interpreter.send({type: 'EMAIL.CHANGE', value: email})

    expect(interpreter.state.context.email).toEqual(email)
  })
})
