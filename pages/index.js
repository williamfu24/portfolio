import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoTwitch,
  IoLogoLinkedin,
  IoLogoFacebook
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer. I am learning this!
        <br/>Project is created with core components: React, NodeJs, Next.js
        <br/>Project is hosted on Vercel
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
          <Paragraph>Hi! I am a Software Engineer I currently working
            at M&T Bank for the Real Time Payments team. I enjoy learning and
            implementing next technologies and tech stacks to broaden
            my horizon and skill sets. Hobbies include gaming (Valorant,
            Old School RuneScape, New World, and Super
            Smash Bros Melee), and cooking. Occasionally will stream on {' '}
            <NextLink href="https://www.twitch.tv/10gica1" passHref={true} target="_blank">
              <Link>
                twitch
              </Link>
            </NextLink>
            . His latest project is {' '}
            <NextLink href="/">
              <Link>
                this website!
              </Link>
            </NextLink>
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
            <BioYear>2021 - Present</BioYear>
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

       <Section delay={.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/williamfu24/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @williamfu24
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/williamfu24" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @williamfu24
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/williamfu_24" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @williamfu_24
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/williamfu.24/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @williamfu.24
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/william.fu.24/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @william.fu.24
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discordapp.com/users/261312891884404757" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                @williamfu.24#0171
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.twitch.tv/10gica1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitch} />}
              >
                @10gica1
              </Button>
            </Link>
          </ListItem>
        </List>
       </Section>
      </Container>
    </Layout>
  )
}

export default Page
