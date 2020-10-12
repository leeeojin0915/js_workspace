/*모든 인종을 아우를 수 있는 최상위 객체인 사람을 정의한다
상위객체일 수록 보편적인 특징을 갖고 있다.(우리의 현실과 동일)
*/
class Person{
    constructor(eye,arm){
        this.eye=eye;
        this.arm=arm;
        console.log("I am super class(Person)");
        console.log("my eyes %d, arm %d",this.eye,this.arm);
    }
    walk(){
        console.log("두발로 걸어요");
    }
    speak(){
        console.log("말을 해요")    
    }
}