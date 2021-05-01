import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {FetchTransactions, AddTransaction} from '../api/RocketApi';

const TransactionListViewScreen = () => {
    
    const {register, handleSubmit, reset} = useForm();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        FetchTransactions().then(x=>setTransactions(x.data));
      }, []);
     

    const onSubmit = (data) => {
        AddTransaction(data);
        reset();
    }

    const listItems = transactions.map((x) =>
        <li key={x.id}>
            <span>Id: {x.id}</span>
            <br/>
            <span>User Id: {x.userId}</span>
            <br/>
            <span>Type: {x.type}</span>
            <br/>
            <span>Amount: {x.amount}</span>
            <br/>
            <span>Comment: {x.comment}</span>
            <br/>
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
                    Type:
                    <input {...register("type")}/>
                </label>
                <label>
                    Amount:
                    <input {...register("amount")}/>
                </label>
                <label>
                    Comment:
                    <input {...register("comment")}/>
                </label>

                <input type="submit" value="submit"/>
            </form>

            {listItems}
        </div>
    );
  };
  
  export default TransactionListViewScreen;