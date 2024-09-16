
import axios from "../api/axios";
const LOGIN_URL = '/user';


export async function login(account, password, setErrorMsg, setAuth) {
    try {
        const response = await axios.get(LOGIN_URL);
        const data = response.data;
        let found = data.find(item => item.account === account && item.password === password);
        setAuth(found);
        return found;
    } catch (error) {//supposed to catch error but no back end to throw error
        console.log(`Error: ${error}`);
    }
}
