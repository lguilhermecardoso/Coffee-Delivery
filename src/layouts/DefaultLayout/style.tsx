import styled from 'styled-components'

export const LayoutContainer = styled.div``

export const LayoutContent = styled.div`
  /* max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto; */
  background: ${({ theme }) => theme.background};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
