import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

import { BannerCountry } from '../../components/Countries/BannerCountry'
import { Content } from '../../components/Countries/Content'
import { Card } from '../../components/Countries/Card'

export default function Continent() {
  return (
    <>
      <Head>
        <title>Europa | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <BannerCountry />

        <Flex direction="column" maxw="1160px" mx="auto" mb="10" px="16">
          <Content />
          <Card />
        </Flex>
      </Flex>
    </>
  )
}