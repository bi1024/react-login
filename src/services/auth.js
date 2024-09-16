
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export async function login(account, password) {//impure
    try {
        const response = await axios.get('http://localhost:3001/user/');
        const data = response.data;
        let found = data.find(item => item.account === account && item.password === password);
        return found;

    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
