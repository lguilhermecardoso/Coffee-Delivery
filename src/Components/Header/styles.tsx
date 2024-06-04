import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  img {
    margin: 2rem 0;
  }

  div {
    display: flex;
  }
`

export const LocationArea = styled.div`
  padding: ${({ theme }) => theme.space[2]};
  display: flex;
  background-color: ${({ theme }) => theme['purple-light']};
  border-radius: 6px;
  align-items: center;
  cursor: pointer;
`

export const CartArea = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.space[2]};
  margin-left: ${({ theme }) => theme.space[3]};
  background: ${({ theme }) => theme['yellow-light']};
  border: none;
  border-radius: 6px;
`
