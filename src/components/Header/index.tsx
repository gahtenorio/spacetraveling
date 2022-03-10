import Link from 'next/link';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <img src="/images/Logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
