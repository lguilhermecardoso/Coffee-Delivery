import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { CartArea, HeaderContainer, LocationArea } from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { useEffect, useState } from 'react'

export function Header() {
  const [location, setLocation] = useState('Obtendo localização...')

  useEffect(() => {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then(function (permissionStatus) {
        if (permissionStatus.state === 'granted') {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords
            const response = await fetch(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoibGd1aWNhcmRvc28iLCJhIjoiY2tnZWIydmxiMGF2bzJzdDljNGV6bWV0ZSJ9.s04I31R8Ah4rsJ0TndR85w`,
            )
            const data = await response.json()
            const city = data.features[0].context[1].text
            const state = data.features[0].context[2].short_code.replace(
              'BR-',
              '',
            )
            setLocation(`${city}, ${state}`)
          })
        } else {
          setLocation('Permitir localização')
        }
      })
  }, [])

  async function requestLocationPermission() {
    await navigator.geolocation.getCurrentPosition(
      () => {
        window.location.reload()
      },
      () => {},
    )
  }
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Coffee Bean" />
      <div>
        <LocationArea onClick={requestLocationPermission}>
          <MapPin size={24} color={defaultTheme.purple} weight="fill" />
          {location}
        </LocationArea>
        <CartArea>
          <ShoppingCart size={24} color={defaultTheme.yellow} weight="fill" />
        </CartArea>
      </div>
    </HeaderContainer>
  )
}
