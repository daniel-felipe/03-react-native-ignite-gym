import { ScrollView, TouchableOpacity } from 'react-native'

import { Center, Text, VStack } from '@gluestack-ui/themed'

import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{ uri: 'https://github.com/daniel-felipe.png' }}
            alt="Foto do usuário"
            size="xl"
          />

          <TouchableOpacity>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Center w="$full" gap="$4">
            <Input placeholder="Nome" bg="$gray600" />
            <Input value="john@doe.com" bg="$gray600" isReadOnly />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  )
}
