import { selector } from 'recoil';

import { Data } from './Data';

export const Selector = selector<number | undefined>({
  key: 'Selector',
  get: ({ get }) => {
    const text = get(Data);
    return text?.length;
  },
});
