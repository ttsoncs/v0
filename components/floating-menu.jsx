"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"

const MenuContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  z-index: 50;
  transform: translateX(-50%);
`

const MenuWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid ${(props) => props.theme.colors.gray[800]};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 30px;
`

const MenuContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0.75rem 1.75rem;
  }
`

const MenuButton = styled.button`
  transition: color 0.2s ease;
  padding: 0.25rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => (props.$active ? props.theme.colors.white : props.theme.colors.gray[500])};

  span {
    font-size: 0.875rem;
  }
`

export default function FloatingMenu() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      const aboutSection = document.getElementById("about")
      const experienceSection = document.getElementById("experience")
      const skillsSection = document.getElementById("skills")

      if (aboutSection && experienceSection && skillsSection) {
        const aboutTop = aboutSection.offsetTop
        const experienceTop = experienceSection.offsetTop
        const skillsTop = skillsSection.offsetTop
        const skillsBottom = skillsSection.offsetTop + skillsSection.offsetHeight

        if (scrollPosition < experienceTop) {
          setActiveSection("about")
        } else if (scrollPosition >= experienceTop && scrollPosition < skillsTop) {
          setActiveSection("experience")
        } else if (scrollPosition >= skillsTop && scrollPosition <= skillsBottom) {
          setActiveSection("skills")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 20,
        behavior: "smooth",
      })
      setActiveSection(id)
    }
  }

  return (
    <MenuContainer>
      <MenuWrapper>
        <MenuContent>
          <MenuButton
            onClick={(e) => {
              e.stopPropagation()
              scrollToSection("about")
            }}
            $active={activeSection === "about"}
          >
            <span>About</span>
          </MenuButton>

          <MenuButton
            onClick={(e) => {
              e.stopPropagation()
              scrollToSection("experience")
            }}
            $active={activeSection === "experience"}
          >
            <span>Work</span>
          </MenuButton>

          <MenuButton
            onClick={(e) => {
              e.stopPropagation()
              scrollToSection("skills")
            }}
            $active={activeSection === "skills"}
          >
            <span>Skills</span>
          </MenuButton>
        </MenuContent>
      </MenuWrapper>
    </MenuContainer>
  )
}
