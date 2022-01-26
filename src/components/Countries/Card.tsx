import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface ICardContent {
  cityImg: string;
  flagImg: string;
  country: string;
  city: string;
}

export function Card({city, cityImg, country, flagImg}: ICardContent) {
  return (
    <Box borderRadius="4px" overflow="hidden" >
      <Image w="100%" src={cityImg} alt="Country" />

      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="light.900"
        border="1px"
        borderColor="yellow.50"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="600">{city}</Heading>
          <Text mt="3" fontSize="md" fontWeight="400">{country}</Text>
        </Flex>
        <Image
          w="30px"
          h="30px"
          borderRadius="50%"
          src={flagImg}
          alt="flag"
          border="1px"
          borderColor="gray.500"
        />
      </Flex>

    </Box>
  )
}