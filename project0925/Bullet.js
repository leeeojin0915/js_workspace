/*총알을 정의한다*/
class Bullet{
    constructor(container,x,y,velX){
        this.x=x; //총알의 left좌표
        this.y=y; //총알의 top좌표
        this.velX=velX; //총알의 속도를 결정짓는 변수

        this.img=document.createElement("img");
        this.img.src="../../images/shooting/ball.png";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=30+"px";
        this.img.style.height=30+"px";
        this.img.style.position="absolute";
        container.appendChild(this.img);
    }
    move(){
        this.x+=this.velX;
        this.img.style.left=this.x+"px";
    }
}