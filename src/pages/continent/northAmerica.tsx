import Head from 'next/head'
import { Flex, Grid, Heading } from '@chakra-ui/react'

import { BannerCountry } from '../../components/Countries/BannerCountry'
import { Content } from '../../components/Countries/Content'
import { Card } from '../../components/Countries/Card'

export default function ContinentNorth() {
  return (
    <>
      <Head>
        <title>América do norte | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <BannerCountry image="/images/bkNorthAmerica.jpg" continent="América do norte" />

        <Flex direction="column" maxw="1160px" mx="auto" mb="10" px="16">

          <Content
            desc="A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América."
            mostVisited="Alaska, Groêlandia, Mexico,entre outros..."
            citiesPopular={17}
            numberCountries={3}
            numberLaguages={4}
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
              cityImg="/images/cardWash.jpg"
              city="Dakota do sul"
              country="Estados Unidos"
              flagImg="/images/flagEua.png"
            />

            <Card
              cityImg="/images/cardCanada.jpg"
              city="Ottawa"
              country="Canadá"
              flagImg="/images/flagCanada.png"
            />

            <Card
              cityImg="/images/cardWashington.jpg"
              city="Washington"
              country="Estados Unidos"
              flagImg="/images/flagEua.png"
            />

            <Card
              cityImg="/images/cardYork.jpg"
              city="Nova york"
              country="Estados Unidos"
              flagImg="/images/flagEua.png"
            />

            <Card
              cityImg="/images/cardCalifornia.jpg"
              city="Califórnia"
              country="Estados Unidos"
              flagImg="/images/flagEua.png"
            />
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}