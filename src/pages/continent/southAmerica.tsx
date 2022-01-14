import Head from 'next/head'
import { Flex, Grid, Heading } from '@chakra-ui/react'

import { BannerCountry } from '../../components/Countries/BannerCountry'
import { Content } from '../../components/Countries/Content'
import { Card } from '../../components/Countries/Card'

export default function ContinentCentral() {
  return (
    <>
      <Head>
        <title>América do sul | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <BannerCountry image="/images/bkSouth.jpg" continent="América do sul" />

        <Flex direction="column" maxw="1160px" mx="auto" mb="10" px="16">

          <Content
            desc="A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano, Embora seja por vezes confundida com a América Latina, a América do Sul costuma ser definida a partir de critérios geográficos, enquanto que a América Latina tende a ser constituída por elementos de ordem cultural."
            mostVisited="Bolívia, Paraguai, Uruguai, entre outros..."
            citiesPopular={12}
            numberCountries={13}
            numberLaguages={5}
          />

          <Heading fontSize={["2xl", "4xl"]} mb="10">
            Cidades +100
          </Heading>

          <Grid
            templateColumns={["1fr", "1fr 1fr", "repeat(4, 1fr)"]}
            gap={["20px", "45px"]}
            alignItems="center"
            justifyContent="center"
            px={["30px", "0"]}
          >

            <Card
              cityImg="/images/cardRio.jpg"
              city="Rio de janeiro"
              country="Brasil"
              flagImg="/images/flagBrazil.png"
            />

            <Card
              cityImg="/images/cardSantiago.jpg"
              city="Santiago"
              country="Chile"
              flagImg="/images/flagChile.png"
            />

            <Card
              cityImg="/images/cardArg.jpg"
              city="Buenos Aires"
              country="Argentina"
              flagImg="/images/flagArgentina.png"
            />

            <Card
              cityImg="/images/cardNoronha.jpg"
              city="Noronha"
              country="Brasil"
              flagImg="/images/flagBrazil.png"
            />

          </Grid>
        </Flex>
      </Flex>
    </>
  )
}