import React, { Component } from 'react'
import AccountsService from '../services/AccountsService'

class ListAccountsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                accounts: []
        }
        this.addAccount = this.addAccount.bind(this);
        this.updateAccount = this.updateAccount.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
    }

    componentDidMount(){
        AccountsService.getAccounts().then((res) => {
            this.setState({ accounts: res.data});
        });
    }


    addAccount(){
        this.props.history.push('/create-accounts/_add');
    }
    viewAccount(id){
        this.props.history.push(`/view-account/${id}`);
    }
    updateAccount(id){
        console.log("current id is => " + id);
        this.props.history.push(`/create-accounts/${id}`);
    }
    deleteAccount(id){
        AccountsService.deleteAccount(id).then( res => {
            this.setState({accounts: this.state.accounts.filter(account => account.id !== id)});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Accounts List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAccount}> Add Account</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Account Id</th>
                                    <th> Account Name</th>
                                    <th> Account Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.accounts.map(
                                        account => 
                                        <tr key = {account.id}>
                                             <td> {account.id} </td>   
                                             <td> {account.acctName}</td>
                                             <td> {account.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.updateAccount(account.id)} className="btn btn-info">Update</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAccount(account.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAccount(account.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAccountsComponent
