import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header'
import { LayoutContainer, LayoutContent } from './style'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  )
}
