import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import deakinThumbnail from '../public/images/portfolio/deakin.png'
import medhackThumbnail from '../public/images/portfolio/medhack.avif'
import cliniqThumbnail from '../public/images/portfolio/heidi.jpg'
import scavengerThumbnail from '../public/images/portfolio/scavenger.png'
import questionGeneratorThumbnail from '../public/images/portfolio/hackiethon.jpg'
import trainerThumbnail from '../public/images/portfolio/trainerai.jpg'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Hackathons
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <GridItem
            id="toothian"
            title="Toothian"
            thumbnail={medhackThumbnail}
          >
            1st place at Medhack 2025 by MYMI x MLAI
          </GridItem>
          </Section>
          <Section delay={0.1}>
            <GridItem
              id="cliniq"
              title="ClinIQ"
              thumbnail={cliniqThumbnail}
            >
              3rd place at Heidi Health x GCP Hackathon
            </GridItem>
        </Section>
        <Section delay={0.1}>
            <GridItem
              id="scavenger"
              title="Scavenger Hunt"
              thumbnail={scavengerThumbnail}
            >
              2nd place at Monash Macathon
            </GridItem>
        </Section>
        <Section delay={0.1}>
            <GridItem
              id="question-generator"
              title="PDF Question Generator"
              thumbnail={questionGeneratorThumbnail}
            >
              Submission to University of Melbourne Hackathon 2025
              Featured for Best Design and Best Usefulness
            </GridItem>
        </Section>
        <Section delay={0.1}>
            <GridItem
              id="trainer"
              title="TrainerAI"
              thumbnail={trainerThumbnail}
            >
              Submission to Unihack 2025
            </GridItem>
        </Section>
      </SimpleGrid>
      
      <Heading as="h3" fontSize={20} mb={4}>
        University
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <GridItem
            id="deakin"
            href="https://github.com/anhkhoado932/awesome-deakin-portfolio"
            title="Awesome Deakin Portfolio"
            thumbnail={deakinThumbnail}
          >
            Projects completed at Deakin
            University.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Portfolio;
export { getServerSideProps } from '../components/chakra'
