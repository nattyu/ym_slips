function han(){
    //tab2への記入
    var text1 = document.getElementById("cup").value;
    document.getElementById("CUP").innerHTML = `【大会名】${text1}`;

    var text2 = document.getElementById("place").value;
    document.getElementById("PLACE").innerHTML = `【会場名】${text2}`;

    var text3 = document.getElementById("held").value;
    document.getElementById("HELD").innerHTML = `【主催】${text3}`;

    var text4 = document.getElementById("station").value;
    document.getElementById("STATION").innerHTML = `【最寄駅】${text4}`;

    var text5 = document.getElementById("cup_date1").value;
    document.getElementById("cup_date2").innerHTML = "【大会開催日】" + gen_date_str(text5);
    
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

    //道順、交通手段、人数、運賃
    var Way = document.getElementsByClassName("miti");
    var How = document.getElementsByClassName("how");
    var People = document.getElementsByClassName("people");
    var Fare = document.getElementsByClassName("cost");

    document.getElementsByClassName("ways")[0].innerHTML = "【草加駅】 → " + Way[0].value;
    document.getElementsByClassName("hows")[0].innerHTML = How[1].value;
    document.getElementsByClassName("ppl")[0].innerHTML = People[1].value;
    document.getElementsByClassName("fare")[0].innerHTML = Fare[1].value;
    document.getElementsByClassName("subtotal")[0].innerHTML = parseInt(People[1].value) * parseInt(Fare[1].value);

    if(Way[3].value == "" && Way[1].value == ""){
        document.getElementsByClassName("ways")[1].innerHTML = "";
        document.getElementsByClassName("ways")[2].innerHTML = "";
    }else if(Way[3].value == "" && Way[1].value != ""){
        document.getElementsByClassName("ways")[1].innerHTML = Way[1].value + " → " + Way[2].value;
        document.getElementsByClassName("ways")[2].innerHTML = "";
        document.getElementsByClassName("hows")[1].innerHTML = How[2].value;
        document.getElementsByClassName("ppl")[1].innerHTML = People[2].value;
        document.getElementsByClassName("fare")[1].innerHTML = Fare[2].value;
        document.getElementsByClassName("subtotal")[1].innerHTML = parseInt(People[2].value) * parseInt(Fare[2].value);
    }else{
        document.getElementsByClassName("ways")[1].innerHTML = Way[1].value + " → " + Way[2].value;
        document.getElementsByClassName("ways")[2].innerHTML = Way[3].value + " → " + Way[4].value;
        document.getElementsByClassName("hows")[1].innerHTML = How[2].value;
        document.getElementsByClassName("hows")[2].innerHTML = How[3].value;
        document.getElementsByClassName("ppl")[1].innerHTML = People[2].value;
        document.getElementsByClassName("ppl")[2].innerHTML = People[3].value;
        document.getElementsByClassName("fare")[1].innerHTML = Fare[2].value;
        document.getElementsByClassName("fare")[2].innerHTML = Fare[3].value;
        document.getElementsByClassName("subtotal")[1].innerHTML = parseInt(People[2].value) * parseInt(Fare[2].value);
        document.getElementsByClassName("subtotal")[2].innerHTML = parseInt(People[3].value) * parseInt(Fare[4].value);
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

function func_print(){
    window.print();
}