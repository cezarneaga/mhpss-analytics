import React from 'react'
import { Heading, Flex } from '@chakra-ui/react'

const Header = (props) => {
  return (
    <Flex as='nav' align='center' justify='space-between' wrap='wrap' padding='1.5rem' bg='brand.800' color='white' {...props}>
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
          MHPSS Analytics last 360 days
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Header
