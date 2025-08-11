import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>IT資格管理</h1>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/target">目標資格ダッシュボード</Link>
          </li>
          <li>
            <Link href="/dashboard/acquired">取得資格ダッシュボード</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
