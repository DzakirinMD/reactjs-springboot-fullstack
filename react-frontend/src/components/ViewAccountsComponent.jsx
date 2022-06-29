import React, { Component } from 'react'
import AccountsService from '../services/AccountsService'

class ViewAccountsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            accounts: {}
        }
    }

    componentDidMount(){
        AccountsService.getAccountById(this.state.id).then( res => {
            this.setState({accounts: res.data});
        })
    }

    cancel(){
        this.props.history.push('/accounts');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Account Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Account Name: &nbsp;</label>
                            <div> { this.state.accounts.acctName }</div>
                        </div>
                        <div className = "row">
                            <label> Account Email ID: &nbsp;</label>
                            <div> { this.state.accounts.emailId }</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAccountsComponent
