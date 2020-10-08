import Axios from 'axios';
import React,{useState,useEffect} from 'react';
import Head from 'next/head';
 function Index(props){
    var currencylist=props.posts.rates;
     const currencies=[];
     const currencyValue=[];
    for(var i in currencylist)
    {
        currencies.push({key:i,value:currencylist[i]})
    } 
    console.log(currencies)
    const [amount,setamount]=useState(1);
    const [from,setFrom]=useState("USD");
    const [to,setTo]=useState("INR");
    const [result,setResult]=useState(false);
    const convertCurrency=()=>{/**/
        Axios.get(`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}&amount=${amount}`)
        .then((data)=>{
            console.log(data)
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
            <h2>Latest Foreign currency exchange rates(Base:USD)</h2>
            <div className="currency-table">
            <table>
                {
                    currencies.map((post)=>(
                            <tr>
                                <th>{post.key}</th>
                                <th>{post.value}</th>
                            </tr>
                    ))
                }
            </table>
            </div>
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
                    <option value={cur.key}>{cur.key}</option>
                ))}
            </select>
            <select
                name="to"
                onChange={(e) =>setTo(e.target.value)}
                value={to}
            >
                {currencies.map(cur => (
                    <option value={cur.key}>{cur.key}</option>
                ))}
            </select>
            <button onClick={convertCurrency}>Convert</button>
     
        </div>
        { result &&   <h4>{result} {to}</h4>}
       
        <style jsx>
        {`
        @media only screen and (min-width:900px){
            .Converter{
                margin-top:3%;
                margin-left:40%;
                
            }
        }
        @media only screen and (max-width:899px){
            .Converter{
                margin-left:30vw;
            }
        }
        .currency-table{
            height:300px;
            overflow:auto;
            width: 40%;

        }
        table {
            border-collapse: collapse;
            width:100%;
            border-spacing: 0;
           
            border: 1px solid #ddd;
          }
          
          th, td {
            text-align: left;
            padding: 16px;
          }
          
          tr:nth-child(even) {
            background-color: #f2f2f2;
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
       
        .Converter h4 {
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
export async function getStaticProps() {
 
    const res = await fetch('https://api.exchangeratesapi.io/latest?base=USD')
    const posts = await res.json()
    return {
      props: {
        posts,
      },
    }
  }
  export default Index;