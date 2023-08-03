import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';



class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees: []
        }
        const { navigate } = this.props;

        this.addEmployee=this.addEmployee.bind(this);
       
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
            this.setState({employees:res.data});

        });
    }

    addEmployee(){
        
        this.props.navigate('/add-employee');
    }
    
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary btn-sm mb-3" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Emplyee First Name</th>
                                <th>Emplyee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
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

export default function(props) {
    const navigate = useNavigate();
    return <ListEmployeeComponent {...props} navigate={navigate} />;
}

//export default ListEmployeeComponent;