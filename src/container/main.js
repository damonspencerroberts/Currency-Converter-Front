import React, { Fragment, useEffect, useState } from 'react'
import Header from '../components/header/header';
import Currencies from "../components/currencies/currency-choice";
import Rate from "../components/rate/rate";
import Amount from "../components/amount/amount";
import Button from '../components/button/button';
import Codes from './codes';
import Spinner from "../components/spinner/spinner";
import axios from 'axios'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';




const Main = (props) => {
  const [current, setCurrent] = useState("GBP");
  const [change, setChange] = useState("GBP");
  const [rate, setRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [curCurrencies, setCurCurrencies] = useState([{base: "", vals: {}}]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    const fetchData = () => {
      const currencyCodes = Codes;
      const promises = currencyCodes.map(e => fetch(`https://api.exchangeratesapi.io/latest?base=${e}`).then(res => res.json()));
      Promise.all(promises)
        .then((val) => {
          const rates = val.map((e) => {
            return {
              base: e.base,
              vals: JSON.parse(JSON.stringify(e.rates))
            }
          });
          setCurCurrencies(rates);
          setSpinner(false);
        }).catch((err) => {
          console.log(err)
        });
      }
      fetchData();
  }, []);

  const calculateConversion = (cur, cha) => {
    if (cur === cha) {
      setRate(1);
      calculateAmount(amount, 1);
    } else {
      const currentValue = curCurrencies.find(e => e.base === cur);
      const newRate = Math.round(currentValue.vals[cha] * 100) / 100
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

    const post_url = "https://currency-api-rails.herokuapp.com/api/v1/histories";

    axios.post(post_url, jsonConvertedData, { headers: { 'Content-Type': 'application/json' } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setSpinner(false);
    props.history.push("/records");
  }

  return (
    <Fragment>
      <div className="card body-margin">
      <Header 
      content = "Damon's Currency Converter"
      />
      {spinner ? <Spinner /> : <div className="card-body">
            <Currencies
              cur = {curCurrencies}
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
              change = {change}
              current = {current}
              rate = {rate}
              />
            <Button click = {() => saveTheData()} />
            </div>}
      </div>     
      <div class="head-button">
        <Link to = "/records" className = "head-button-green">Previous Records</Link>
      </div>
    </Fragment>
    );
}
        
        export default withRouter(Main);
        
        