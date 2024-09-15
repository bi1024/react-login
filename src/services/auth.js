
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export async function login(account, password) {//impure
    try {
        const response = await axios.get('http://localhost:3001/user/');
        const data = response.data;
        return data;
    } catch (error) {
        console.log(`Error: ${error}`);
    }

    // const data = await response.json().then(
    //     (data) => {
    //         data.array.forEach(item => {
    //             if (account === item.account && password === item.password) {
    //                 if (item.role === 'admin') {
    //                     useNavigate('/admin');
    //                 }
    //                 else {
    //                     useNavigate('/home');
    //                 }
    //             }
    //         }
    //         );

    //         // else { setErrorMsg('Account Not Found') }
    //     }
    // );
    // return data.map(item => {
    //     if (account === item.account && password === item.password) {
    //         return item;
    //     } 
    //     // else { setErrorMsg('Account Not Found') }
    // });
    // return data;
}
async function getAccountInfo(account, password) {//impure
    const response = await fetch('http://localhost:3001/user/');
    const data = await response.json();
    data.map(item => {
        if (account === item.account && password === item.password) {
            return item;
        }
    });
    throw new Error('Account not found');
}