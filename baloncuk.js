<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baloncuklar</title>
  <style type="text/css">
  *,
  *::before,
  *::after{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }  
  html,
  body{
      width: 100%;
      height: 100%;
      background-color: #000;
  }

 .container {
     width: 100%;
     height: 100%;
     overflow: hidden;
     position: relative;
 }

.container span {
    position: absolute;
    background: transparent;
    box-shadow: inset 0px 0px 20px #fff ;
    border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
   animation: anime 2s linear infinite;
   -webkit-animation: anime 2s linear infinite;
}

.container span ::before{
content: "";
width: 100%;
height: 100%;
background: radial-gradient(#fff,transparent);
display: block;
border-radius: 50%;
-webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  transform: scale(0.5) translate(-30%,-30%);
  -webkit-transform:  scale(0.5) translate(-30%,-30%);
  -moz-transform:  scale(0.5) translate(-30%,-30%);
  -ms-transform:  scale(0.5) translate(-30%,-30%);
   -o-transform:  scale(0.5) translate(-30%,-30%);



}

@keyframes anime {
    0% {
     transform: translateY(0%);
  -webkit-transform: translateY(0%);
  -moz-transform: translateY(0%);
  -ms-transform: translateY(0%);
   -o-transform: translateY(0%);
     opacity: 1;
    }

100%{
    transform: translateY(1200%);
  -webkit-transform: translateY(1200%);
  -moz-transform: translateY(1200%);
  -ms-transform: translateY(1200%);
   -o-transform: translateY(1200%);
   opacity:0 ;
}

}


</style>
</head>
<body>
    
    <div class="container"></div>


<script type="text/javascript">

function Baloncuklar(){
    const container = document.querySelector('.container')
    const baloncuk = document.createElement('span')
    const boyut = Math.random()*100


    baloncuk.style.width = boyut + 'px'
    baloncuk.style.height = boyut + 'px'
    baloncuk.style.left = Math.random()*innerWidth + 'px'

    container.appendChild(baloncuk)

    setTimeout(() => {
        baloncuk.remove()
    }, 2000);
}


setInterval(Baloncuklar,300);
 </script>

</body>
</html>
