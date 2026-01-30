// import { useContext } from "react";
// import { ServiceContext } from "../services/EmployeeService";


// export function useEmployeeService(){
//     return useContext(ServiceContext);
// }


import { ServiceContext } from "../context/ServiceContext"
import { useContext } from "react"

export function useEmployeeService()
{
return useContext(ServiceContext);
}