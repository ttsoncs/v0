import styled from "styled-components"

const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 2rem;
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1rem;
  }
`

const CompanyName = styled.span`
  font-size: 1.125rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`

const PeriodBadge = styled.div`
  margin-left: 0;
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  background-color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.gray[800]};
  border-radius: 9999px;
  font-size: 0.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-left: auto;
    margin-top: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 0.875rem;
  }
`

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.875rem;
  }
`

const ExperienceDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[300]};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
`

export default function WorkExperience({ logo, company, period, title, description, children }) {
  return (
    <ExperienceSection>
      <ExperienceHeader>
        {logo}
        <CompanyName>{company}</CompanyName>
        <PeriodBadge>{period}</PeriodBadge>
      </ExperienceHeader>

      <ExperienceTitle>{title}</ExperienceTitle>

      <ExperienceDescription>{description}</ExperienceDescription>

      {children}
    </ExperienceSection>
  )
}
