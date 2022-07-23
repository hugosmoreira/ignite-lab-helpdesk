import { VStack } from 'native-base';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
type Props = {}

const Register = (props: Props) => {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >
        <Header title="Register" />
    </VStack>
  )
}

export default Register