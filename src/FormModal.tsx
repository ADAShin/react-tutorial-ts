import { FC, useContext } from 'react';
import styled from 'styled-components';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { ThemeContext, THEMES, ThemeType } from './context/ThemeContext';

type ThemeProps = {
  customTheme: ThemeType;
};

const Container = styled.div<ThemeProps>`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  color: ${({ customTheme }) => customTheme.color};
  background-color: ${({ customTheme }) => customTheme.backgroundColor};
  border ${({ customTheme }) =>
    customTheme === THEMES.dark ? '2px solid white' : 'none'};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
`;

type Props = {
  confirm: () => void;
  cancel: () => void;
};

export const FormModal: FC<Props> = ({ confirm, cancel }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <Modal>
      <Container customTheme={theme}>
        <div>本当に作成しますか?</div>
        <ButtonWrapper>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  );
};
