import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
      Hello, I&apos;m a full-stack developer. I am learning this!
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            William Fu
          </Heading>
          <p> About me: Software Developer, Lifter, Gamer </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
