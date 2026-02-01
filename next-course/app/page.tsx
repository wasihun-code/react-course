import crypto from 'node:crypto';

import {Inter, Roboto} from 'next/font/google';

const roboto = Roboto({ subsets: ['symbols'], weight: '400', variable: '--font-roboto' });

const inter = Inter({ subsets: ['cyrillic-ext']})

export default function App({children}: {children: React.ReactNode}) {
  const id = crypto.randomUUID();

  return <p>Random Crypto ID: {id}</p>
}
