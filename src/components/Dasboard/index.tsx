import TotalCard from '../TotalCard';
import Dolar from '@/assets/icons/dolar.svg';
import Order from '@/assets/icons/orders.svg';
import People from '@/assets/icons/people.svg';
import styles from './Dashboard.module.scss';
import OrderList from '../OrderList';

const DashboardComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h1 className={styles.title}>Dashboard</h1>
          <span className={styles.date}>Tuesday 15 January, 2025</span>
        </div>
        <div className={styles.totalSection}>
          <TotalCard Icon={Dolar} title="Total Revenue" total="$10.243,00" chancing="+30.40" />
          <TotalCard Icon={Order} title="Total Dish Ordered" total="23,456" chancing="-12,40" />
          <TotalCard Icon={People} title="Total Costumer" total="1234" chancing="+2,40" />
        </div>
        <div className={styles.orderListSection}>
          <OrderList />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.mostOrdered}></div>
        <div className={styles.mostOrderTypes}></div>
      </div>
    </div>
  );
};

export default DashboardComponent;
