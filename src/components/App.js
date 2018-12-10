import React from 'react'
import {AccountSetup} from './AccountSetup'
import {css, cx} from 'emotion'
import tw from 'tailwind.macro'
import './App.css'

const app = css(tw`w-screen h-screen flex items-center justify-center p-12`)

const content = css(tw`bg-white p-12 shadow-lg text-green-darkest`)

export const App = () => (
  <div className={cx(app, 'bg')}>
    <div>
      <div className={content}>
        <AccountSetup />
      </div>
    </div>
  </div>
)
