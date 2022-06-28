import axios from "axios";

const ACCOUNTS_API_BASE_URL = "http://localhost:8082/api/v1/accounts";

class AccountService {

    getAccounts() {
        return axios.get(ACCOUNTS_API_BASE_URL);
    }

    createAccount(account) {
        return axios.post(ACCOUNTS_API_BASE_URL, account);
    }

}

export default new AccountService()

