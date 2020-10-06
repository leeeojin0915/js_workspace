/*총알을 정의한다*/
class Bullet{
    //총알이 태어날 때 부여 할 속성들을 생성자에서 처리한다.
    constructor(src,x,y,width,height,velX,velY){
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img=document.createElement("img");
        this.img.src=this.src; //폭탄,총알 등의 무기의 종류가 여러가지이므로 변수로 놓자
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px"; //우주선의 너비의 절반을 유추
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px"; 
        wrapper.appendChild(this.img); //화면에 부착
    }
    tick(){
        //총알의 물리량 변화
        this.y+=this.velY;

        //총알이 한걸음 씩 진행할 때마다 배열에 존재하는 모든 적군을 대상으로 충돌했는지 여부 판단
        for(var i=0;i<enemyArray.length;i++){
            var result=collisionCheck(this.img, enemyArray[i].img);
            if(result){
                //alert("맞췄디");
                //너죽(적군배열에서 요소삭제splice(index, 갯수), 화면에서도삭제removeChild)
                var img=enemyArray[i].img;
                wrapper.removeChild(img);
                enemyArray.splice(0,1);
                //나죽자(총알배열에서 요소삭제splice(index,갯수) 화면에서도 삭제 removeChild)
                wrapper.removeChild(this.img); //화면에서 제거
                var index=bulletArray.indexOf(this); //현재 총알의 인스턴스가 배열의 몇 번째에 존재하는지 알아낸다
                bulletArray.splice(index,1);
            }
        }
    }
    render(){
        //변화된 물리량을 화면에 표시(그래픽처리)
        this.img.style.top=this.y+"px";
    }
}