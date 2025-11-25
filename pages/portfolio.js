import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import deakinThumbnail from '../public/images/portfolio/deakin.png'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Deakin Portfolio
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="deakin"
            href="https://github.com/anhkhoado932/awesome-deakin-portfolio"
            title="Awesome Deakin Portfolio"
            thumbnail={deakinThumbnail}
          >
            Projects completed at Deakin
            University.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Portfolio;
export { getServerSideProps } from '../components/chakra'
