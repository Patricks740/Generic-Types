//                           <TObj>(obj: TObj) :TObj & {id:string}=> {
export const addIdtoObject = <TObj>(obj: TObj) => {
  return {
    ...obj,
    id: '123',
  };
};

export const getValue = <TObj, TKey extends keyof TObj>(
  obj: TObj,
  key: TKey
) => {
  return obj[key];
};

export const createSet = <T = string>() => {
  return new Set<T>();
};
