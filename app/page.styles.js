"use client"

import styled from "styled-components"
import Link from "next/link";

export const Container = styled.main`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 2rem 1.5rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4rem 3rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 4rem 6rem;
  }
`

export const HeroSection = styled.div`
  padding-top: 4rem;
  display: grid;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-top: 5rem;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  order: 2;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 2rem;
    order: 1;
  }
`

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    order: 2;
    margin-bottom: 0;
  }
`

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 16rem;
    height: 16rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 18rem;
    height: 18rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 20rem;
    height: 20rem;
  }

  & > img {
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.gray[700]};
  }
`

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 4rem;
    height: 4rem;
  }
`

export const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-left: 12px solid ${(props) => props.theme.colors.black};
  border-bottom: 6px solid transparent;
  margin-left: 2px;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    border-top: 8px solid transparent;
    border-left: 16px solid ${(props) => props.theme.colors.black};
    border-bottom: 8px solid transparent;
  }
`

export const VideoNote = styled.div`
  position: absolute;
  bottom: -1.5rem;
  right: -1.5rem;
  text-align: center;
  font-style: italic;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.gray[400]};
  width: 9rem;
  transform: rotate(6deg);

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    bottom: -2rem;
    right: -2rem;
    font-size: 0.875rem;
    width: 12rem;
  }
`

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`

export const CompanyBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1rem;
  }
`

export const CompanyBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 0.875rem;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 1rem;
    }
  }
`

export const CompanyIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${(props) =>
    props.$gradient === "purple-pink" &&
    `
    background: linear-gradient(to bottom right, ${props.theme.colors.purple[400]}, ${props.theme.colors.pink[400]});
  `}

  ${(props) =>
    props.$color === "pitch" &&
    `
    background-color: ${props.theme.colors.pitch};
  `}

  ${(props) =>
    props.$color === "gray" &&
    `
    background-color: ${props.theme.colors.gray[800]};
    border-radius: 0.5rem;
  `}
`

export const MicrosoftGrid = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const MicrosoftSquare = styled.div`
  ${(props) => props.$color === "red" && `background-color: ${props.theme.colors.microsoft.red};`}
  ${(props) => props.$color === "green" && `background-color: ${props.theme.colors.microsoft.green};`}
  ${(props) => props.$color === "blue" && `background-color: ${props.theme.colors.microsoft.blue};`}
  ${(props) => props.$color === "yellow" && `background-color: ${props.theme.colors.microsoft.yellow};`}
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme.colors.gray[300]};
  font-size: 1rem;
  line-height: 1.6;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1.5rem;
    font-size: 1rem;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 0.75rem;
  }
`

export const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background-color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.gray[800]};
  border-radius: 9999px;
  transition: background-color 0.2s ease;
  font-size: 0.875rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[900]};
  }
`

export const Section = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: 6rem;
    gap: 5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 8rem;
    gap: 6rem;
  }
`

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.875rem;
    margin-bottom: 2rem;
  }
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`

export const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h4 {
    font-size: 1.125rem;
    font-weight: ${(props) => props.theme.fontWeights.medium};

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 1.25rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1rem;
  }
`

export const SkillList = styled.ul`
  list-style: none;
  color: ${(props) => props.theme.colors.gray[300]};
  font-size: 0.875rem;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
    gap: 0.5rem;
  }
`

export const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.gray[800]};
  padding-bottom: 6rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: 6rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 8rem;
    padding-top: 2rem;
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.875rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
