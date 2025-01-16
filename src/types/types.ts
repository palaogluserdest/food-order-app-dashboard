export type NavLinksProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export type Order = {
  id: string;
  name: string;
  image: string;
  menu: string;
  totalPayment: number;
  status: string;
};
