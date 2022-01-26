import { Box, Icon, Text } from '@chakra-ui/react'
import { ElementType } from 'react'

interface IIconComp {
  icon: ElementType;
  title: string;
}

export function IconComp({ icon, title }: IIconComp) {
  return (
      <Box align="center">
        <Icon color="yellow.500" as={icon} fontSize="50" />
        <Text fontWeight="600" fontSize="15">{title}</Text>
      </Box>
  )
}