import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software developer based in Melbourne, Australia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kai Do
          </Heading>
          <p>Builder ( Software | Artificial Intelligence )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/khoa.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Kai is a professional full-stack developer with experience in building backend for microservice 
          event-driven systems. He is also a lifelong learner who enjoys building scalable products 
          with human-centered design and a passion for AI. Outside of work, 
          Kai enjoys reading fiction and is reading through {" "}
          <Link href="https://www.amazon.com.au/There-No-Antimemetics-Division-qntm/dp/B0915M7T61" target="_blank">There is no antimemetics dimension</Link>.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/portfolio"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Saigon, Vietnam 🇻🇳.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed the Bachelor&apos;s Program in Computer Science at Ho Chi Minh City University of Technology.
        </BioSection>
        <BioSection>
          <BioYear>2021 -</BioYear>
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Worked as a software developer, accumulated experience in event-driven microservice and API design.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Completed the Master&apos;s Program in Information Technology at Deakin University.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Awards
        </Heading>
        <BioSection>
          <BioYear>2024</BioYear>
          2nd Place at Monash Macathon - &ldquo;AI for Social Good&ldquo;
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          1st Place at MedHack 2025: AI Hospital
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          3rd Place at Heidi Health x GCP Hackathon: AI for Healthcare
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Certifications
        </Heading>
        <BioSection>
          <BioYear>2025</BioYear>
          Microsoft Certified: Azure AI Fundamentals
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Microsoft Certified: Azure AI Engineer Associate
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Books, Blues Piano, Machine Learning
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
