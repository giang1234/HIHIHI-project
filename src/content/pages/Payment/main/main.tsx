import { useEffect, useRef, useState } from 'react';
import MainContent from './mainContents';

const Main = ({
  data,
  init
}: any) => {
  const ref: any = useRef(null);
  const [paymentActive, setPaymentActive] = useState(0);
  
  useEffect(() => {
    init({});
  }, [init]);

  const intoPrice = (info: any, amount: number = 1) => {
    if(!info) return false;
    const price = Number(info.price);
    return price * amount;
  } 

  const totalPrice = (data: any): string => {
    if(!data) return "";
    return data.reduce((prev: number, curent: any) => (prev + Number(curent.info?.price)), 0);
  }

  return (
    <>
      <MainContent 
        data={data}
        ref={ref}
        paymentActive={paymentActive}
        intoPrice={intoPrice}
        totalPrice={totalPrice}
        setPaymentActive={setPaymentActive}
      />
    </>
  )
};

export default Main;