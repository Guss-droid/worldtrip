import Head from 'next/head'
import { Flex, Grid, Heading } from '@chakra-ui/react'

import { BannerCountry } from '../../components/Countries/BannerCountry'
import { Content } from '../../components/Countries/Content'
import { Card } from '../../components/Countries/Card'

export default function ContinentAfrican() {
  return (
    <>
      <Head>
        <title>África | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <BannerCountry image="/images/bkAfrican.jpg" continent="África" />

        <Flex direction="column" maxw="1160px" mx="auto" mb="10" px="16">

          <Content
            desc="A África é um continente localizado na zona intertropical, com maior parte do seu território no Hemisfério Sul, a África é o terceiro maior continente do mundo e um dos mais populosos, tem o segundo maior Rio do mundo, o Rio Nilo."
            citiesPopular={15}
            numberLaguages={18}
            numberCountries={54}
            mostVisited="África do sul, Madagascar, Sudão, Quênia, entre outros..."
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
              cityImg="/images/cardEgipt.jpg"
              city="Cairo"
              country="Egito"
              flagImg="/images/flagEgipt.png"
            />

            <Card
              cityImg="/images/cardMorrocos.jpg"
              city="Rabat"
              country="Marrocos"
              flagImg="/images/flagMorrocos.png"
            />

            <Card
              cityImg="/images/cardMoca.jpg"
              city="Maputo"
              country="Moçambique"
              flagImg="/images/flagMoca.png"
            />

            <Card
              cityImg="/images/cardSenegal.jpg"
              city="Dacar"
              country="Senegal"
              flagImg="/images/flagSenegal.png"
            />

          </Grid>
        </Flex>
      </Flex>
    </>
  )
}