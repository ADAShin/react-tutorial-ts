export const LANGUAGES: string[] = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go',
];

export const getLanguages = () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};
