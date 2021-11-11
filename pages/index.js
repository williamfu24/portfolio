import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer. I am learning this! <br/>Project is created with core components: React, NodeJs, Next.js
        </Box>
        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              William Fu
            </Heading>
            <p> About me: Developer of Software, Lifter of Weights, Player of Games, Friend of Pets</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{base:4, md:0}}
            ml={{md:6}}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/william.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>Hi! Wiliam is a Software Engineer I currently working
            at M&T bank for the Real Time Payments team. I enjoy learning and
            implementin next technologies and tech stacks to broaden
            my horizen and skill sets. Hobbies include gaming (Valorant,
            Old School RuneScape, New World, and Super
            Smash Bros Melee). Occasionally will stream on {' '}
            <NextLink href="https://www.twitch.tv/10gica1" passHref={true} target="_blank">
              <Link>
                twitch
              </Link>
            </NextLink>
            . His latest project is {' '}
            <NextLink href="/works/project1">
              <Link>
                Project1
              </Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born and raised in Baton Rouge, LA.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Graduated from Rhodes College with a BA in Computer Science
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Hired at M&T Bank in the Technical Development Program
          </BioSection>
          <BioSection>
            <BioYear>2021 to Present</BioYear>
            Completed Technical Development Program and hired as SE1 on the Real Time Payments Team
          </BioSection>
        </Section>

        <Section delay={0.3}>
         <Heading as="h3" variant="section-title">
           I love
         </Heading>
         <Paragraph>
           Games, {' '}
           <Link href="https://open.spotify.com/user/1218885276/playlists/" target="_blank">
            Music (Check out my playlists!)
           </Link>
           , Pets, Working out, Soup, Eating, and Learning.
         </Paragraph>
       </Section>
      </Container>
    </Layout>
  )
}

export default Page
