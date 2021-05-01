import axios from 'axios';
const baseurl = 'https://localhost:5001/api';

//Users
export const FetchUsers = async () => {
    return axios.get(
        `${baseurl}/Users`,
      );
}

export const AddUser = async (payload) => {
    return axios.post(
        `${baseurl}/Users`,
        payload
      );
}

export const RemoveUser = async (id) => {
    return axios.delete(
        `${baseurl}/Users/${id}`,
      );
}


//Transactions
export const FetchTransactions = async () => {
    return axios.get(
        `${baseurl}/Transactions`,
      );
}

export const AddTransaction = async (payload) => {
    return axios.post(
        `${baseurl}/Transactions`,
        payload
      );
}


//Contests
export const FetchContests = async () => {
    return axios.get(
        `${baseurl}/Contests`,
      );
}

export const AddContest = async (payload) => {
    return axios.post(
        `${baseurl}/Contests`,
        payload
      );
}

export const SetContestOutcome = async (id, payload) => {
    return axios.put(
        `${baseurl}/Contests/${id}`,
        payload
      );
}


//Bets
export const FetchBets = async () => {
    return axios.get(
        `${baseurl}/Bets`,
      );
}

export const AddBet = async (payload) => {
    return axios.post(
        `${baseurl}/Bets`,
        payload
      );
}

export const RemoveBet = async (id) => {
    return axios.delete(
        `${baseurl}/Bets/${id}`,
      );
}