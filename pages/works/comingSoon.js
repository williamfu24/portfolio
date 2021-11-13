import { Container, Badge, Link, List, ListItem, Icon } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoTwitch,
  IoLogoLinkedin,
  IoLogoFacebook
} from 'react-icons/io5'

const Work = () => {
  return (
    <Layout title="Coming Soon">
      <Container>
      <Title>
        Coming Soon <Badge> ???? </Badge>
      </Title>
        <P>
          My Next Project is in the works so please check back later.
          In the mean time checkout my socials!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>LinkedIn</Meta>
            <Link href='https://www.linkedin.com/in/williamfu24/' target="_blank">
              <Icon as={IoLogoLinkedin} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/williamfu24" target="_blank">
              <Icon as={IoLogoGithub} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Twitter</Meta>
            <Link href="https://twitter.com/williamfu_24" target="_blank">
              <Icon as={IoLogoTwitter} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Instagram</Meta>
            <Link href="https://www.instagram.com/williamfu.24/" target="_blank">
              <Icon as={IoLogoInstagram} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Facebook</Meta>
            <Link href="https://www.facebook.com/william.fu.24/" target="_blank">
              <Icon as={IoLogoFacebook} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Discord</Meta>
            <Link href="https://discordapp.com/users/261312891884404757" target="_blank">
              <Icon as={IoLogoDiscord} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Twitch</Meta>
            <Link href="https://www.twitch.tv/10gica1" target="_blank">
              <Icon as={IoLogoTwitch} />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/comingSoon.png" alt="ComingSoon"/>
      </Container>
    </Layout>
  )
}

export default Work
