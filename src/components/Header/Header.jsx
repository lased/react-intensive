import { useContext } from 'react'

import { ContainerBlock, HeaderBlock, ToggleButtonBlock, BasketBlock } from './blocks'
import { ThemeContext } from '../../context'
import { useBasket } from '../../hooks'
import { Nav } from './components'
import { Helper } from '../../shared'

const getThemeText = (theme) => (theme === 'dark' ? 'Светлая' : 'Темная')
const getStyleButton = (theme) => (theme === 'dark' ? {} : { primary: true })
const getSum = (products) => products.reduce((acc, product) => acc + product.price, 0)

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { basket } = useBasket()

  return (
    <HeaderBlock>
      <ContainerBlock>
        <Nav />
        <BasketBlock>
          <div>
            В корзине товаров: <strong>{basket.length}</strong>
          </div>
          <div>
            на сумму: <strong>{Helper.getCurrency(getSum(basket))}</strong>
          </div>
        </BasketBlock>
        <ToggleButtonBlock {...getStyleButton(theme)} onClick={toggleTheme}>
          {getThemeText(theme)}
        </ToggleButtonBlock>
      </ContainerBlock>
    </HeaderBlock>
  )
}

export default Header
