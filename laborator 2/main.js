  document.getElementById("butt").addEventListener('click', function() {
  let num1 = document.getElementById('num1').value;
  let num2 =  document.getElementById('num2').value;
  let num3 = document.getElementById('num3').value;
  let mathRandom = Math.floor(Math.random() * 50) + 1;
  alert("ar fi trebuit să alegi " + mathRandom);
  console.log(num1);
    if (num1 == mathRandom || num2 == mathRandom || num3 == mathRandom){
      $("span").text("Felicitări");
    } else{
      $("span").text("Scuze, ai pierdut. Încearcă din nou!")
    }
})