import React from 'react'
import {css} from 'emotion'
import tw from 'tailwind.macro'
import {PageContainer} from './PageContainer'
import {Input} from './Input'
import {Button} from './Button'
import {useKeyboardEvent} from '../useKeyboardEvent'

const hasFirstAndLast = name => name && name.trim().split(' ').length === 2

export const Introduction = ({name, send}) => {
  useKeyboardEvent('Enter', () => send('NEXT'))

  return (
    <PageContainer>
      <h1>Hey there! Let's make a quick introduction!</h1>

      <h2 id="introductions">What's your name?</h2>

      <div className={css(tw`mb-10`)}>
        <Input
          className={css(tw`w-64 mb-2`)}
          aria-describedby="introductions"
          type="text"
          onChange={e => send({type: 'NAME.CHANGE', value: e.target.value})}
        />

        <p className={css(tw`italic`)}>First and last, please.</p>
      </div>

      <div className={css(tw`flex flex-col`)}>
        <Button
          className={css(tw`self-end`)}
          disabled={!hasFirstAndLast(name)}
          onClick={() => send('NEXT')}
        >
          Continue
        </Button>
      </div>
    </PageContainer>
  )
}
