import { Image, VStack } from '@gluestack-ui/themed'

import BackgroundImg from '@assets/background.png'

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        source={BackgroundImg}
        w="$full"
        h={624}
        defaultSource={BackgroundImg}
        position="absolute"
        alt="Pessoas treinando"
      />
    </VStack>
  )
}
