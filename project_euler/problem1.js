function p1()
{
  var n = 1000;
  var sum = 0;
for ( i=0 ; i < n ; i++)
  {
    var a = i /3;
    var b = i/5;
    if ( Number.isInteger(a))
      {
        sum = sum + i;
      }
    else if( Number.isInteger(b) )
    {
      sum = sum + i;
    }
    else
      {

      }
  }

alert(sum);

}
