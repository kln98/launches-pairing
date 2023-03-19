import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getLaunches } from '../store/spaceX/spaceSlice';
import Card from '../components/card';
import icon from '../../public/favicon.ico';

export default function Home() {
  const dispatch = useAppDispatch();
  const logo = require('../pages/spacex-logo.svg');
  const launchPayload = useAppSelector((state: RootState) => state.space.launchState?.docs);
  useEffect(() => {
    // This will get called twice in development due to React.StrictMode
    dispatch(getLaunches());
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="First 10 Launches by SpaceX" />
        <link rel="icon" href={icon.src} />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>
          <Image
            priority={true}
            src={logo}
            alt="SpaceX logo"
            placeholder="blur"
            blurDataURL={'../pages/spacex-logo.svg'}
          />
        </span>
        <h2 className={styles.title}>FIRST 10 LAUNCHES</h2>
      </main>
      <div className={styles.content}>
        <div className={styles.grid}>
          {launchPayload?.map((data, index) => (
            <Card launch={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
