import axios from '../custom-axios/axios'
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
        const formParams=qs.stringify(employee);

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