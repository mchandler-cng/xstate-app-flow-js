import {Machine} from 'xstate'

export const config = {
  id: 'account-setup',
  context: {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    securityQuestion: null,
    securityAnswer: null,
    eligibilityNumber: null,
  },
  initial: 'introduction',
  states: {
    introduction: {on: {NEXT: 'name'}},
    name: {on: {NEXT: 'email'}},
    email: {on: {NEXT: 'security'}},
    security: {on: {NEXT: 'eligibility-number'}},
    'eligibility-number': {},
  },
}

export const machine = Machine(config)
