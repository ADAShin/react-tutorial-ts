import { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const modalRoot = document.getElementById('modal-root') as HTMLElement;

type Props = {
  children?: React.ReactNode;
};

export const Modal: FC<Props> = ({ children }) => {
  return ReactDOM.createPortal(<Container>{children}</Container>, modalRoot);
};
