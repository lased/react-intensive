import styled from 'styled-components';

const getBorder = ({ error, danger }) => {
    if (error) { return '2px solid #b91c1c' }
    if (danger) { return '2px solid #f59e0b' }

    return '2px solid var(--text-color-20)'
}

const TextareaBlock = styled.textarea((props) => ({
    color: 'var(--text-color-10)',
    padding: 10,
    borderRadius: 5,
    border: getBorder(props),
    outline: 'none',
    backgroundColor: 'transparent',
    resize: 'vertical',
    height: 50,

    '::placeholder': {
        color: 'var(--text-color-20)'
    }
}))

export default TextareaBlock