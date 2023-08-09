import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
//import { useLocation } from "react-router-dom";

class UpdateEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:this.props.router.params.id,
            firstName:'',
            lastName:'',
            emailId:''
        }
        const { navigate } = this.props;

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeId(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({firstName:employee.firstName,lastName:employee.lastName,emailId:employee.emailId});
        });
        
        //console.log(this.state.id);
    }

    updateEmployee = (e) =>{
        e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        EmployeeService.updateEmployee(employee,this.state.id).then((res)=>{
            this.props.router.navigate("/employees");
        })
        //console.log('employee => '+JSON.stringify(employee));
    }

    cancel(){
        this.props.router.navigate('/employees');
    }

    changeFirstNameHandler(event){
        this.setState({firstName:event.target.value});
    }

    changeLastNameHandler(event){
        this.setState({lastName:event.target.value});
    }

    changeEmailIdHandler(event){
        this.setState({emailId:event.target.value});
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'><br></br>
                            <h3 className='text-center'> Update Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>FirstName</label><br></br>
                                        <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>LastName</label><br></br>
                                        <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>EmailId</label><br></br>
                                        <input placeholder='Email Address' name='emailId' className='form-control' value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div><br></br>
                                    <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                                    <button  className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default function(props) {
    const navigate = useNavigate();
    const params = useParams();
    return <UpdateEmployeeComponent {...props} router={{navigate,params}} />;
}
//export default UpdateEmployeeComponent;