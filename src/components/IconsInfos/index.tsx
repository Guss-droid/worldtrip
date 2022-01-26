import { Grid, GridItem } from '@chakra-ui/react'

import { IconComp } from './IconComp'

import { BiDrink, BiWorld } from 'react-icons/bi'
import { FaLandmark, FaUmbrellaBeach } from 'react-icons/fa'
import { GiModernCity } from 'react-icons/gi'

export function Icon() {

  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      width="100%"
      justifyContent="space-between"
      align="center"
      mt="10"
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <IconComp icon={BiDrink} title="Vida noturna" />
      </GridItem>
      <GridItem>
        <IconComp icon={FaUmbrellaBeach} title="Praia" />
      </GridItem>
      <GridItem>
        <IconComp icon={GiModernCity} title="Moderno" />
      </GridItem>
      <GridItem>
        <IconComp icon={FaLandmark} title="Clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 1]}>
        <IconComp icon={BiWorld} title="E mais..." />
      </GridItem>
    </Grid>
  )
}