package com.thangnguyen.Employee.services;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.thangnguyen.Employee.entity.EmployeeEntity;
import com.thangnguyen.Employee.model.Employee;
import com.thangnguyen.Employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
        //Initialize employee repository
    }

    @Override
    public Employee createEmployee(Employee employee){

        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
                //copy properties of employee passed above and put it in employeeEntity

        employeeRepository.save(employeeEntity);
        //Save it to the repository
        return employee;
    }
}
