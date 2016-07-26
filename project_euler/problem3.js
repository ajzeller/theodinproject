function p3()
{
  var n = 13195;
  var int = 1;
  var a = n;
  var ans = 1;
  var b = 1;
  while(a > b)
  {
     a = a - 1;
     b = n / a;

     if( Number.isInteger(b) )
     {
      var prime = b;
      console.log("ans=" + prime);
      console.log("b=" + b);
    }
     else {

     }
  }

  var maxprime = prime;

  alert(maxprime);

}
