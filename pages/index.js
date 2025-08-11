import { useState } from 'react';

const initialData = [
  { id: 1, provider: 'IPA', title: '基本情報技術者', acquired: false },
  { id: 2, provider: 'AWS', title: 'Solutions Architect Associate', acquired: true },
  { id: 3, provider: 'Azure', title: 'AZ-900', acquired: false }
];

export default function Home() {
  const [certs, setCerts] = useState(initialData);

  const toggle = (id) => {
    setCerts(certs.map(c => c.id === id ? { ...c, acquired: !c.acquired } : c));
  };

  return (
    <div>
      <h1>IT資格管理</h1>
      <ul>
        {certs.map(c => (
          <li key={c.id}>
            <label>
              <input
                type="checkbox"
                checked={c.acquired}
                onChange={() => toggle(c.id)}
              />
              {c.provider}: {c.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
