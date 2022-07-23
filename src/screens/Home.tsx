import React from 'react'
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import Logo from '../../assets/logo_secondary.svg'
import { SignOut } from 'phosphor-react-native';



type Props = {}

export default function Home({}: Props) {

    const { colors } = useTheme();


  return (
    <VStack flex={1} pb={6} bg="gray.700">
        <HStack w="full" justifyContent="space-between" alignItems="center" bg="gray.700" pt={12} pb={5} px={6}>


            <Logo />

            <IconButton
                icon={<SignOut size={26} color={colors.gray[300]} />}
            />




        </HStack>

    </VStack>
  )
}