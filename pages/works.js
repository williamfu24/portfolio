import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTemp1 from '../public/images/works/Temp1EyeCatcher.png'
import thumbTempBuddy from '../public/images/works/TempBuddy.png'
import thumbTempLeo from '../public/images/works/TempLeo.png'
import thumbTempMango from '../public/images/works/TempMango.png'
import thumbHands from '../public/images/works/TempHands.png'
import thumbSuenos from '../public/images/works/TempSuenos.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="temp1" title="TempOne" thumbnail={thumbTemp1}>
            Temp Project 1 - placeholder
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="temp2" title="Buddy" thumbnail={thumbTempBuddy}>
            I will now just be linking cute animals I know
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="temp3" title="Leo" thumbnail={thumbTempLeo}>
            As I create and add new projects I will update to include them here
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="temp4" title="Mango" thumbnail={thumbTempMango} >
            : )
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="temp5" thumbnail={thumbHands} title="Hands"/>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="temp6" thumbnail={thumbSuenos} title="Suenos"/>
        </Section>
      </SimpleGrid>

    </Container>
  )
  //Add more here like Collaborations onward for later
}

export default Works
