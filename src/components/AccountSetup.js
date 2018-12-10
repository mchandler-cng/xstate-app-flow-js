import React from 'react'
import {machine} from '../machines/account-setup'
import {useMachine} from '../useMachine'
import {Explanation} from './Explanation'
import {Introduction} from './Introduction'

const accountSetupMachine = machine.withConfig({})

export const AccountSetup = () => {
  const [state, send] = useMachine(accountSetupMachine)
  const {name} = state.context

  return (
    <div>
      {state.matches('introduction') && (
        <Introduction name={name} send={send} />
      )}
      {state.matches('explanation') && <Explanation name={name} send={send} />}
    </div>
  )
}
