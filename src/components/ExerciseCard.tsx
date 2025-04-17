import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Heading, Icon, Image, Text, VStack } from '@gluestack-ui/themed'
import { HStack } from '@gluestack-ui/themed'
import { ChevronRight } from 'lucide-react-native'

type Props = TouchableOpacityProps & {}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbosshunting.com.au%2Fwp-content%2Fuploads%2F2022%2F09%2FLeg-Press.gif&f=1&nofb=1&ipt=6f2d1f0965cf68d8e5e9ad5f020183a543b322ed853bd133c079c55d77a7a577',
          }}
          alt="imagem do exercício"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            Leg Press 45
          </Heading>

          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  )
}
