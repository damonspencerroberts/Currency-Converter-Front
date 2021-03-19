import React, { useEffect, useState } from 'react'
import Header from '../components/header/header';
import CardProduct from '../components/card-product/card-product';
import CurFlags from '../components/currencies/cur-flags';
import Spinner from '../components/spinner/spinner';

const Records = () => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const sleep = (sleepDuration) => {
    const now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){
      setSpinner(true);
    } 
  }
  
  useEffect(() => {
    sleep(1000);
    fetch('https://currency-api-rails.herokuapp.com/api/v1/histories')
      .then(res => res.json())
      .then(val => {
        const sorted_val = val.sort((val1, val2) => val2.id - val1.id);
        setData(sorted_val);
        setSpinner(false);
      })
      .catch(err => console.log(err));
  }, [])

  const products = data.map((e) => {
    const curInitFlag = CurFlags.currencies.find(flag => flag.code === e.init_currency);
    const curWantedFlag = CurFlags.currencies.find(flag => flag.code === e.wanted_currency);
    const date = new Date(e.created_at);
    const dateOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };
    const formatedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(date);
    
    return (
      <CardProduct 
        initSymbol = {curInitFlag.symbol}
        amount = {e.amount}
        initCur = {curInitFlag.name}
        wantedSymbol = {curWantedFlag.symbol}
        convertedAmount = {e.total}
        wantedCur = {curWantedFlag.name}
        rate = {e.rate}
        date = {formatedDate}
        initFlag = {curInitFlag.emoji}
        wantedFlag = {curWantedFlag.emoji}
      />);
  });

  return (
    <div class="record">
      <Header content = "Previous Conversions" />
      {spinner ? <Spinner /> : <div className="parent">
        {products}
      </div>}
    </div>
  )
}

export default Records;
