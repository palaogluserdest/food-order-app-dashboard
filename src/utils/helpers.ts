export const fetcher = async (url: string) => {
  const res = await fetch(`https://676add3abc36a202bb838018.mockapi.io/api/melodies/${url}`);
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return res.json();
};
