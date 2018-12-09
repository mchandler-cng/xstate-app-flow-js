import {useEffect, useMemo, useState} from 'react'
import {StateMachine} from 'xstate'
import {interpret} from 'xstate/lib/interpreter'

export function useMachine(machine: StateMachine, options = {}) {
  const [current, setCurrent] = useState(machine.initialState)
  const service = useMemo(
    () =>
      interpret(machine)
        .onTransition(state => {
          options.log && console.log('CONTEXT:', state.context)
          setCurrent(state)
        })
        .onEvent(e => {
          options.log && console.log('EVENT:', e)
        })
        .start(),
    [],
  )

  useEffect(() => {
    return () => service.stop()
  }, [])

  return [current, service.send]
}
