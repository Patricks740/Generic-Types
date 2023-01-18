import * as React from 'react';
import { addIdtoObject, getValue } from './HelperFunctions';
import { getFetchedData } from './FetchData';
import { createSet } from './HelperFunctions';

import './style.css';

export default function App() {
  // 10 Tips for Mastering TypeScript Generics
  // https://www.youtube.com/watch?v=dLPgQRbVquo

  // --- Example 1 ---  GenericTyp Helper functions
  type MyGenericType<TData> = {
    data: TData;
  }; 

  type Example = MyGenericType<{
    firstname: string;
  }>;

  type Example2 = MyGenericType<number>;

  //--- Example 2 ---
  // Generic funtion in a normal function with a Type Helper function on top

  // before
  const makeFetchBefore = (url: string) => {
    return fetch(url).then((res) => res.json());
  };

  makeFetchBefore('/api/entpoint').then(
    (res: { firstName: string; lastName: string }) => {
      console.log(res);
    }
  );

  // after
  const makeFetchAfter = getFetchedData;

  //--- Exapmle 3 ---
  // pass in a type argument so the Set errors on type level
  const set = new Set<number>();
  set.add(1);

  set.add('abc');

  // --- Exapmle 4 ---

  const result = addIdtoObject({ firstName: 'Matt', lastName: 'Pocock' });
  // autocomplete id just works
  console.log(result);

  // --- Exapmle 8 ---

  const sValue = getValue({ a: 1, b: 'some-string', c: true }, 'b');
  console.log(sValue);

  // --- Exapmle 9 ---
  // default types
  const numberSet = createSet<number>();
  const stringSet = createSet<string>();
  const otherStringSet = createSet();
  
    // --- Exapmle 10 ---


  return (
    <div>
      <h1>Generic Types</h1>
    </div>
  );
}
