'use client';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import logo from '../../public/logo.png';

export default function Logo() {
  return (
    <div>
      <Image className={styles.logo} src={logo} alt="Next.js Logo" style={{ width: '35%', height: 'auto' }} priority />
    </div>
  );
}
