import Head from 'next/head'
import { Flex, Grid, Heading } from '@chakra-ui/react'

import { BannerCountry } from '../../components/Countries/BannerCountry'
import { Content } from '../../components/Countries/Content'
import { Card } from '../../components/Countries/Card'

export default function ContinentEurope() {
  return (
    <>
      <Head>
        <title>Europa | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <BannerCountry image="/images/bkEurope.svg" continent="Europa" />

        <Flex direction="column" maxw="1160px" mx="auto" mb="10" px="16">

          <Content
            desc="A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
            mostVisited="Portugal, Espanha, Suíça, Alemanha, Islândia,entre outros..."
            citiesPopular={22}
            numberCountries={50}
            numberLaguages={24}
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
              cityImg="/images/cardLondon.svg"
              city="Londres"
              country="Reino Unido"
              flagImg="/images/flagLondon.svg"
            />

            <Card
              cityImg="/images/cardParis.svg"
              city="Paris"
              country="França"
              flagImg="/images/flagParis.svg"
            />

            <Card
              cityImg="/images/cardItaly.svg"
              city="Roma"
              country="Itália"
              flagImg="/images/flagItaly.svg"
            />

            <Card
              cityImg="/images/cardPraga.svg"
              city="Praga"
              country="República Tcheca"
              flagImg="/images/flagPraga.svg"
            />

            <Card
              cityImg="/images/cardHolanda.svg"
              city="Amsterdã"
              country="Holanda"
              flagImg="/images/flagHolanda.svg"
            />
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}