import { createContext, useContext, useState } from 'react';

const initialCerts = [
  { id: 1, provider: 'IPA', title: '基本情報技術者', acquired: false, img: '/icons/ipa.svg' },
  { id: 2, provider: 'AWS', title: 'Solutions Architect Associate', acquired: true, img: '/icons/aws.svg' },
  { id: 3, provider: 'Azure', title: 'AZ-900', acquired: false, img: '/icons/azure.svg' }
];

const CertContext = createContext();

export function CertProvider({ children }) {
  const [certs, setCerts] = useState(initialCerts);

  const toggle = (id) => {
    setCerts(certs.map((c) => (c.id === id ? { ...c, acquired: !c.acquired } : c)));
  };

  const value = { certs, toggle };

  return <CertContext.Provider value={value}>{children}</CertContext.Provider>;
}

export const useCerts = () => useContext(CertContext);
