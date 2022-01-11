import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
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
        <Image src='/images/logo.svg' alt="Logo" justifySelf="center" gridColumn="2" />
      </Grid>
    </Flex>
  )
}