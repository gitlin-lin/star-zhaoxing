var eprve = document.querySelector('.prev');     //上一张按钮
var enext = document.querySelector('.next');     //下一张按钮
var esico = document.getElementById('icolist').getElementsByTagName('li'); //图片集合
var eicolist = document.querySelector('#icolist'); //按钮列表获取
var eimglist = document.querySelector('.imglist');  //图片列表元素
var left = 0;
var timer;
var imglist = document.querySelector('.imglist')
run();


/*定义一个自动轮播函数*/

function run() {
    if (left <= -4000) {
        left = 0
    }

    var m = Math.floor(-left / 1000);   /*获取当前照片序号*/
    /*用n来控制一整张照片出来时切换
    先判定此时停留多久再进行循环*/
    var t = (left % 1000 == 0) ? t = 1200 : t = 10;
    timer = setTimeout(run, t);
    icochange(m);
    imglist.style.marginLeft = left + "px";
    left -= 10;
}

/*切换到指定张数*/
function imgchange(n) {
    let num = -(n * 1000);
    imglist.style.marginLeft = num + 'px';
    left = num;
}


eprve.onclick = function () {
    let prvego = Math.floor(-left / 1000) - 1;
    if (prvego == -1) {
        prvego = 3;/*为第一张时，上一张是第四张*/
    }
    imgchange(prvego);
}
enext.onclick = function () {
    let nextgo = Math.floor(-left / 1000) + 1;
    if (nextgo == 4) {
        nextgo = 0;/*为第4张时，下一张是第一张*/
    }
    imgchange(nextgo);
}



function icochange(m) {
    for (let index = 0; index < esico.length; index++) {
        esico[index].style.backgroundColor = '';
    }

    if (m < esico.length) {
        esico[m].style.backgroundcolor = 'red';
    }
}

/*点击下表切换*/
eicolist.onclick = function () {
    var tg = event.target;
    let ico = tg.innerHTML - 1;
    esico[ico].style.backgroundcolor = 'red';
    imgchange(ico);
    icochange(ico);
}

eimglist.onmouseover = function () {
    clearTimeout(timer);
}
eimglist.onmouseout = function () {
    run();
}


