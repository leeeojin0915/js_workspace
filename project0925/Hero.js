/*게임의 주인공 비행기를 정의한다*/
class Hero{
    // 주인공이 태어날 때, 어떠한 초기화작업을 진행할 지를 결정짓는 메서드
    // 특히 생성자 메서드라 부른다.
    // 아래의 생성자함수를 호출하는 자는 반드시 주인공 이미지가 붙게 될 부모요소를 전달해야 한다.
    // 즉, container변수 값을 결정지어야 한다.
    constructor(container,x,y,width,height,heX){
        //constructor에 선언된 변수는 현재 객체(인스턴스)것.
        //this가 붙어있는 변수는, 해당 인스턴스와 생명력을 같이한다
        // 즉,해당 인스턴스마다 각각 고유하게 보유할 수 있는 변수
        // 언제 소멸되나?인스턴스가 살아있는 한..
        this.x=x;
        this.y=y;
        this.heX=heX;
        //생성자 내에서는 반드시 변수명앞에 this를 명시해야한다
        // 왜? 객체 안에서의 코드 작성이므로..
        this.img=document.createElement("img"); //<img>
        this.img.src="../../images/shooting/plane.png";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";
        //화면에 부착하기
        //부모요소에 부착하자
        container.appendChild(this.img);
    }

    //비행기의 동작방식을 결정짓는 메서드
    move(){
        document.body.addEventListener("keydown",function(){
            this.key=Event.keyCode;
            if(this.key==37){
                this.x+=this.heX;
                this.img.style.left=this.x+"px";
            }else if(this.key==38){
                this.y-=this.heX;
                this.img.style.top=this.y+"px";
            }
        });
    }
}