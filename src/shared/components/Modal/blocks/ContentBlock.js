import styled from 'styled-components'

const ContentBlock = styled.div(({ maxHeight }) => ({
    maxHeight: `calc(${maxHeight} - 20px)` || 'auto',
    width: '100%',
    overflow: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(0,0,0,.3) rgba(0,0,0,.2)',

    '::-webkit-scrollbar': {
        width: 8,

        '&-track': {
            background: 'rgba(0,0,0,.2)',
            borderRadius: 20
        },
        '&-thumb': {
            backgroundColor: 'rgba(0,0,0,.3)',
            borderRadius: 20
        }
    }
}))

export default ContentBlock