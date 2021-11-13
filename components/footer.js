import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={.4} fontSize="sm">
      &copy; {new Date().getFullYear()} William Fu | Email: william-fu@live.com
    </Box>
  )
}

export default Footer
