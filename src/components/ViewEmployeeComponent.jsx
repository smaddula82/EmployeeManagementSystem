import React, { Component } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.router.params.id,
            employee:{}

        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeId(this.state.id).then(res =>{
            this.setState({employee:res.data});

        });
    }
    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Employee Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Employee First Name: {this.state.employee.firstName}</label>                           
                        </div>
                        <div className='row'>
                            <label>Employee Last Name: {this.state.employee.lastName}</label>
                            
                        </div>
                        <div className='row'>
                            <label>Employee Email Address:  {this.state.employee.emailId}</label>
                            
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default function(props) {
    const navigate = useNavigate();
    const params=useParams();
    return <ViewEmployeeComponent {...props} router={{navigate,params}} />;
}
//export default ViewEmployeeComponent;