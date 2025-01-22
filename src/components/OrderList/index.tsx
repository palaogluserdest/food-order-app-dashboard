import { Order } from '@/types/types';
import styles from './OrderList.module.scss';
import Image from 'next/image';
import Label from '../common/Label';

const orderList: Order[] = [
  {
    id: '1',
    name: 'Eren Jaegar',
    image: 'https://drive.google.com/uc?export=view&id=1rHmVm4pKmKcqElk8eJiVdQwfvljRATPn',
    menu: 'Spicy seasoned seafood noodles',
    totalPayment: 125.0,
    status: 'completed',
  },
  {
    id: '2',
    name: 'Reiner Braunnn',
    image: 'https://drive.google.com/uc?export=view&id=14OQYdDxbFlzgJ_MpQcIrjwrOrhKsTEA9',
    menu: 'Salted Pasta with mushroom sauce',
    totalPayment: 145.0,
    status: 'preparing',
  },
  {
    id: '3',
    name: 'Levi Ackerman',
    image: 'https://drive.google.com/uc?export=view&id=16m0_JipafUQC9Oj9P3zcxDCdnuZFOYKZ',
    menu: 'Beef dumpling in hot and sour soup',
    totalPayment: 105.0,
    status: 'completed',
  },
  {
    id: '4',
    name: 'Historia Reiss',
    image: 'https://drive.google.com/uc?export=view&id=1VP0TyVGbYkrd-YaiXVjzbYolSTUHm7KR',
    menu: 'Hot spicy fried rice with omelet',
    totalPayment: 45.0,
    status: 'pending',
  },
  {
    id: '5',
    name: 'Hanji Zoe',
    image: 'https://drive.google.com/uc?export=view&id=17Fsjf1Xvx_SN_3UyC5f5YAQVayDD5Hcw',
    menu: 'Hot spicy fried rice with omelet',
    totalPayment: 245.0,
    status: 'completed',
  },
  {
    id: '6',
    name: 'Armin Arlert',
    image: 'https://drive.google.com/uc?export=view&id=1rHmVm4pKmKcqElk8eJiVdQwfvljRATPn',
    menu: 'Hot spicy fried rice with omelet',
    totalPayment: 435.0,
    status: 'completed',
  },
];

const OrderList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Order Report</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.titleWrapper}>
            <th className={styles.tableTitle} colSpan={2}>
              Customer
            </th>
            <th className={styles.tableTitle}>Menu</th>
            <th className={styles.tableTitle}>Total Payment</th>
            <th className={styles.tableTitle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.id}>
              <td className={styles.listItem}>
                <span className={styles.imageWrapper}>
                  <Image src={order.image} alt={order.name} width={32} height={32} className={styles.image} />
                </span>
              </td>
              <td className={styles.listItem}>{order.name}</td>
              <td className={styles.listItem}>{order.menu}</td>
              <td className={styles.listItem}>${order.totalPayment}</td>
              <td className={styles.listItem}>
                <Label text={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
