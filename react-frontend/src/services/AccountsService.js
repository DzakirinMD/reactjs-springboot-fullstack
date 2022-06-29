import axios from "axios";

const ACCOUNTS_API_BASE_URL = "http://localhost:8082/api/v1/accounts";

class AccountsService {

    getAccounts() {
        return axios.get(ACCOUNTS_API_BASE_URL);
    }

    createAccount(account) {
        return axios.post(ACCOUNTS_API_BASE_URL, account);
    }

    getAccountById(accountId) {
        return axios.get(ACCOUNTS_API_BASE_URL + '/' + accountId)
    }

    updateAccount(account, accountId){
        return axios.put(ACCOUNTS_API_BASE_URL + '/' + accountId, account);
    }

    deleteAccount(accountId){
        return axios.delete(ACCOUNTS_API_BASE_URL + '/' + accountId);
    }

}

export default new AccountsService()

