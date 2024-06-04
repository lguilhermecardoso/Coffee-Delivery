import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  position: relative;

  width: 16rem;
  height: 19.375rem;
  margin-top: 3rem;
`

export const CoffeeCardBackground = styled.div`
  background: ${({ theme }) => theme['base-card']};
  min-height: 19.375rem;
  max-height: 19.375rem;
  border-radius: 6px 36px 6px 36px;
  padding: ${({ theme }) => theme.space[5]};
  display: flex;
  flex-direction: column;
`

export const CoffeeCardContent = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CoffeeCardImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: -2rem;
`

export const CoffeeBadge = styled.span`
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  padding: ${({ theme }) => theme.space[2]};
  border-radius: 100px;
  font-size: ${({ theme }) => theme.space[3]};
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  text-align: center;
`

export const CoffeeCardTitle = styled.p`
  margin-top: 1rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.space[4]};
  text-align: center;
  color: ${({ theme }) => theme['base-title']};
`
export const CoffeeCardDescription = styled.p`
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  margin-top: ${({ theme }) => theme.space[2]};
`

export const CoffeeCardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`

export const CoffeePrice = styled.p`
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  margin-top: ${({ theme }) => theme.space[2]};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: ${({ theme }) => theme.space[6]};
  }
`

export const CardCoffeeActionsArea = styled.div`
  flex: 1;
  display: flex;
  margin-left: ${({ theme }) => theme.space[2]};
`
export const CoffeeCardQuantity = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
  margin: 0 0.5rem;
  margin-left: 0.8rem;
`
export const CoffeeCartButton = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.purple};
  padding: ${({ theme }) => theme.space[1]};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
