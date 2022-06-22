import { FC, useEffect } from 'react';

type Props = {
  langs: string[];
};

export const List: FC<Props> = ({ langs }) => {
  useEffect(() => {
    console.log('List.tsx:useEffect');
    return () => {
      console.log('List.tsx:useEffect:unmount');
    };
  });

  return (
    <div>
      {langs.map((lang, index) => (
        <div key={index}>{lang}</div>
      ))}
    </div>
  );
};
