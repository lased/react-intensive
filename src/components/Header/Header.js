import { memo } from 'react';
import { ContainerBlock } from '../../shared';
import { HeaderBlock } from './blocks';

const Header = () => {
  return (
    <HeaderBlock>
      <ContainerBlock>
        Header
      </ContainerBlock>
    </HeaderBlock>
  )
}

export default memo(Header)
