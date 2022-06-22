import { FC } from 'react';

type Props = {
  title: string;
};

export const List: FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};
