import { memo } from 'react'

import { Button } from '..'

const buttonText = (isAuth, inBasket, isNotAvailable) => {
  if (!isAuth) {
    return 'Авторизуйтесь для добавления в корзину'
  }
  if (inBasket) {
    return 'Удалить из корзины'
  }
  if (isNotAvailable) {
    return 'Товар недоступен'
  }

  return 'Добавить в корзину'
}

const AddToBasket = ({ inBasket, isNotAvailable, isAuth, onClick }) => (
  <Button
    error={inBasket || isNotAvailable || !isAuth}
    secondary={!inBasket && !isNotAvailable && isAuth}
    disabled={(!inBasket && isNotAvailable) || !isAuth}
    onClick={onClick}
  >
    {buttonText(isAuth, inBasket, isNotAvailable)}
  </Button>
)

export default memo(AddToBasket)
