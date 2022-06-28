// use react snippet from vscode marketplace to quickly create react component
import React, { Component } from 'react';

import { withRouter } from './withRouter';
import AccountsService from '../services/AccountsService';

class ListAccountsComponent extends Component {
    // constructor
    constructor(props){
        super(props)

        this.state = {
            accounts: []
        }

        // bind the function
        this.addAcount=this.addAcount.bind(this);
        
    }
    

    // methods
    componentDidMount() {
        AccountsService.getAccounts()
        .then( (response) => {
            this.setState({ accounts: response.data})
        } )
    }

    addAcount() {

        // https://stackoverflow.com/questions/70143135/how-to-use-react-router-dom-v6-navigate-in-class-component
        this.props.navigate('/create-accounts')

        // The history method is deprecated in react v6
        // Route store history.
        // this.props.history.push('/create-accounts');
    }

    // HTML page render section
    render() {
        return (
            <div>
                <h2 className='text-center'>Account Lists</h2>
                <div>
                    <button className='btn btn-primary' onClick={this.addAcount}>Add Account</button>
                </div>
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

// export default ListAccountsComponent;
export default withRouter(ListAccountsComponent);