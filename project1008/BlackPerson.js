/*상속=BlackPerson 클래스는 Person 클래스의 코드까지 사용할 수 있도록 확장하겠다 */
class BlackPerson extends Person{
    // this: 나를 가리키는 변수 : 명칭이 이미 정해져 있다
    constructor(){
        //this.name="nigro"; -에러발생 이유? 부모보다 시급한 초기화는 없기 때문에
        //부모의 탄생이 최우선시 된다..당연)부모가 존재하야 자식이 존재하니까
        super(5,10); //부모의 constructor()
        // 부모 생성자 호출 이유? 생물학적으로도 당연한 것, 자식의 초기화보다 최우선시 해야하는
        // 작업은 부모의 존재 즉, 초기화 이므로..
        //상태는 변수로 표현(즉, 속성=property)
        this.name="nigro"; //정상 수행(부모 생성자 호출보다 아래에 두었기 때문에)
        this.color="black";
        console.log("I am sub class(BlackPerson)");
    }
}