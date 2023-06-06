import React, { useState } from 'react';

// TODO: start coding here!

const Calculator = () => {
    const [number, setNumber] = useState(0)
    const [tip, setTip] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)
    
    function Calculate(){
        const resultTip = (number*tip/100)/numberOfPeople
        setTipAmount(resultTip)
        
        const resultTotal = (number/numberOfPeople + resultTip)
        setTotal(resultTotal)

        console.log(number, tip, numberOfPeople)
    }
    
    return (
        <main>
            <img
                src="./icons/logo.svg"
                className="logo"
                alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
            />
            <section className="card">
                <div className="card-left">
                    <div className="input-group" id="totalBillGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="totalBill">Bill</label>
                            <small className="body-text input-error" id="totalBillError">Input field is valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Total bill value"
                            id="totalBill"
                            value = {number}
                            onChange = {e => setNumber(e.target.value)}

                        />
                    </div>

                    <div className="input-group" id="totalTipPercentageGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label">Select Tip %</label>
                            <small className="body-text input-error" id="totalTipPercentageError">Input field is
                                valid</small>
                        </div>
                        <div className="input-tips-container">
                            <button onClick={()=> setTip(5)} className="body-l-text input-tip" id="tip5">5%
                            </button>
                            <button onClick={()=> setTip(10)} className="body-l-text input-tip" id="tip10">10%
                            </button>
                            <button onClick={()=> setTip(15)} className="body-l-text input-tip" id="tip15">15%
                            </button>
                            <button onClick={()=> setTip(25)} className="body-l-text input-tip" id="tip25">25%
                            </button>
                            <button onClick={()=> setTip(50)} className="body-l-text input-tip" id="tip50">50%
                            </button>
                            <input onChange={e => setTip(e.target.value)} type="number" className="body-l-text input-field" placeholder="Custom"
                                   id="totalTipPercentage"></input>
                        </div>
                    </div>

                    <div className="input-group" id="numberOfPeopleGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="numberOfPeople">Number of People</label>
                            <small className="body-text input-error" id="numberOfPeopleError">Input field is
                                valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Number of people"
                            id="numberOfPeople"
                            value = {numberOfPeople}
                            onChange={(e) => {
                                setNumberOfPeople(e.target.value);
                              }}

                        />
                    </div>
                    <div className="input-tips-container">
                            <button onClick={Calculate} className="body-sm-text input-tip" id="calculate">calculate
                            </button>          
                    </div>
                </div>
                <div className="card-right">
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Tip Amount</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="tipAmount">${tipAmount}</strong>
                    </section>
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Total</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="totalPrice">${total}</strong>
                    </section>
                    <button onClick={() => {
                        setNumber(0);
                        setTip(0);
                        setNumberOfPeople(0);
                        setTipAmount(0);
                        setTotal(0)
                    }} className="btn btn-primary btn-reset">Reset</button>
                </div>
            </section>
        </main>
    );
};

export default Calculator;