import NextLink from 'next/link'
import {
  Box,
  Container,
  Divider,
  Button,
  Text,
  Heading
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1"> Not Found </Heading>
      <Text> The page you&apos;re looking for was not found </Text>
      <Divider my={6}/>

      <Box align="center" my={6}>
        <NextLink href="/">
          <Button colorScheme="teal"> Return to home </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
