import React, { Component } from 'react'
import AccountsService from '../services/AccountsService';

class CreateAccountsComponent extends Component {
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
        this.createorUpdateAccount = this.createorUpdateAccount.bind(this);
    }

    // get id for combining create and update page
    componentDidMount(){
        console.log("current state of id => " + this.state.id);
        if(this.state.id === '_add'){
            return
        }else{
            AccountsService.getAccountById(this.state.id).then( (res) =>{
                let account = res.data;
                this.setState({
                    acctName: account.lastName,
                    emailId : account.emailId
                });
            });
        }        
    }

    createorUpdateAccount = (e) => {
        e.preventDefault();
        let account = {
            acctName: this.state.acctName,
            emailId: this.state.emailId
        };
        console.log('account => ' + JSON.stringify(account));

        if(this.state.id === '_add'){
            AccountsService.createAccount(account).then(res =>{
                this.props.history.push('/accounts');
            });
        }else{
            AccountsService.updateAccount(account, this.state.id).then( res => {
                this.props.history.push('/accounts');
            });
        }
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

    // _add is used as replacement for -1 to combine both create and update
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Create Account</h3>
        }else{
            return <h3 className="text-center">Update Account</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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

                                        <button className="btn btn-success" onClick={this.createorUpdateAccount}>Save</button>
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

export default CreateAccountsComponent
