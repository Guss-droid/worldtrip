import Head from 'next/head'
import { Flex, Grid, Heading } from '@chakra-ui/react'

import { BannerCountry } from '../../components/Countries/BannerCountry'
import { Content } from '../../components/Countries/Content'
import { Card } from '../../components/Countries/Card'

export default function ContinentAsian() {
  return (
    <>
      <Head>
        <title>Ásia | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <BannerCountry image="/images/bkAsian.jpg" continent="Ásia" />

        <Flex direction="column" maxw="1160px" mx="auto" mb="10" px="16">

          <Content
            desc="A Ásia é o maior e mais populoso continente, abrigando as maiores nações (Rússia) e mais populosas (China), o termo geográfico “Ásia” foi originalmente usado pelos gregos antigos para descrever as civilizações a leste de seu império."
            citiesPopular={26}
            numberLaguages={43}
            numberCountries={50}
            mostVisited="Malásia, China, Turquia, Índia, entre outros..."
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
              cityImg="/images/cardIndonesian.jpg"
              city="Bali"
              country="Indonésia"
              flagImg="/images/flagIndonesian.png"
            />

            <Card
              cityImg="/images/cardJapan.jpg"
              city="Tóquio"
              country="Japão"
              flagImg="/images/flagJapan.png"
            />

            <Card
              cityImg="/images/cardThailand.jpg"
              city="Phuket"
              country="Tailândia"
              flagImg="/images/flagThailand.png"
            />

            <Card
              cityImg="/images/cardMaldives.jpg"
              city="Ilhas Maldivas"
              country="Maldivas"
              flagImg="/images/flagMaldives.png"
            />

            <Card
              cityImg="/images/cardDhabi.jpg"
              city="Abu Dhabi"
              country="Emirados Árabes"
              flagImg="/images/flagDhabi.png"
            />

            <Card
              cityImg="/images/cardRussian.jpg"
              city="Moscou"
              country="Rússia"
              flagImg="/images/flagRussian.png"
            />

          </Grid>
        </Flex>
      </Flex>
    </>
  )
}