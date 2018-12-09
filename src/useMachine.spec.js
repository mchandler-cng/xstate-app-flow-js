import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {Machine} from 'xstate'
import {useMachine} from './useMachine'

test('provides the current state of a machine and a mechanism for updating state', () => {
  const machine = Machine({
    initial: 'initial',
    context: {},
    states: {
      initial: {on: {NEXT: 'next'}},
      next: {},
    },
  })

  const TestComponent = () => {
    const [state, send] = useMachine(machine)

    return (
      <div>
        <div>state: {state.value}</div>
        <button onClick={() => send('NEXT')}>button</button>
      </div>
    )
  }

  const {getByText} = render(<TestComponent />)

  expect(getByText(/state/)).toHaveTextContent('initial')

  fireEvent.click(getByText('button'))

  expect(getByText(/state/)).toHaveTextContent('next')
})
