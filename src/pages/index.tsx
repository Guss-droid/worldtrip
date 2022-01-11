import Head from 'next/head'
import { Flex, Heading, Divider as Separator, Box } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Icon } from '../components/IconsInfos'
import { Divider } from '../components/Divider'
import { Swipper } from '../components/SwipperUi'

export default function Home() {
  return (
    <>

      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <Header />
        <Banner />
        <Icon />

        <Divider />

        <Box mx="auto" align="center">
          <Heading lineHeight="10" size="lg" fontWeight="600">
            Vamos nessa?
            <Separator as="br" />
            Então escolha seu continente
          </Heading>
        </Box>

        <Swipper />
      </Flex>
    </>
  )
}
