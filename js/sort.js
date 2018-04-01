//自由驱动工作室
//作者：林鑫

J(function(){
        var Initials=J('.initials');
        var LetterBox=J('#letter');
        Initials.find('ul').append('<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li><li>#</li>');
        initials();

        J(".initials ul li").click(function(){
            var _this=J(this);
            var LetterHtml=_this.html();
            LetterBox.html(LetterHtml).fadeIn();

            Initials.css('background','rgba(145,145,145,0.6)');
            
            setTimeout(function(){
                Initials.css('background','rgba(145,145,145,0)');
                LetterBox.fadeOut();
            },1000);

            var _index = _this.index()
            if(_index==0){
                J('.popup-save').animate({scrollTop: '0px'}, 300);//点击第一个滚到顶部
            }else if(_index==27){
                var DefaultTop=J('#default').position().top;
                J('.popup-save').animate({scrollTop: DefaultTop+'px'}, 300);//点击最后一个滚到#号
            }else{
                var letter = _this.text();
                console.log(letter)
                if(J('#'+letter).length>0){
                    var LetterTop = J('#'+letter).position().top;
                    console.log(LetterTop)
                    // J('.popup-save').animate({scrollTop: LetterTop-45+'px'}, 300);
                    J('.popup-save').animate({scrollTop: LetterTop+'px'}, 300);
                }
            }
        })

        var windowHeight=J(window).height();
        var InitHeight=windowHeight-45;
        Initials.height(InitHeight);
        var LiHeight=InitHeight/28;
        Initials.find('li').height(LiHeight);
})

function initials() {//公众号排序
    var SortList=J(".sort_list");
    var SortBox=J(".sort_box");
    SortList.sort(asc_sort).appendTo('.sort_box');//按首字母排序
    function asc_sort(a, b) {
        return makePy(J(b).find('.num_name').text().charAt(0))[0].toUpperCase() < makePy(J(a).find('.num_name').text().charAt(0))[0].toUpperCase() ? 1 : -1;
    }

    var initials = [];
    var num=0;
    SortList.each(function(i) {
        var initial = makePy(J(this).find('.num_name').text().charAt(0))[0].toUpperCase();
        if(initial>='A'&&initial<='Z'){
            if (initials.indexOf(initial) === -1)
                initials.push(initial);
        }else{
            num++;
        }
        
    });

    J.each(initials, function(index, value) {//添加首字母标签
        SortBox.append('<div class="sort_letter" id="'+ value +'">' + value + '</div>');
    });
    if(num!=0){SortBox.append('<div class="sort_letter" id="default">#</div>');}

    for (var i =0;i<SortList.length;i++) {//插入到对应的首字母后面
        var letter=makePy(SortList.eq(i).find('.num_name').text().charAt(0))[0].toUpperCase();
        switch(letter){
            case "A":
                J('#A').after(SortList.eq(i));
                break;
            case "B":
                J('#B').after(SortList.eq(i));
                break;
            case "C":
                J('#C').after(SortList.eq(i));
                break;
            case "D":
                J('#D').after(SortList.eq(i));
                break;
            case "E":
                J('#E').after(SortList.eq(i));
                break;
            case "F":
                J('#F').after(SortList.eq(i));
                break;
            case "G":
                J('#G').after(SortList.eq(i));
                break;
            case "H":
                J('#H').after(SortList.eq(i));
                break;
            case "I":
                J('#I').after(SortList.eq(i));
                break;
            case "J":
                J('#J').after(SortList.eq(i));
                break;
            case "K":
                J('#K').after(SortList.eq(i));
                break;
            case "L":
                J('#L').after(SortList.eq(i));
                break;
            case "M":
                J('#M').after(SortList.eq(i));
                break;
            case "O":
                J('#O').after(SortList.eq(i));
                break;
            case "P":
                J('#P').after(SortList.eq(i));
                break;
            case "Q":
                J('#Q').after(SortList.eq(i));
                break;
            case "R":
                J('#R').after(SortList.eq(i));
                break;
            case "S":
                J('#S').after(SortList.eq(i));
                break;
            case "T":
                J('#T').after(SortList.eq(i));
                break;
            case "U":
                J('#U').after(SortList.eq(i));
                break;
            case "V":
                J('#V').after(SortList.eq(i));
                break;
            case "W":
                J('#W').after(SortList.eq(i));
                break;
            case "X":
                J('#X').after(SortList.eq(i));
                break;
            case "Y":
                J('#Y').after(SortList.eq(i));
                break;
            case "Z":
                J('#Z').after(SortList.eq(i));
                break;
            default:
                J('#default').after(SortList.eq(i));
                break;
        }
    };
}