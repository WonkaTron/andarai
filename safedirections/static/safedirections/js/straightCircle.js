function straightPassInCircle(a1,b1,center,radius){
    var d = math.subtract(a1,b1);
    var f = math.subtract(b1, center);
    var r = radius;
    var a = math.dot( d, d );
    var b = 2*math.dot( d ,f );
    var c = math.dot( f,f ) - r*r;

    var discriminant = b*b-4*a*c;
    if( discriminant < 0 )
    {
      return false;
    }
    else{
        return true;
    }
}