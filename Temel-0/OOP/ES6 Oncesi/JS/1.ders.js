 // Construction 

function Employee(name,age,salary) {
    this.name = name;
    this.age =age;
    this.salary = salary;

    this.showInfos = function () {
        console.log(this.name,this.age,this.salary);
    }
}
const emp1= new Employee("Enes",21,4000);
const emp2= new Employee("Kerem",22,4500);

emp1.showInfos();
emp2.showInfos();