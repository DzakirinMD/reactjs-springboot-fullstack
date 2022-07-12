import React, { Component } from 'react'
import AccountsService from '../services/AccountsService';

class UpdateAccountsComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            acctName: '',
            emailId: ''
        }
        // bind the function
        this.changeAccountNameHandler = this.changeAccountNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateAccount = this.updateAccount.bind(this);
    }

    componentDidMount() {
        AccountsService.getAccountById(this.state.id).then(response => {
            let account = response.data;
            this.setState({ 
                acctName: account.acctName,
                emailId: account.emailId
             });
        });
    }

    // synthethic component
    updateAccount = (e) => {
        // e.preventDefault(); will block the default onSubmit() behavior. so we can use our own proccessing, which call the PUT API
        e.preventDefault();
        let account = {
            acctName: this.state.acctName,
            emailId: this.state.emailId
        };
        console.log('account => ' + JSON.stringify(account));
        AccountsService.updateAccount(account, this.state.id).then( res => {
            this.props.history.push('/accounts');
        });
    }
    
    changeAccountNameHandler = (event) => {
        this.setState({acctName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }
    cancel(){
        this.props.history.push('/accounts');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Account Name: </label>
                                            <input placeholder="Account Name" name="acctName" className="form-control" 
                                                value={this.state.acctName} onChange={this.changeAccountNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateAccount}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateAccountsComponents
