import crypto from 'node:crypto';

export default function App() {
  const id = crypto.randomUUID();

  return <p>Random Crypto ID: {id}</p>
}
