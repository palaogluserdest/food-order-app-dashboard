import { FC } from 'react';
import styles from './Label.module.scss';

type LabelProps = {
  text: string;
};

const Label: FC<LabelProps> = ({ text }) => {
  let bgColor = '';
  let color = '';

  switch (text) {
    case 'completed':
      bgColor = '#6BE2BE3D';
      color = '#50D1AA';
      break;
    case 'pending':
      bgColor = '#FFB57233';
      color = '#FFB572';
      break;
    case 'preparing':
      bgColor = '#9290FE33';
      color = '#9290FE';
      break;
    case 'ready':
      bgColor = '#FF64713D';
      color = '#FF7CA3';
      break;
    default:
      break;
  }

  return (
    <>
      <span className={styles.label} style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
        {text}
      </span>
    </>
  );
};

export default Label;
