import styled from '@emotion/styled/macro'
import css from '@emotion/css/macro'
import tw from 'tailwind.macro'

export const Button = styled('button')`
  transition: all 0.25s ease-in-out;

  ${tw`
    p-4 
    rounded 
    shadow-md
  `}

  ${p =>
    p.type === 'primary' &&
    tw`
      text-white
      bg-orange-dark hover:bg-orange
    `}

  ${p =>
    p.type === 'link' &&
    css`
      text-underline-position: under;

      ${tw`
        p-0
        relative
        text-blue hover:text-blue-dark
        underline
        rounded-none
        shadow-none
      `}
    `}

  ${p =>
    p.disabled &&
    tw`
      text-grey-dark
      bg-grey-lighter
      border border-grey-light border-solid
      shadow-none
    `}
`
Button.defaultProps = {
  type: 'primary',
}
