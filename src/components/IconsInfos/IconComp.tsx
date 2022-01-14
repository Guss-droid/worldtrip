import { Flex, Icon, Text, useBreakpointValue } from '@chakra-ui/react'
import { ElementType } from 'react'

interface IIconComp {
  icon: ElementType;
  title: string;
}

export function IconComp({ icon, title }: IIconComp) {
  
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isWideVersion ?
        <Icon as={icon} color="yellow.500" fontSize="50" />
        :
        <Text color="yellow.500" fontSize="4xl" mr="2">•</Text>
      }
      <Text fontWeight="600" fontSize={["md", "xl", "2xl"]}>{title}</Text>
    </Flex>
  )
}