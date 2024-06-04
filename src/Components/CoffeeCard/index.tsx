import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import Expresso from '../../assets/images/coffees/expresso.png'
import {
  CardCoffeeActionsArea,
  CoffeeBadge,
  CoffeeCardBackground,
  CoffeeCardContainer,
  CoffeeCardContent,
  CoffeeCardDescription,
  CoffeeCardFooter,
  CoffeeCardImage,
  CoffeeCardQuantity,
  CoffeeCardTitle,
  CoffeeCartButton,
  CoffeePrice,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardBackground>
        <CoffeeCardImage src={Expresso} />
        <CoffeeCardContent>
          <CoffeeBadge>Tradicional</CoffeeBadge>
          <CoffeeCardTitle>Expresso tradicional</CoffeeCardTitle>
          <CoffeeCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeCardDescription>
        </CoffeeCardContent>
        <CoffeeCardFooter>
          <CoffeePrice>
            R$ <span>5,00</span>
          </CoffeePrice>
          <CardCoffeeActionsArea>
            <CoffeeCardQuantity>
              <Minus
                cursor="pointer"
                size={24}
                color={defaultTheme.purple}
                weight="fill"
              />
              <span>1</span>
              <Plus
                cursor="pointer"
                size={24}
                color={defaultTheme.purple}
                weight="fill"
              />
            </CoffeeCardQuantity>
            <CoffeeCartButton>
              <ShoppingCart
                size={24}
                color={defaultTheme.white}
                weight="fill"
              />
            </CoffeeCartButton>
          </CardCoffeeActionsArea>
        </CoffeeCardFooter>
      </CoffeeCardBackground>
    </CoffeeCardContainer>
  )
}
