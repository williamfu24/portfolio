import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelModel from '../voxel-model'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>William Fu - Homepage </title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelModel />
        </NoSsr>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
