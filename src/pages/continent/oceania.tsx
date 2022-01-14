import Head from 'next/head'
import { Flex, Grid, Heading } from '@chakra-ui/react'

import { BannerCountry } from '../../components/Countries/BannerCountry'
import { Content } from '../../components/Countries/Content'
import { Card } from '../../components/Countries/Card'

export default function ContinentOcean() {
  return (
    <>
      <Head>
        <title>Oceania | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <BannerCountry image="/images/bkOceania.jpg" continent="Oceania" />

        <Flex direction="column" maxw="1160px" mx="auto" mb="10" px="16">

          <Content
            desc="A Oceania é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia), a Oceania é bastante conhecido pelos seus enormes grupos de corais."
            citiesPopular={3}
            numberLaguages={8}
            numberCountries={14}
            mostVisited="Nauru, Kiribati, Tuvalu, entre outros..."
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
              cityImg="/images/cardSydney.jpg"
              city="Sidney"
              country="Austrália"
              flagImg="/images/flagSydney.png"
            />

            <Card
              cityImg="/images/cardNew.jpg"
              city="Wellington"
              country="Nova Zelândia"
              flagImg="/images/flagNew.png"
            />

            <Card
              cityImg="/images/cardSamoa.jpg"
              city="Apia"
              country="Samoa"
              flagImg="/images/flagSamoa.png"
            />

          </Grid>
        </Flex>
      </Flex>
    </>
  )
}