import styled from 'styled-components'

const getColor = (isNotAvailable) => isNotAvailable ? '#DC2626' : '#059669'

const StockBlock = styled.div(({ isNotAvailable }) => ({
    color: getColor(isNotAvailable)
}))

export default StockBlock