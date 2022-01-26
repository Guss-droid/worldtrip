import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";

import { RiInformationLine } from 'react-icons/ri'

export function Infos() {
  return (
    <Flex align="center" justify="space-between">

      <Flex direction="column" justify="center" align={["flex-start", "center"]}>
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="600"
        >
          50
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]}>
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "center"]}>
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="600"
        >
          60
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]}>
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "center"]}>
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="600"
        >
          27
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]}>
          cidades +100

          <Popover>
            <PopoverTrigger>
              <Box as="span">
                <Icon
                  as={RiInformationLine}
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                  ml="1"
                  cursor="pointer"
                  color="dark.50"
                />
              </Box>
            </PopoverTrigger>

            <PopoverContent bg="dark.500" color="yellow.500">
              <PopoverArrow bg="dark.500" />
              <PopoverCloseButton />

              <PopoverBody fontWidth="400" fontSize="lg">
                Portugal, Espanha, Suíça, França, Reino Unido, Alemanha, Itália, entre outros...
              </PopoverBody>
            </PopoverContent>
          </Popover>

        </Text>
      </Flex>

    </Flex>
  )
}