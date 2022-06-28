import React, { Component } from 'react';
import AccountsService from '../services/AccountsService';
import { withRouter } from './withRouter';

class CreateAccountsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            acctName: '',
            emailId: ''
        }

        // bind the function
        this.changeAccountNameHandler = this.changeAccountNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveAccount = this.saveAccount.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    saveAccount = (e) => {
        e.preventDefault();

        let account = {
            acctName: this.state.acctName,
            emailId: this.state.emailId
        };

        console.log('account => ' + JSON.stringify(account));

        // after create account navigate to list accounts page
        AccountsService.createAccount(account).then(response => {
            this.props.navigate('/accounts')
        });
    }

    cancel() {
        this.props.navigate('/accounts')
    }

    changeAccountNameHandler = (event) => {
        this.setState({acctName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Account</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> Account Name: </label>
                                        <input placeholder='Account Name' name='acctName' className='form-control' 
                                        value={this.state.acctName} onChange={this.changeAccountNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Email Address: </label>
                                        <input placeholder='Email Address' name='emailId' className='form-control' 
                                        value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveAccount}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateAccountsComponent);