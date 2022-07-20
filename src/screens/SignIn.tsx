import  { View , Text } from 'react-native';
import { VStack, Heading } from 'native-base'
import * as React from 'react';

type Props = {}

function SignIn({}: Props) {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >
        <Heading color="gray.100" fontSize="xl" mt={20} mb={6} >
            Sign In
        </Heading>
    </VStack>
  )
}

export default SignIn