package com.thangnguyen.Employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thangnguyen.Employee.model.Employee;
import com.thangnguyen.Employee.services.EmployeeService;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    //Create a method for api
    @PostMapping("/employees")
    public Employee  createEmployee(@RequestBody Employee  employee){

        return employeeService.createEmployee(employee);
    }
    
}
