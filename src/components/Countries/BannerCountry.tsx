import { Flex, Heading } from "@chakra-ui/react";

export function BannerCountry() {
  return(
    <Flex
      w="100%"
      h={["150", "500"]}
      px={["0", "36"]}
      pt={["0", "72"]}
      bgImage="/images/bkEurope.svg"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      align="center"
      justify="flex-start"
    >
      <Heading fontWeight="600" color="light.900">
        Europa
      </Heading>
    </Flex>
  )
}