const string=`
.content {
  width: 30%;
  height: 50vh;
  bottom: 0;
  left: 0;
}
.content .head {
  position: absolute;
  width: 200px;
  height: 160px;
  left: 20px;
  bottom: 40px;
}
.content .head .face {
  position: absolute;
  height: 110px;
  width: 100px;
  border-radius: 50%;
  left: 50%;
  margin-left: -55px;
  border: 3px solid black;
  transform: rotate(90deg);
}
.content .head .face::before {
  content: "";
  display: block;
  position: absolute;
  right: -60px;
  bottom: 15px;
  margin-left: -50px;
  background: #fff;
  border-radius: 50%;
  width: 100px;
  height: 80px;
  transform: translateY(-3px);
}
.content .head .face .eye {
  position: absolute;
  background: #000;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 45%;
  left: 30%;
  z-index: 1;
}
.content .head .face .eye.left {
  transform: translateY(15px);
}
.content .head .face .eye.right {
  transform: translateY(-15px) translateX(-3px);
}
.content .head .face .mouth {
  position: absolute;
  border: 3px solid black;
  width: 15px;
  top: 35%;
  left: 40%;
  height: 23px;
  border-radius: 50%;
  transform: translateY(3px);
}
.content .head .face .mouth::before {
  content: "";
  display: block;
  position: absolute;
  background: #fff;
  top: -12px;
  bottom: -10px;
  left: -18px;
  right: -5px;
  border-radius: 50%;
  transform: translateX(-5px) translateY(1px);
}
.content .head .face .rouge {
  position: absolute;
  background-color: pink;
  border: 3px solid pink;
  top: 45%;
  left: 45%;
  border: none;
  width: 10px;
  height: 2px;
}
.content .head .face .rouge::before {
  content: "";
  position: absolute;
  left: 2px;
  background-color: pink;
  bottom: -6px;
  width: 10px;
  height: 2px;
}
.content .head .face .rouge.left {
  transform: translateY(23px) rotate(5deg);
}
.content .head .face .rouge.right {
  transform: translateY(-28px) rotate(5deg);
  left: 38%;
}
.content .head .face .rouge.right::before {
  bottom: -4px;
}
.content .head .handLeft {
  width: 15px;
  height: 30px;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-radius: 0 5px 5px 5px;
  position: absolute;
  left: 28%;
  top: 59%;
  transform: rotate(25deg);
}
.head .bodyLeft {
  position: absolute;
  left: 48%;
  top: 65%;
  margin-left: -33px;
  width: 2px;
  height: 45px;
  border-left: 3px solid black;
  transform: rotate(12deg);
  z-index: 2;
}

.head .footerLeft {
  width: 36.3px;
  height: 10px;
  position: absolute;
  bottom: 2px;
  left: 30%;
  background: #fff;
  border-bottom: 3px solid black;
  border-radius: 3px 0 0 0;
  overflow: unset;
}
.head .footerLeft::before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  bottom: -3px;
  left: -6px;
  content: "";
  display: block;
  border: 3px solid black;
  z-index: -1;
}
.head .footerLeft::after {
  content: "";
  display: block;
  width: 6px;
  height: 12px;
  border-right: 3px solid black;
  overflow: hidden;
  position: absolute;
  right: 0px;
  bottom: 0;
}
.head .leg {
  position: absolute;
  width: 12px;
  height: 12px;
  bottom: 10px;
  border-radius: 50% 50% 0 0;
  border: 3px solid black;
  border-color: black black transparent black;
  margin-left: -5px;
  left: 49.2%;
}
.head .footerRight {
  width: 36.5px;
  height: 10px;
  position: absolute;
  bottom: 2px;
  right: 30.58%;
  background: #fff;
  border-bottom: 3px solid black;
  border-radius: 3px 0 0 0;
  overflow: unset;
}
.head .footerRight::before {
  content: "";
  display: block;
  width: 6px;
  height: 12px;
  border-left: 3px solid black;
  position: absolute;
  left: 0px;
  bottom: 0;
}
.head .footerRight::after {
  content: "";
  display: block;
  width: 9px;
  height: 10px;
  border-radius: 0 50% 50% 0;
  border: 3px solid black;
  border-color: black black black transparent;
  position: absolute;
  bottom: -3px;
  right: -6.5px;
}
.head .bodyRight {
  position: absolute;
  right: 48%;
  top: 60%;
  margin-right: -30px;
  width: 2px;
  height: 53px;
  border-left: 3px solid black;
  transform: rotate(-12deg);
}
.head .handRight {
  position: absolute;
  width: 35px;
  height: 3px;
  left: 65%;
  top: 50%;
  border-top: 3px solid black;
  transform: rotate(-30deg);
}
.head .handRight::before {
  content: "";
  display: block;
  width: 8px;
  height: 10px;
  position: absolute;
  border: 3px solid black;
  right: -5px;
  border-radius: 50% 50% 0 0;
  border-bottom-color: transparent;
  top: -10px;
}
.head .handRight2 {
  position: absolute;
  width: 7.5px;
  height: 3px;
  right: 28px;
  top: 42.5%;
  border-top: 3px solid black;
  transform: rotate(-30deg);
}
.head .handRight2::before {
  position: absolute;
  content: "";
  display: block;
  width: 9px;
  height: 8px;
  right: -9px;
  top: -3px;
  border: 3px solid black;
  border-left: none;
  border-radius: 0 50% 50% 0;
  transform: rotate(-1deg);
}
.head .handRight3 {
  position: absolute;
  width: 40px;
  height: 3px;
  right: 30px;
  top: 56%;
  border-top: 3px solid black;
  transform: rotate(-30deg);
}
.head .handRight3::before {
  content: "";
  display: block;
  position: absolute;
  width: 14px;
  height: 6px;
  border: 3px solid black;
  border-radius: 50% 0 73% 0;
  border-top: none;
  border-left: none;
  right: -13px;
  top: -6px;
}
.head .heart {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10%;
  top: 23%;
  border: 1px solid pink;
  border-color: transparent pink pink transparent;
  transform: rotate(45deg);
  animation: jump 1s infinite linear alternate-reverse;
}
.head .heart::before {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50% 50% 0 0;
  border: 1px solid pink;
  border-color: pink transparent transparent transparent;
  top: -50%;
  left: 0;
}
.head .heart::after {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50% 0 0 50%;
  border: 1px solid pink;
  border-color: transparent transparent transparent pink;
  top: 0;
  left: -50%;
}
.head .heart,
.head .heart::before,
.head .heart::after {
  background: pink;
  border: none;
}

`

let n=0;
let m=0;

let id=setInterval(()=>{
    if(n>=string.length){
      $('.buttonWapper').show()
        window.clearInterval(id)
        return 
    }
    $('#style1').text(string.substring(0,n))
    n++
},0)

$('.button').on('click',()=>{
  $('.ulWapper').toggle()
  
   
})