'use client'

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import WorkExperience from "@/components/work-experience"
import FloatingMenu from "@/components/floating-menu"
import {
  Container,
  HeroSection,
  HeroContent,
  HeroImageContainer,
  ProfileImageWrapper,
  PlayButton,
  PlayIcon,
  VideoNote,
  Title,
  Subtitle,
  CompanyBadges,
  CompanyBadge,
  CompanyIcon,
  MicrosoftGrid,
  MicrosoftSquare,
  Description,
  SocialLinks,
  SocialLink,
  Section,
  SectionTitle,
  SkillsGrid,
  SkillCategory,
  SkillList,
  Footer,
  FooterContent,
} from "./page.styles"

export default function Home() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const currentDay = daysOfWeek[new Date().getDay()]

  return (
    <>
      <FloatingMenu />
      <Container>
        {/* Hero Section */}
        <HeroSection id="about">
          <HeroContent>
            <div>
              <Title>Trinh The Son</Title>
              <Subtitle>Software Engineer C++</Subtitle>
            </div>

            <CompanyBadges>
              <CompanyBadge>
                <Image src="/vinai.png" alt="VinAI" width={70} height={70} />
              </CompanyBadge>
              <CompanyBadge>
                <Image src="/opswat.png" alt="OPSWAT" width={84} height={84} />
              </CompanyBadge>
            </CompanyBadges>

            <Description>
              <p>
                I'm Son Trinh, a C++ Engineer @VinAI in Vietnam. My work focuses on algorithmic development for L2/L2++ ADAS.
              </p>
              <p>
                My motto is really simple: "Work with the best, learn from the best, be the best."
              </p>
              <p>P.S. At this time, I'm not exploring new opportunities.</p>
            </Description>

            <SocialLinks>
              <SocialLink rel="noopener noreferrer" target="_blank" href="mailto:ttson.cs@gmail.com">
                <ArrowUpRight size={16} />
                <span>Email</span>
              </SocialLink>
              <SocialLink rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ttsoncs/">
                <ArrowUpRight size={16} />
                <span>LinkedIn</span>
              </SocialLink>
              <SocialLink rel="noopener noreferrer" target="_blank" href="#">
                <ArrowUpRight size={16} />
                <span>CV / Resume</span>
              </SocialLink>
            </SocialLinks>
          </HeroContent>

          <HeroImageContainer>
            <ProfileImageWrapper>
              <Image
                src="https://sjc.microlink.io/z7Ow-KBi_J9VF7GScbVO7-XvAJRUqhBsQjpWhaaXEuN2m2avnE177nndOM6OQOshJo26WahKgl-ykST99_JUdw.jpeg"
                alt="Profile picture"
                fill
                style={{ objectFit: "cover" }}
              />
              <PlayButton>
                <PlayIcon />
              </PlayButton>
              <VideoNote>(I am no longer looking for a job but keeping this video up)</VideoNote>
            </ProfileImageWrapper>
          </HeroImageContainer>
        </HeroSection>

        {/* Work Experience Sections */}
        <Section id="experience">
          {/* Pitch */}
          <WorkExperience
            logo={
              <CompanyIcon $color="pitch">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 3.5L18 9v6l-6 3-6-3V9l6-3.5z" />
                </svg>
              </CompanyIcon>
            }
            company="Pitch"
            period="2018 - 2024"
            title="Presentation software for fast-moving teams"
            description="Pitch is a presentation tool that helps people create visually stunning presentations, together, in the browser. I joined the company in 2018 as one of the first designers."
          >
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" }}>My Role</h4>
                <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
                  As a Senior Product Designer, I led the design of key features and collaborated with cross-functional
                  teams to deliver a cohesive product experience. I was responsible for the design system, user
                  research, and mentoring junior designers.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" }}>Key Achievements</h4>
                <ul style={{ color: "#d1d5db", lineHeight: 1.6, listStyle: "none" }}>
                  <li>• Redesigned the presentation editor, improving user satisfaction by 35%</li>
                  <li>• Created the component library and design system used across the product</li>
                  <li>• Led the design for the collaboration features, a key differentiator for Pitch</li>
                </ul>
              </div>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pitch project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pitch project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pitch project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </WorkExperience>

          {/* Microsoft */}
          <WorkExperience
            logo={
              <MicrosoftGrid>
                <MicrosoftSquare $color="red" />
                <MicrosoftSquare $color="green" />
                <MicrosoftSquare $color="blue" />
                <MicrosoftSquare $color="yellow" />
              </MicrosoftGrid>
            }
            company="Microsoft"
            period="2016 - 2018"
            title="Designing for millions of users worldwide"
            description="At Microsoft, I worked on the design of productivity tools and enterprise software solutions that are used by millions of people around the world."
          >
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" }}>My Role</h4>
                <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
                  As a Product Designer on the Office team, I contributed to the design of key features across the
                  Office suite, with a focus on improving user experience and accessibility.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" }}>Key Achievements</h4>
                <ul style={{ color: "#d1d5db", lineHeight: 1.6, listStyle: "none" }}>
                  <li>• Redesigned key workflows in Excel, improving task completion rates by 22%</li>
                  <li>• Contributed to the Fluent Design System implementation across Office products</li>
                  <li>• Led accessibility improvements that increased compliance with WCAG standards</li>
                </ul>
              </div>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Microsoft project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Microsoft project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Microsoft project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </WorkExperience>

          {/* Native Instruments */}
          <WorkExperience
            logo={
              <CompanyIcon $color="gray">
                <span style={{ color: "white", fontWeight: "bold", fontSize: "1.125rem" }}>NI</span>
              </CompanyIcon>
            }
            company="Native Instruments"
            period="2014 - 2016"
            title="Creating tools for music producers and DJs"
            description="Native Instruments develops software and hardware for music production and DJing. I worked on the design of music production software and hardware interfaces."
          >
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" }}>My Role</h4>
                <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
                  As a UI/UX Designer, I was responsible for designing interfaces for music production software and
                  hardware controllers, ensuring they were intuitive and efficient for creative professionals.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" }}>Key Achievements</h4>
                <ul style={{ color: "#d1d5db", lineHeight: 1.6, listStyle: "none" }}>
                  <li>• Redesigned the Maschine software interface, improving workflow for music producers</li>
                  <li>
                    • Created UI specifications for hardware controllers, bridging the gap between software and hardware
                  </li>
                  <li>• Developed a consistent design language across the product portfolio</li>
                </ul>
              </div>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Native Instruments project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Native Instruments project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Native Instruments project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </WorkExperience>

          {/* Flexa (Current) */}
          <WorkExperience
            logo={
              <CompanyIcon $gradient="purple-pink">
                <span style={{ color: "white", fontWeight: "bold", fontSize: "1.125rem" }}>F</span>
              </CompanyIcon>
            }
            company="Flexa"
            period="2024 - Present"
            title="Reimagining flexible work for the modern workforce"
            description="Flexa is a platform that connects professionals with flexible work opportunities. I'm currently leading the design team, focusing on creating intuitive and efficient experiences for both employers and job seekers."
          >
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" }}>My Role</h4>
                <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
                  As the Lead Product Designer, I'm responsible for the overall design direction of the platform,
                  managing the design team, and collaborating with product and engineering to deliver a cohesive user
                  experience.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" }}>Current Focus</h4>
                <ul style={{ color: "#d1d5db", lineHeight: 1.6, listStyle: "none" }}>
                  <li>• Redesigning the job search experience to better match candidates with opportunities</li>
                  <li>• Building a scalable design system to support rapid product development</li>
                  <li>• Implementing user research processes to inform product decisions</li>
                </ul>
              </div>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Flexa project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Flexa project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#111827",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Flexa project screenshot"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </WorkExperience>
        </Section>

        {/* Skills Section */}
        <Section id="skills">
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SkillsGrid>
            <SkillCategory>
              <h4>Design</h4>
              <SkillList>
                <li>• User Interface Design</li>
                <li>• User Experience Design</li>
                <li>• Design Systems</li>
                <li>• Interaction Design</li>
                <li>• Visual Design</li>
                <li>• Prototyping</li>
              </SkillList>
            </SkillCategory>
            <SkillCategory>
              <h4>Tools</h4>
              <SkillList>
                <li>• Figma</li>
                <li>• Sketch</li>
                <li>• Adobe Creative Suite</li>
                <li>• Framer</li>
                <li>• Principle</li>
                <li>• HTML/CSS/JS</li>
              </SkillList>
            </SkillCategory>
            <SkillCategory>
              <h4>Leadership</h4>
              <SkillList>
                <li>• Team Management</li>
                <li>• Design Strategy</li>
                <li>• Cross-functional Collaboration</li>
                <li>• Mentoring</li>
                <li>• Product Strategy</li>
                <li>• Stakeholder Management</li>
              </SkillList>
            </SkillCategory>
          </SkillsGrid>
        </Section>

        {/* Footer */}
        <Footer>
          <FooterContent>
            <div style={{ color: "#9ca3af" }}>© {new Date().getFullYear()} Trinh The Son. All rights reserved.</div>
            <div style={{ color: "#9ca3af" }}>
              Enjoy the rest of your <span style={{ fontWeight: "bold", color: "white" }}>{currentDay}!</span>
            </div>
          </FooterContent>
        </Footer>
      </Container>
    </>
  )
}
