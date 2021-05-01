import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {FetchBets, AddBet, RemoveBet} from '../api/RocketApi';

const BetListViewScreen = () => {
    
    const {register, handleSubmit, reset} = useForm();
    const [bets, setBets] = useState([]);

    useEffect(() => {
        FetchBets().then(x=>setBets(x.data));
      }, []);
     

    const onSubmit = (data) => {
        AddBet(data);
        reset();
    }

    const handleRemove = (id) => {
        RemoveBet(id);
    } 

    const listItems = bets.map((x) =>
        <li key={x.id}>
            <span>Id: {x.id}</span>
            <br/>
            <span>UserId: {x.userId}</span>
            <br/>
            <span>ContestId: {x.contestId}</span>
            <br/>
            <span>Amount: {x.amount}</span>
            <br/>
            <span>Outcome: {x.outcome}</span>
            <br/>
            <button type="button" onClick={() => handleRemove(x.id)}>
                Remove
            </button>
        </li>
    );

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Id:
                    <input {...register("id")}/>
                </label>
                <label>
                    User Id:
                    <input {...register("userId")}/>
                </label>
                <label>
                    Contest Id:
                    <input {...register("contestId")}/>
                </label>
                <label>
                    Amount:
                    <input {...register("amount")}/>
                </label>
                <label>
                    Outcome:
                    <input {...register("outcome")}/>
                </label>

                <input type="submit" value="submit"/>
            </form>

            {listItems}
        </div>
    );
  };
  
  export default BetListViewScreen;