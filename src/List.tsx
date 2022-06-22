import { FC } from 'react';

const languages: string[] = ['JavaScript', 'C++', 'Ruby', 'Java', 'PHP', 'Go'];

export const List: FC = () => {
  return (
    <div>
      {languages.map((language, index) => (
        <div key={index}>{language}</div>
      ))}
    </div>
  );
};
