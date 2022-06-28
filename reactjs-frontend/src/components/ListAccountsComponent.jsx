// use react snippet from vscode marketplace to quickly create react component
import React, { Component } from 'react';
import AccountsService from '../services/AccountsService';

class ListAccountsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        AccountsService.getAccounts()
        .then( (response) => {
            this.setState({ accounts: response.data})
        } )
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Account Lists</h2>
                <div className='row'>

                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Account ID </th>
                                <th> Account Name </th>
                                <th> Account Email </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.accounts.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.acctName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListAccountsComponent;