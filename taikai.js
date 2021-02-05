function han(){
    //tab2への記入
    var text6 = document.getElementById("teamname").value;
    document.getElementById("team").innerHTML = `${text6}部`;

    var text7 = document.getElementById("teachername").value;
    document.getElementById("teacher").innerHTML = text7;

    var text8 = document.getElementById("captainname").value;
    document.getElementById("captain").innerHTML = text8;

    document.getElementById("Total1").innerHTML = `￥${count()}`;

    /*tab3の記入*/
    var text0 = document.getElementById("order_date1").value;
    document.getElementById("order_date2").innerHTML = gen_date_str(text0);

    var CupName = document.getElementsByClassName("cup_name");
    var Pay = document.getElementsByClassName("pay");
    var People = document.getElementsByClassName("people");
    var Cost = document.getElementsByClassName("cost");

    for(var i = 0; i < 3; i++){
        document.getElementsByClassName("names")[i].innerHTML = CupName[i].value;
        document.getElementsByClassName("pays")[i].innerHTML = Pay[i+1].value;
        document.getElementsByClassName("ppl")[i].innerHTML = People[i+1].value;
        document.getElementsByClassName("costs")[i].innerHTML = Cost[i+1].value;
        if(document.getElementsByClassName("names")[i].innerHTML != ""){
            document.getElementsByClassName("subtotal")[i].innerHTML = parseInt(People[i+1].value) * parseInt(Cost[i+1].value);
        }else{
            document.getElementsByClassName("subtotal")[i].innerHTML = "";
        }
    }
    document.getElementById("Total2").innerHTML = `　￥${count()}`;
}

function count(){
    var total = 0;
    var p = document.getElementsByClassName("people");
    var f = document.getElementsByClassName("cost");
    for(var i = 1; i <= 3; i++){
        if(p[i].value == ""){
            total = total;
        }else{
            total += parseInt(p[i].value) * parseInt(f[i].value);
        }
    }

    return total;
}

function circle(value, check){
    var k = parseInt(value);
    if(check == true){
        document.getElementsByClassName("cir")[k].style.border = "black solid 1px";
    }else{
        document.getElementsByClassName("cir")[k].style.border = "none";
    }
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
