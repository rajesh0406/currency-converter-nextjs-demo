import Axios from 'axios';
import React,{useState,useEffect} from 'react';
import Head from 'next/head';
export default function Index(){
    const [amount,setamount]=useState(1);
    const [from,setFrom]=useState("USD");
    const [to,setTo]=useState("INR");
    const [result,setResult]=useState(false);
    const currencies=["USD","INR","GBP","EUR","AUD","CAD","CNY","JPY","CHF","BGN","HRK","CZK","DKK","HUF","ISK"
    ,"NOK","PLN","RON","RUB","SEK","CHF","TRY","GBP","BRL","CAD","MXN","USD","ZAR"];
    const convertCurrency=()=>{
        Axios.get(`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}&amount=${amount}`)
        .then((data)=>{
            console.log(data.data.rates[to])
            const value=amount*data.data.rates[to]
            setResult(value)
        }).catch(error=>{
            console.log(error);
        })

    }
    return(
        
        <div className="Converter">
            <Head>
                <title>Currency converter</title>
            </Head>
        <h2><span>Currency </span> Converter <span role="img" aria-label="money">&#x1f4b5;</span> </h2>
        <div className="Form">
            <input
                name="amount"
                type="text"
                value={amount}
                onChange={(e)=>setamount(e.target.value)
                }
            />
            <select
                name="from"
                onChange={(e) =>setFrom(e.target.value)}
                value={from}
            >
                {currencies.map(cur => (
                    <option value={cur}>{cur}</option>
                ))}
            </select>
            <select
                name="to"
                onChange={(e) =>setTo(e.target.value)}
                value={to}
            >
                {currencies.map(cur => (
                    <option value={cur}>{cur}</option>
                ))}
            </select>
            <button onClick={convertCurrency}>Convert</button>
     
        </div>
        { result &&   <h3>{result} {to}</h3>}
        <style jsx>
        {`
       
        .Converter{
            margin-top:15%;
            margin-left:35%;
            
        }
        .Form input, select {
            padding: 5px;
            margin: 5px 10px;
            border-radius: 5px;
            border: 1px solid rgba(119, 119, 119, 0.5);
            
        }
        
        .Form button {
            padding: 5px 10px;
            border-radius: 5px;
            background: rgb(11, 170, 59);
            color: white;
            border: none;
        }
       
        .Converter h3 {
            background-color: #ccc;
            border-radius: 10px;
            padding: 15px;
            width:300px;
            font-size: 30px;
            color:black;
            
        }
        
        .Converter h2 span {
            color: rgb(11, 170, 59);
        }
        `}
    </style>
    </div>

    );
}