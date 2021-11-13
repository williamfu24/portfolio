import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Portfolio">
      <Container>
        <Title>
          Portfolio <Badge> 2021 </Badge>
        </Title>
        <P>
          My first website used as a hub for all my works, projects, and socials.
          For new projects and updates, please make sure to check back often.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='/'>
              Home <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span> Web </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJs, React, Next.js, Three.js</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/portfolio_01.png" alt="WebSite" />
        <WorkImage src="/images/works/portfolio_02.png" alt="WebSite" />
      </Container>
    </Layout>
  )
}

export default Work
