import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeft } from 'lucide-react-native'
import { ScrollView, TouchableOpacity } from 'react-native'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import BodySvg from '@assets/body.svg'
import RepetitionSvg from '@assets/repetitions.svg'
import SeriesSvg from '@assets/series.svg'

import { Button } from '@components/Button'

type RouteParamsProps = {
  exerciseId: string
}

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute()

  const { exerciseId } = route.params as RouteParamsProps

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray600" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          mb="$8"
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize="$lg"
            flexShrink={1}
          >
            Puxada frontal
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml="$1" textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack p="$8">
          <Image
            source={{
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbosshunting.com.au%2Fwp-content%2Fuploads%2F2022%2F09%2FLeg-Press.gif&f=1&nofb=1&ipt=6f2d1f0965cf68d8e5e9ad5f020183a543b322ed853bd133c079c55d77a7a577',
            }}
            alt="Exercício"
            mb="$3"
            resizeMode="cover"
            rounded="$lg"
            w="$full"
            h="$80"
          />

          <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb="$6"
              mt="$5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionSvg />
                <Text color="$gray200" ml="$2">
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
