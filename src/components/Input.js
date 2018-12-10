import styled from '@emotion/styled/macro'
import tw from 'tailwind.macro'

export const Input = styled('input')`
  ${tw`
    px-2 py-4 mb-2
    text-lg
    bg-grey-lightest focus:bg-white
    border-b-2 border-solid 
    border-green-dark focus:border-orange 
    outline-none
  `}

  transition: all 0.25s ease-in-out;
`
