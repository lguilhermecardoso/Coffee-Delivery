import styled from 'styled-components'

interface HeroAreaProps {
  background: string
}
export const HeroArea = styled.div<HeroAreaProps>`
  background-image: url(${(props: HeroAreaProps) => props.background});
  background-size: cover;
  background-position: center;
  height: 63vh;
  display: flex;
  color: ${({ theme }) => theme['base-text']};
  font-family: 'Baloo 2', sans-serif;
  padding: 0;
`
export const HeroContent = styled.div`
  max-width: 74rem;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
`

export const HeroRightImage = styled.div`
  align-self: center;
  margin-left: 7rem;
  @media (max-width: 1185px) {
    margin-left: 0;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme['base-title']};
  font-family: 'Baloo 2', sans-serif;
  font-size: ${({ theme }) => theme.space['7']};
  max-width: 588px;
  margin-top: ${({ theme }) => theme.space['9']};
  line-height: 1.2;
  text-align: left;
`

export const SubTitle = styled.h2`
  max-width: 588px;
  color: ${({ theme }) => theme['base-subtitle']};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-top: ${({ theme }) => theme.space['4']};
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space['4']};
  font-family: 'Roboto', sans-serif;
  margin-top: ${({ theme }) => theme.space['9']};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const CoffeeItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['2']};
  font-size: ${({ theme }) => theme.space['4']};
`
interface CoffeeItemIconProps {
  bgcolor: string
}
export const CoffeeItemIcon = styled.div<CoffeeItemIconProps>`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1;
  background-color: ${(props: CoffeeItemIconProps) => props.bgcolor};
`

export const CoffeeListArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`
