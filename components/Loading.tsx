import { Center, Spinner } from 'native-base'
import * as React from 'react';


type Props = {}

export function Loading(props: Props) {
  return (
    <Center flex={1} bg="gray.700">
        <Spinner color="secondary.700" />
    </Center>
  )
}

