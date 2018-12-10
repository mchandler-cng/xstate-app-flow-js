import {Machine, actions} from 'xstate'
const {assign} = actions

export const config = {
  id: 'account-setup',
  context: {
    name: null,
    email: null,
    password: null,
    securityQuestion: null,
    securityAnswer: null,
    eligibilityNumber: null,
  },
  initial: 'introduction',
  states: {
    introduction: {on: {NEXT: 'explanation'}},
    explanation: {on: {BACK: 'introduction', NEXT: 'email'}},
    email: {on: {BACK: 'explanation', NEXT: 'security'}},
    security: {on: {BACK: 'email', NEXT: 'eligibility-number'}},
    'eligibility-number': {on: {BACK: 'security', NEXT: 'review'}},
    review: {on: {BACK: 'eligibility-number'}},
  },
  on: {
    'NAME.CHANGE': {
      actions: assign({name: (_, {value}) => value}),
    },
    'EMAIL.CHANGE': {
      actions: assign({email: (_, {value}) => value}),
    },
  },
}

export const machine = Machine(config)
