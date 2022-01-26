import Head from 'next/head'
import { Flex, Grid, Heading } from '@chakra-ui/react'

import { BannerCountry } from '../../components/Countries/BannerCountry'
import { Content } from '../../components/Countries/Content'
import { Card } from '../../components/Countries/Card'

export default function ContinentCentral() {
  return (
    <>
      <Head>
        <title>América Central | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <BannerCountry image="/images/bkCentral.jpg" continent="América Central" />

        <Flex direction="column" maxw="1160px" mx="auto" mb="10" px="16">

          <Content
            desc="A América Central é uma região da América limitado ao norte pela Península de Iucatã, no México e ao sul pela Colômbia, limitado a Oeste com o Oceano Pacífico e a Leste com o Oceano Atlântico, é um dos subcontinentes da América."
            mostVisited="Belize, Honduras, El Salvador, entre outros..."
            citiesPopular={5}
            numberCountries={7}
            numberLaguages={11}
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
              cityImg="/images/cardCaribe.jpg"
              city="Caribe"
              country="Caribe"
              flagImg="/images/flagCaribe.png"
            />

            <Card
              cityImg="/images/cardPanama.jpg"
              city="Panamá"
              country="Panamá"
              flagImg="/images/flagPanama.png"
            />

            <Card
              cityImg="/images/cardRica.jpg"
              city="San José"
              country="Costa Rica"
              flagImg="/images/flagRica.png"
            />

          </Grid>
        </Flex>
      </Flex>
    </>
  )
}