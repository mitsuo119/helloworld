import CertList from '../../components/CertList';
import Link from 'next/link';

export default function TargetPage() {
  return (
    <div>
      <h1>目標資格</h1>
      <CertList filter="target" />
      <p>
        <Link href="/dashboard/acquired">取得資格ダッシュボードへ</Link>
      </p>
      <p>
        <Link href="/">ホームへ戻る</Link>
      </p>
    </div>
  );
}
