function p3()
{
  var n = 600851475143;
  var a = 0;
  var b = 1;


  while(a < b)
  {
     b = n / a;
     a++;

     if( Number.isInteger(b) )
     {
      n = b;
      console.log("b=" + b);
    }
     else {

     }
  }

  alert(n);

}
