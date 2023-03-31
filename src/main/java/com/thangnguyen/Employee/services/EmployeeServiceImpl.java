package com.thangnguyen.Employee.services;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        List<Employee> employees = employeeEntities.stream().map(emp -> new Employee(
            emp.getId(),
            emp.getFirstName(),
            emp.getLastName(), 
            emp.getEmailId()))
            .collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);

        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);

        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
       EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
       employeeEntity.setEmailId(employee.getEmailId());
       employeeEntity.setFirstName(employee.getFirstName());
       employeeEntity.setLastName(employee.getLastName());
       employeeRepository.save(employeeEntity);
       return employee;
    }
}
