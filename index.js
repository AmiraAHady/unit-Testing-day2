function Employee(name, age, yearsOfExp) {
    this.name = name;
    this.age = age
    this.yearsOfExp = yearsOfExp
}
Employee.prototype.calculateSalary = function () {
    this.salary= this.yearsOfExp < 5 ? 5000 : 9000
    return this.salary
}

Employee.prototype.setAddress = function (country,city) {
    this.address={ country , city }
    return this.address
}

Employee.prototype.deptInfo = function (dept) {    
    return dept.getCode() +": "+dept.getLocation()
}

// increases salary with %
Employee.prototype.getPromoted = function (sendEmployeeEmail) {
    if(this.yearsOfExp >0 && this.yearsOfExp <= 4){
        sendEmployeeEmail("you got promoted to be senior")
        this.salary *= 1.2 //20%
    }
    else if(this.yearsOfExp >4 && this.yearsOfExp < 7){
        sendEmployeeEmail("you got promoted to be team lead")
        this.salary *= 1.4 //40%
    }
}


// Employee.prototype.sendEmployeeEmail = function (message) {
//     // imagin this code is sending email
//     return message
// }





// console.log(display(8));
// fun(obj.cb)



module.exports = { Employee }