import { Flex, Stack } from '@chakra-ui/react'

import { IconComp } from './IconComp'

import { BiDrink, BiWorld } from 'react-icons/bi'
import { FaLandmark, FaUmbrellaBeach } from 'react-icons/fa'
import { GiModernCity } from 'react-icons/gi'

export function Icon() {
  return (
    <Flex mt="12" mx="auto">
      <Stack spacing="28" direction="row">
        <IconComp icon={BiDrink} title="Vida noturna" />
        <IconComp icon={FaUmbrellaBeach} title="Praia" />
        <IconComp icon={GiModernCity} title="Moderno" />
        <IconComp icon={FaLandmark} title="Clássico" />
        <IconComp icon={BiWorld} title="E mais..." />
      </Stack>
    </Flex>
  )
}