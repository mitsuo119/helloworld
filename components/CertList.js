import { useCerts } from '../context/CertContext';

export default function CertList({ filter }) {
  const { certs, toggle } = useCerts();
  const filtered = certs.filter((c) =>
    filter === 'acquired' ? c.acquired : !c.acquired
  );

  return (
    <ul>
      {filtered.map((c) => (
        <li key={c.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <img
            src={c.img}
            alt={`${c.provider} icon`}
            width={64}
            height={64}
            style={{ marginRight: '8px' }}
          />
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
  );
}
