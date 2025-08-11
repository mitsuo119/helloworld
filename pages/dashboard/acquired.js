import CertList from '../../components/CertList';
import Link from 'next/link';

export default function AcquiredPage() {
  return (
    <div>
      <h1>取得資格</h1>
      <CertList filter="acquired" />
      <p>
        <Link href="/dashboard/target">目標資格ダッシュボードへ</Link>
      </p>
      <p>
        <Link href="/">ホームへ戻る</Link>
      </p>
    </div>
  );
}
