import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Data } from '../state/Data';
import { Selector } from '../state/Selector';

import { PageContext } from './_app';

const App: React.FC = () => {
  const number = useRecoilValue(Selector);
  return (
    <div>
      {number}
      hi
      <A />
      <B />
    </div>
  );
};

export const getServerSideProps = async ({ req, res }: PageContext): Promise<any> => {
  return { props: {} };
};

export default App;

const A = () => {
  const [data, setData] = useRecoilState(Data);
  console.log('A', { data });
  return <input value={data} onChange={(e) => setData(e.target.value)} />;
};
const B = () => {
  const [data, setData] = useRecoilState(Data);
  console.log('B', { data });
  return <input value={data} onChange={(e) => setData(e.target.value)} />;
};
