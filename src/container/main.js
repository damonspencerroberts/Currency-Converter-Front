import React, { useEffect, useState } from 'react'
import Header from '../components/header/header';
import Currencies from "../components/currencies/currency-choice";
import axios from 'axios'



const Main = () => {
  const [eur, setEur] = useState({});
  const [chf, setChf] = useState({});
  const [gbp, setGbp] = useState({});
  const [usd, setUsd] = useState({});

  useEffect(() => {
    const eur = `https://api.exchangeratesapi.io/latest?base=EUR`;
    const gbp = `https://api.exchangeratesapi.io/latest?base=GBP`;
    const usd = `https://api.exchangeratesapi.io/latest?base=USD`;
    const chf = `https://api.exchangeratesapi.io/latest?base=CHF`;

    const fetchData = async (url, func) => {
        await axios.get(url)
          .then((res) => {
            const new_rate_obj =  {
              base: res.data.base,
              gbp: res.data.rates.GBP,
              chf: res.data.rates.CHF,
              usd: res.data.rates.USD,
              eur: res.data.rates.EUR
            };
            Object.keys(new_rate_obj).forEach(key => new_rate_obj[key] === undefined ? delete new_rate_obj[key] : {});
            func(new_rate_obj);
          });
    };
    fetchData(eur, setEur);
    fetchData(gbp, setGbp);
    fetchData(usd, setUsd);
    fetchData(chf, setChf);
  }, []);

  return (
    <div>
      <Header 
        content = "Damon's Currency Converter"
      />
      <Currencies
        eur = {eur}
        gbp = {gbp}
        chf = {chf}
        usd = {usd}
      />
    </div>
  )
}

export default Main
