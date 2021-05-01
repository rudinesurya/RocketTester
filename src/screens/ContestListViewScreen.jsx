import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {FetchContests, AddContest, SetContestOutcome} from '../api/RocketApi';

const ContestListViewScreen = () => {
    
    const {register, handleSubmit, reset} = useForm();
    const [contests, setContests] = useState([]);

    useEffect(() => {
        FetchContests().then(x=>setContests(x.data));
      }, []);
     

    const onSubmit = (data) => {
        AddContest(data);
        reset();
    }

    const handleSetOutcome = (id) => {
      SetContestOutcome(id, {outcome: 1});
  } 

    const listItems = contests.map((x) =>
        <li key={x.id}>
            <span>Id: {x.id}</span>
            <br/>
            <span>Description: {x.description}</span>
            <br/>
            <span>Outcome: {x.outcome}</span>
            <br/>
            <span>Is Open: {x.isOpen ? 'Open' : 'Closed'}</span>
            <br/>
            <button type="button" onClick={() => handleSetOutcome(x.id)}>
                Set Outcome to 1
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
                    Description:
                    <input {...register("description")}/>
                </label>

                <input type="submit" value="submit"/>
            </form>

            {listItems}
        </div>
    );
  };
  
  export default ContestListViewScreen;