import { FC } from 'react';

type Props = {
  langs: string[];
};

export const List: FC<Props> = ({ langs }) => {
  return (
    <div>
      {langs.map((lang, index) => (
        <div key={index}>{lang}</div>
      ))}
    </div>
  );
};
