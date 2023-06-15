const { Employee } = require("../../index");

describe("Here I Test Employee", function () {
  let emp;
  beforeEach(function () {
    emp = new Employee("ramy", 27, 4);
  });
  describe("here i test calculateSalary", function () {
    it("should return 5000 when yearsOfExp is less than 5", function () {
      expect(emp.calculateSalary()).toBe(5000);
    });
    it("should return 9000 when yearsOfExp is greater than 5", function () {
      emp.yearsOfExp = 7;
      emp.calculateSalary();
      //   expect(emp.calculateSalary()).toBe(9000);
      expect(emp.salary).toBe(9000);
    });
  });

  describe("here i test setAddress", function () {
    it("test if pass country as egypt and city as minia ,then address will be {country:'egypt',city:'minia'}", function () {
      emp.setAddress("egypt", "minia");
      expect(emp.address).toEqual({ country: "egypt", city: "minia" });
      expect(emp.address.city).toBe("minia");
      expect(Object.keys(emp.address)).toContain("city");
    });
  });
  describe("here i test getPromoted", function () {
    // it("test get promoted works correctly", function () {

    //   //spy
    // //   spyOn(emp, "sendEmployeeEmail");
    //   emp.calculateSalary();
    //   emp.getPromoted(emp.sendEmployeeEmail);
    //   expect(emp.salary).toBe(6000);
    //   expect(emp.sendEmployeeEmail).toHaveBeenCalled();
    //   expect(emp.sendEmployeeEmail).toHaveBeenCalledWith(
    //     "you got promoted to be senior"
    //   );
    //   expect(emp.sendEmployeeEmail).toHaveBeenCalledTimes(1)
    // });

    //mocking
    it("should call fake function", function () {
      let fakeFunction = jasmine.createSpy("mock function");
      emp.calculateSalary();
      emp.getPromoted(fakeFunction);
      expect(emp.salary).toBe(6000);
      expect(fakeFunction).toHaveBeenCalled();
      expect(fakeFunction).toHaveBeenCalledWith(
        "you got promoted to be senior"
      );
      expect(fakeFunction).toHaveBeenCalledTimes(1);
    });
  });

  describe("here i test deptInfo", function () {
    it("should call getCode and getLocation form parameter object return A101: minia", function () {
      let fakeObj = jasmine.createSpyObj(["getCode", "getLocation"]);
      fakeObj.getCode.and.callFake(function(){
          return "A101";
      })
    //   fakeObj.getLocation.and.callFake(function(){
    //       return "minia";
    //   })
    fakeObj.getLocation.and.returnValue('minia')
     let returndeString= emp.deptInfo(fakeObj);
      expect(fakeObj.getLocation).toHaveBeenCalled()
      expect(fakeObj.getCode).toHaveBeenCalled()
      expect(fakeObj.getCode).toHaveBeenCalledTimes(1)
      expect(returndeString).toBe('A101: minia')

    });
  });
});
