import { z } from 'zod';

const makeFetchAfter = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json());
};

// passing two type argument to makeFetchAfter
export const getFetchedData = makeFetchAfter<{
  firstName: string;
  lastName: string;
}>('/api/entpoint').then((res: { firstName: string; lastName: string }) => {
  return console.log(res);
});

// _______________________

const makeFetchZod = <TData>(
  url: string,
  schema: z.Schema<TData>
): Promise<TData> => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return schema.parse(res);
    });
};

// passing two type argument to makeFetchAfter
const getFetchedDataZod = makeFetchZod(
  '/api/entpoint',
  z.object({ firstName: z.string(), lastName: z.string(), id: z.string() })
).then((res: { firstName: string; lastName: string }) => {
  return console.log(res);
});
