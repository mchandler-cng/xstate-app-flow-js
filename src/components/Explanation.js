import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'tailwind.macro'
import {PageContainer} from './PageContainer'
import {Button} from './Button'
import {css} from 'emotion'

const ProcessDetail = styled('div')`
  transition: all 0.25s ease-in-out;

  ${tw`
    relative
    flex items-start 
    my-10 p-6
    bg-green-lightest hover:bg-green-lighter
    border-rounded
    shadow
  `}
`

const Number = styled('div')`
  ${tw`
    absolute
    text-center text-xl
    text-white
    bg-green
    shadow-md
  `}

  top: -10px;
  left: -10px;

  width: 40px;
  height: 40px;
  line-height: 40px;

  border-radius: 100%;
`

const Detail = styled('div')`
  ${tw`max-w-sm px-6 py-2 pb-4`};

  h3 {
    ${tw`mb-4 text-lg font-bold text-green-darker`}
  }

  p {
    ${tw`text-lg leading-normal`}
  }
`

const first = n => n.split(' ')[0]

export const Explanation = ({name, send}) => (
  <PageContainer>
    <h1>Nice to meet you, {first(name)}!</h1>

    <h2>Before we begin, let's go over the process.</h2>

    <div>
      <ProcessDetail>
        <Number>1</Number>
        <Detail>
          <h3>Provide some info</h3>

          <p>
            We need some information about you and your financial situation to
            figure out the best rates for you. We'll ask as few questions as
            possible, we promise.
          </p>
        </Detail>
      </ProcessDetail>

      <ProcessDetail>
        <Number>2</Number>
        <Detail>
          <h3>Verify your offer</h3>

          <p>
            Once you've picked your product and customized it to your liking,
            we'll need to verify a couple of documents and details with you.
          </p>
        </Detail>
      </ProcessDetail>

      <ProcessDetail>
        <Number>3</Number>
        <Detail>
          <h3>Get your money</h3>

          <p>
            Our quick and easy process means you get the money you need, when
            you need it.
          </p>
        </Detail>
      </ProcessDetail>
    </div>

    <div
      className={css(
        tw`flex justify-between pt-6 border-t border-solid border-grey-light`,
      )}
    >
      <Button type="link" onClick={() => send('BACK')}>
        Back
      </Button>
      <Button onClick={() => send('NEXT')}>Get started</Button>
    </div>
  </PageContainer>
)
