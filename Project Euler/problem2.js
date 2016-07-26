function p2()
{
  var n = 4000000;
  var a = 1;
  var b = 2;
  var sum = 0;

  while( b < n )
  {
   var even = b / 2;
   if ( Number.isInteger(even))
     {
       sum = sum + b;
     }
    else
      {

      }
   var c = b;
   b = b + a;
    a = c;
  }

  alert(sum);

}
