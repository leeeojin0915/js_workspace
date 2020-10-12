class Thumbnail2{
    constructor(container,width,height,border,x,src){
        this.div=document.createElement("div");
        this.img=document.createElement("img");
        this.border=border;
        this.container=container;
        this.width=width;
        this.height=height;
        this.src=src;
        this.x=x;
        var me=this;
        
        this.img.style.width=this.width-(border*2)+"px";
        this.img.style.height=this.height-(border*2)+"px";
        this.img.src=this.src;
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.border+"px solid khaki";
        this.div.style.boxSizing="border-box";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.src=src;

        
        //클릭시 이미지 출력
        this.img.addEventListener("click",function(){
            var index=photoArray.indexOf(me);
            createContent(index);
        });

        this.div.appendChild(this.img);
        this.container.appendChild(this.div);
    }
}