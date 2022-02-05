import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { WrapperBlock, ModalBlock, HeaderBlock, ButtonsBlock } from './blocks'
import { Button } from '..'

const modalNode = document.getElementById('modal')

const ConfirmModal = (props) => {
    const onConfirm = (confirmed) => () => props.onConfirm(confirmed)
    const markup = (
        <WrapperBlock>
            <ModalBlock>
                <HeaderBlock>Вы уверены, что хотите очистить форму?</HeaderBlock>
                <ButtonsBlock>
                    <Button error onClick={onConfirm(false)}>Отмена</Button>
                    <Button secondary onClick={onConfirm(true)}>Подтвердить</Button>
                </ButtonsBlock>
            </ModalBlock>
        </WrapperBlock>
    )

    useEffect(() => () => modalNode.innerHTML = '', [])

    return createPortal(markup, modalNode)
}

export default ConfirmModal