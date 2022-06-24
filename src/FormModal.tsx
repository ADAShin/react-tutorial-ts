import { FC } from 'react';
import styled from 'styled-components';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
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
  return (
    <Modal>
      <Container>
        <div>本当に作成しますか?</div>
        <ButtonWrapper>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  );
};
