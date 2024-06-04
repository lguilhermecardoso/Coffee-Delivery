import {
  CoffeeItem,
  CoffeeItemIcon,
  CoffeeList,
  CoffeeListArea,
  HeroArea,
  HeroContent,
  HeroRightImage,
  SubTitle,
  Title,
} from './styles'
import Hero from '../../assets/hero-background.png'
import Coffee from '../../assets/coffee.png'
import { coffees } from '../../data.json'

import {
  Package,
  ShoppingCartSimple,
  Timer,
  Coffee as CoffeeIcon,
} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { CoffeeCard } from '../../Components/CoffeeCard'

export function Home() {
  return (
    <>
      <HeroArea background={Hero}>
        <HeroContent>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <SubTitle>
              Com o coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </SubTitle>
            <CoffeeList>
              <CoffeeItem>
                <CoffeeItemIcon bgcolor={defaultTheme['yellow-dark']}>
                  <ShoppingCartSimple
                    size={16}
                    color={defaultTheme.white}
                    weight="fill"
                  />
                </CoffeeItemIcon>
                <p>Compra simples e segura</p>
              </CoffeeItem>
              <CoffeeItem>
                <CoffeeItemIcon bgcolor={defaultTheme['base-text']}>
                  <Package size={16} color={defaultTheme.white} weight="fill" />
                </CoffeeItemIcon>
                <p>Embalagem mantém o café intacto</p>
              </CoffeeItem>
              <CoffeeItem>
                <CoffeeItemIcon bgcolor={defaultTheme.yellow}>
                  <Timer size={16} color={defaultTheme.white} weight="fill" />
                </CoffeeItemIcon>
                <p>Entrega rápida e rastreada</p>
              </CoffeeItem>
              <CoffeeItem>
                <CoffeeItemIcon bgcolor={defaultTheme.purple}>
                  <CoffeeIcon
                    size={16}
                    color={defaultTheme.white}
                    weight="fill"
                  />
                </CoffeeItemIcon>
                <p>O café chega fresquinho até você</p>
              </CoffeeItem>
            </CoffeeList>
          </div>
          <HeroRightImage>
            <img src={Coffee} alt="" />
          </HeroRightImage>
        </HeroContent>
      </HeroArea>
      <main>
        <div className="container">
          <h2>Nossos cafés</h2>
          <CoffeeListArea>
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} />
            ))}
          </CoffeeListArea>
        </div>
      </main>
    </>
  )
}
