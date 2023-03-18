import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getLaunches } from '../store/spaceX/spaceSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const launchPayload = useAppSelector((state: RootState) => state.space.launchState?.docs);
  useEffect(() => {
    // This will get called twice in development due to React.StrictMode
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
          {launchPayload?.map((l) => (
            <a className={styles.card}>{l.name}</a>
          ))}
        </div>
      </main>
    </div>
  );
}
