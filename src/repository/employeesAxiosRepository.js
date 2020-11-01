import axios from '../custom-axios/axios1'
import qs from 'qs'
const EmployeesService={
    fetchEmployeesPaged:(page, pageSize)=>{
        const params = {
            "page": page,
            "page-size": pageSize
        };
        return axios.get(`/employees?page=${page}&page-size=2`)

    },

    deleteEmployee: (id) => {
        return axios.delete(`/employees/${id}`);
    },
    editEmployee:(employee)=>{


        const name=employee.name;
        const working_time=employee.working_time;
        const salary=employee.salary;
        const position=employee.position;
        const phone=employee.phone;
        const email=employee.email;
        const employee1={name, working_time,salary,position,phone,email}
        const formParams=qs.stringify(employee1);

        const id=employee.ESSN;
        return axios.patch(`/employees/${id}`, formParams);

    },
    addEmployee: (employee) => {
        console.log("add author");
        const formParams = qs.stringify(employee);
        return axios.post("/employees",formParams);
    },
    searchEmployee: (searchTerm) => {
        return axios.get(`/employees/search?term=${searchTerm}`);
    },

}
export default EmployeesService