import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { getLaunches } from '../store/spaceX/spaceSlice';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLaunches());
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="List of SpaceX Launches" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SpaceX Launches</h1>

        <div className={styles.grid}>
          <a className={styles.card}></a>
        </div>
      </main>
    </div>
  );
}
