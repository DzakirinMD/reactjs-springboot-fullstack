import axios from "axios";

const ACCOUNTS_API_BASE_URL = "http://localhost:8082/api/v1/accounts";

class AccountService {

    getAccounts() {
        return axios.get(ACCOUNTS_API_BASE_URL);
    }

}

export default new AccountService()

