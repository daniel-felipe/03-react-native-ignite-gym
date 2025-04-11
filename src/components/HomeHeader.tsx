import { HStack, Heading, Text, VStack, Icon } from '@gluestack-ui/themed'
import { LogOut } from 'lucide-react-native'

import { UserPhoto } from './UserPhoto'

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" gap="$4" alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/daniel-felipe.png' }}
        w="$16"
        h="$16"
        alt="Imagem do usuário"
      />

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Daniel Felipe
        </Heading>
      </VStack>

      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  )
}
