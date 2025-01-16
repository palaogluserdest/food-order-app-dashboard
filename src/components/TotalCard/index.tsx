import { FC } from 'react';
import Up from '@/assets/icons/up-arrow.svg';
import Down from '@/assets/icons/down-arrow.svg';
import styles from './TotalCard.module.scss';

type TotalCardProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  total: string;
  chancing: string;
};

const TotalCard: FC<TotalCardProps> = ({ Icon, title, total, chancing }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.up}>
          <span className={styles.mainIcon}>
            <Icon width={24} height={24} className={styles.iconImage} />
          </span>
          <span className={styles.chancing} style={{ color: chancing.startsWith('+') ? '#50D1AA' : '#FF7CA3' }}>
            {chancing}%
            {chancing.startsWith('+') ? (
              <span style={{ backgroundColor: '#6BE2BE3D' }} className={styles.chanIconWrapper}>
                <Up width={17.5} height={21} style={{ fill: '#50D1AA' }} className={styles.upDown} />
              </span>
            ) : (
              <span style={{ backgroundColor: '#FF64713D' }} className={styles.chanIconWrapper}>
                <Down width={17.5} height={21} style={{ fill: '#FF7CA3' }} className={styles.upDown} />
              </span>
            )}
          </span>
        </div>
        <div className={styles.center}>{total}</div>
        <div className={styles.down}>{title}</div>
      </div>
    </>
  );
};

export default TotalCard;
