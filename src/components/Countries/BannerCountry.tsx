import { Flex, Heading } from "@chakra-ui/react";

interface IBanner {
  image: string;
  continent: string;
}

export function BannerCountry({ continent, image }: IBanner) {
  return (
    <Flex
      w="100%"
      h={["150", "500"]}
      px={["0", "36"]}
      pt={["0", "72"]}
      bgImage={image}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      align="center"
      justify="flex-start"
    >
      <Heading fontWeight="600" color="light.900">
        {continent}
      </Heading>
    </Flex>
  )
}