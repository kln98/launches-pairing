import { FC } from 'react';
import { ILaunchDto } from '../dto/spaceX.dto';
import styles from '../styles/Card.module.css';
import Image from 'next/image';
import moment from 'moment';

interface ICardProps {
  launch: ILaunchDto;
}

const Card: FC<ICardProps> = ({ launch }) => {
  return (
    <div className={styles.card} key={`${launch.id}`} style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <div className={styles.top}>
          <div style={{ flex: 1, paddingLeft: 10 }}>
            <h2>{launch.name}</h2>
            <div style={{ display: 'flex', paddingTop: 10 }}>
              <div style={{ flexDirection: 'column' }}>
                <div className={styles.title}>Date launched:</div>
                <div className={styles.data}>
                  <div>{moment(launch.date_utc).format('YYYY-MM-DD')}</div>
                </div>
              </div>

              <div style={{ flex: 1 }} />

              <div style={{ flexDirection: 'column' }}>
                <div className={styles.title}>Time launched:</div>
                <div className={styles.data}>
                  <div>{moment(launch.date_utc).format('HH:mm:ss')}</div>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.badge}>
            <Image src={launch.links.patch.small} alt={`${launch.name} + " - Badge"`} width={80} height={80} />
          </span>
        </div>
      </div>

      <div className={styles.body}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 3 }}>
            <div className={styles.title}>Payloads:</div>
            <div style={{ flexDirection: 'column' }}>
              {launch.payloads.map((p, index) => (
                <div style={{ paddingBottom: 8 }} key={index}>
                  <div className={styles.data} style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={`${styles.fontSize10} ${styles.paddingRight5}`}>type:</div>
                    <div>{p.type}</div>
                  </div>

                  <div className={styles.data} style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={`${styles.fontSize10} ${styles.paddingRight15}`}>id:</div>
                    <div className={styles.fontSize10}>{p.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 2 }} />

          <div style={{ flex: 1, paddingRight: 10 }}>
            <div className={styles.title}>Core:</div>
            <div className={styles.data} style={{ display: 'flex', alignItems: 'center' }}>
              <div className={`${styles.fontSize10} ${styles.paddingRight5}`}>serial:</div>
              <div className={styles.data}>{launch.cores[0].core.serial}</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.footer}
        style={{
          backgroundColor: !launch.success ? '#f41111' : '#00b000',
          color: 'white',
        }}
      >
        {!!launch.success && <p>Success</p>}

        {!!launch.failures && !launch.success && (
          <div style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <p>Failure</p> <div className={styles.fontSize10}>{launch.failures[0].reason}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
