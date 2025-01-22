'use client';
import { MostOrderedList } from '@/types/types';
import DownMiniArrow from '@/assets/icons/down-mini-arrow.svg';
import styles from './MostOrdered.module.scss';
import { useRef } from 'react';
import Image from 'next/image';

const orderedList: MostOrderedList[] = [
  {
    id: '1',
    name: 'Spicy seasoned seafood noodles',
    totalOrder: 120,
    dishImage: 'https://drive.google.com/uc?export=view&id=1T9_kvayGMkz05vNrbMXGHI8UiN1DEwGu',
  },
  {
    id: '2',
    name: 'Salted Pasta with mushroom sauce',
    totalOrder: 120,
    dishImage: 'https://drive.google.com/uc?export=view&id=1H1I5PKL_pS1y6nGMKLOo8BpgqMmfI8F_',
  },
  {
    id: '3',
    name: 'Beef dumpling in hot and sour soup',
    totalOrder: 80,
    dishImage: 'https://drive.google.com/uc?export=view&id=1dVteRAreZ6bcYPRbWZC41NjIVS3Ukhye',
  },
  {
    id: '4',
    name: 'Hot spicy fried rice with omelet',
    totalOrder: 70,
    dishImage: 'https://drive.google.com/uc?export=view&id=129eGPCBpataLyDEZgPWdJfaicipqTl4M',
  },
  {
    id: '5',
    name: 'Hot spicy fried rice with omelet',
    totalOrder: 90,
    dishImage: 'https://drive.google.com/uc?export=view&id=129eGPCBpataLyDEZgPWdJfaicipqTl4M',
  },
];

const MostOrdered = () => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const mostOrderedList = orderedList.sort((a, b) => b.totalOrder - a.totalOrder);

  const handleSelectFocus = () => {
    if (selectRef.current) {
      selectRef.current.focus();
      selectRef.current.click();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Most Ordered</h2>
        <div className={styles.selectGroup} onClick={handleSelectFocus}>
          <select name="dateList" id="dateList" className={styles.select} ref={selectRef}>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="Month">Mont</option>
          </select>
          <DownMiniArrow width={30} height={30} className={styles.arrow} />
        </div>
      </div>
      <div className={styles.mOrderedList}>
        <ul className={styles.mOrderedCards}>
          {mostOrderedList.map((item) => (
            <li className={styles.mOrderedCardItem} key={item.id}>
              <span className={styles.imgWrapper}>
                <Image src={item.dishImage} alt={item.name} fill sizes="1" />
              </span>
              <span className={styles.content}>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <span className={styles.cardCount}>{item.totalOrder} dishes ordered</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MostOrdered;
