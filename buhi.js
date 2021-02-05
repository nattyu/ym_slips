function han(){
    //tab2の記入
    var text0 = document.getElementById("order_date1").value;
    document.getElementById("order_date2").innerHTML = gen_date_str(text0);

    var text1 = document.getElementById("teamname").value;
    document.getElementById("team").innerHTML = `${text1}部`;

    var text2 = document.getElementById("teachername").value;
    document.getElementById("teacher").innerHTML = text2;

    var text3 = document.getElementById("captainname").value;
    document.getElementById("captain").innerHTML = text3;

    /*tab3の記入*/

    //フォームの値
    var Thing = document.getElementsByClassName("things");
    var Quant = document.getElementsByClassName("howmany");
    var Cost = document.getElementsByClassName("cost");
    var Remark = document.getElementsByClassName("remarks");

    //伝票の値
    var th = document.getElementsByClassName("thing");
    var qu = document.getElementsByClassName("quant");
    var co = document.getElementsByClassName("cos");
    var rem = document.getElementsByClassName("remark");
    var sub = document.getElementsByClassName("subtotal");
    var total = 0;

    for(var i = 0; i < Thing.length; i++){
        th[i].innerHTML = Thing[i].value;
        qu[i].innerHTML = Quant[i].value;
        co[i].innerHTML = `￥${Cost[i].value}`;
        rem[i].innerHTML = Remark[i].value;
        //小計の処理
        var k = parseInt(Quant[i].value) * parseInt(Cost[i].value);
        if(Thing[i].value == ""){
            sub[i].innerHTML = "";
            co[i].innerHTML = "";
            total = total;
        }else{
            sub[i].innerHTML = `￥${k}`;
            total += k;
        }
    }
    document.getElementById("Total").innerHTML = `￥${total}`;
    document.getElementById("mon").innerHTML = total;
}

function gen_date_str(str){
    var Y = str.substr(0, 4);
    var M = str.substr(5, 2);
    var D = str.substr(8, 2);
    var compare = Y+M+D; //string
    var reiwa = '20190501'; //2019年5月1日より令和
    var mmdd, yy;
    if (compare < reiwa){
        yy = parseInt(Y)-1988;
    } else if (Y == '2019') {
        yy = '元';
    } else {
        yy = parseInt(Y)-2018;
    }
    mmdd = parseInt(M)+"　月　"+parseInt(D)+"　日　"; 
    if (compare < reiwa){
        return "　　平成　"+yy+"　年　　"+mmdd; // 平成24年5月9日
    } else {
        return "　　令和　"+yy+"　年　　"+mmdd; // 令和2年5月9日
    }
}

function addrow(){
    var tabl = document.getElementById("Data");
    var newRow = tabl.insertRow();

    var newCell = newRow.insertCell();
    var newText = document.createTextNode("No1");
    newCell.appenfChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(18);
    newCell.appendChild(newText);
}

function func_print(){
    window.print();
}
