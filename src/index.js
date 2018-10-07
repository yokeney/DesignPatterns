class jQuery{
    constructor(select){
        let slice=Array.prototype.slice;
        let dom=slice.call(document.querySelectorAll(select));
        let len=dom?dom.length:0;
        for (var i = 0; i < i.length; i++) {
            this[i]=dom[i];
        }
        this.length=len;
        this.select=select || '';

    }
    append(node){

    }
    html(name){

    }
    hasClass(){

    }
    //此处省略n个api
}
window.$=function(Select){
    //工厂模式
    return new jQuery(Select)
}

var $p=$('p');
console.log($p);
console.log($p.append);
