import React from 'react';
import { InputBox } from "./InputBox";
import useCurrencyInfo from '../hooks/useCurrencyInfo';
import { useState } from 'react';

const Practice = () => {


    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

	const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

  return (
    <div className="w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat h-screen"
    style={{ backgroundImage: `url("https: image")`}}>

        <div className="w-full">
			<div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white 20">
				
				<form onSubmit={(e) => {e.preventDefault();}}>

					<div className="w-full mb-1 bg-slate-50 rounded-lg">
						<InputBox
						label="From"
						amount
						currencyOptions={options}
						onCurrencyChange={(currency) => setAmount(amount)}
						selectCurrency={from}
						onAmountChange={(amount) => setAmount(amount)} />
					</div>

					<div className="relative w-full h-0.5">
						<button
						type="button"
						className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5" 
						onClick={swap} > swap</button>
					</div>

					<div>
						<InputBox
						label="To"
						amount={convertedAmount}
						currencyOptions={options}
						onCurrencyChange={(currency) => setTo(currency)}
						selectCurrency={from}
						amountDisable />
					</div>

					<button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"> Convert {from.toUpperCase()} to {to.toUpperCase()} </button>

				</form>
				
			</div>

        </div>

    </div>
  )
}

export default Practice;
