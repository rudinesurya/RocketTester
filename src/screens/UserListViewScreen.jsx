import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {FetchUsers, AddUser, RemoveUser} from '../api/RocketApi';

const UserListViewScreen = () => {
    
    const {register, handleSubmit, reset} = useForm();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        FetchUsers().then(x=>setUsers(x.data));
      }, []);
     

    const onSubmit = (data) => {
        AddUser(data);
        reset();
    }

    const handleRemove = (id) => {
        RemoveUser(id);
    } 

    const listItems = users.map((x) =>
        <li key={x.id}>
            <span>Id: {x.id}</span>
            <br/>
            <span>Name: {x.name}</span>
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
                    Name:
                    <input {...register("name")}/>
                </label>

                <input type="submit" value="submit"/>
            </form>

            {listItems}
        </div>
    );
  };
  
  export default UserListViewScreen;