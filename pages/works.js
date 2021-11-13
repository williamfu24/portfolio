import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbPortfolio from '../public/images/works/portfolio_eyecatcher.png'
import thumbComingSoon from '../public/images/works/comingSoon.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem id="portfolio" title="Personal Portfolio" thumbnail={thumbPortfolio}>
              A website created to be the hub of information for socials, as well as personal projects
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Coming Soon
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="comingSoon" title="" thumbnail={thumbComingSoon}>
            </WorkGridItem>
          </Section>
        </SimpleGrid>

      </Container>
    </Layout>
  )
  //Add more here like Collaborations onward for later
}

export default Works
