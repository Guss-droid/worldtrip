import { Button, Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineLeft } from 'react-icons/ai'

export function Header() {

  const router = useRouter()

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      m="2"
      w="100%"
      mx="auto"
      px="4"
      h="12"
    >

      <Grid
        h="100%"
        w="100%"
        mx="auto"
        maxW="1168px"
        align="center"
        justify="center"
        templateColumns="repeat(3, 1fr)"
      >
        {router.asPath === '/' ? <></>
          :
          <Link
            href="/"
            passHref
          >
             <Icon
              as={AiOutlineLeft}
              fontSize="20"
              cursor="pointer"
              mt="3"
              justifySelf="start"
            />
          </Link>
        }
        <Image src='/images/logo.svg' alt="Logo" justifySelf="center" gridColumn="2" />
      </Grid>
    </Flex>
  )
}