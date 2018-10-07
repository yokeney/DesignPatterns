class People{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        alert(`${this.name} eat something`)
    }
    speak(){
        alert(`${this.name} 年龄 ${this.age} speak something`)
    }
}
//babel-loader版本要到7
class Student extends People{
    constructor(name,age,number){
        super(name,age);
        this.number=number;
    }
    study(){
        alert(`${this.name} study`)
    }
}
let xiaoming=new Student("yoke",20,'A1');
xiaoming.study();
xiaoming.eat();
class A extends People{
    constructor(name,age,number);
    this.name=name;
    this.age=age;
}
