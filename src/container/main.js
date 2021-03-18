import React, { useEffect, useState } from 'react'
import Header from '../components/header/header';
import Currencies from "../components/currencies/currency-choice";
import Rate from "../components/rate/rate";
import Amount from "../components/amount/amount";
import Button from '../components/button/button';
import axios from 'axios'



const Main = () => {
  const [eur, setEur] = useState({});
  const [chf, setChf] = useState({});
  const [gbp, setGbp] = useState({});
  const [usd, setUsd] = useState({});
  const [current, setCurrent] = useState("GBP");
  const [change, setChange] = useState("GBP");
  const [rate, setRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [amount, setAmount] = useState(0);

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
              "GBP": res.data.rates.GBP,
              "CHF": res.data.rates.CHF,
              "USD": res.data.rates.USD,
              "EUR": res.data.rates.EUR
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

  const calculateConversion = (cur, cha) => {
    if (cur === cha) {
      setRate(1);
      calculateAmount(amount, 1);
    } else {
      const currentValue = [eur, chf, gbp, usd].find(e => e.base === cur);
      const newRate = Math.round(currentValue[cha] * 100) / 100
      setRate(newRate);
      calculateAmount(amount, newRate);
    }
  }

  const setTheCurrent = (val) => {
    setCurrent(val);
    calculateConversion(val, change);
  }

  const setTheChange = (val) => {
    setChange(val);
    calculateConversion(current, val);
  }

  const calculateAmount = (val, rate) => {
    setAmount(val);
    setConvertedAmount(Math.round((val * rate) * 100) / 100);
  }

  const saveTheData = () => {
    const allData = {
      init_currency: current,
      wanted_currency: change,
      amount: amount,
      total: convertedAmount,
      rate: rate
    }

    const jsonConvertedData = JSON.stringify(
      {
        "history": {
          "init_currency": allData.init_currency,
          "wanted_currency": allData.wanted_currency,
          "amount": parseFloat(allData.amount),
          "total": parseFloat(allData.total),
          "rate": parseFloat(allData.rate)
        }
      }
    );

    console.log(jsonConvertedData);

    const post_url = "https://currency-api-rails.herokuapp.com/api/v1/histories";

    axios.post(post_url, jsonConvertedData, { headers: { 'Content-Type': 'application/json' } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

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
        setCurrent = {setTheCurrent}
        setChange = {setTheChange}
        calculateConversion = {calculateConversion}
      />
      <Rate 
        base = {current}
        convert = {change}
        rate = {rate}
      />
      <Amount 
        calculateAmount = {calculateAmount}
        convertedAmount = {convertedAmount}
        rate = {rate}
      />
      <Button click = {() => saveTheData()} />
    </div>
  )
}

export default Main
