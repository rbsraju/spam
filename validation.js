function detect(){
  var url= document.getElementById("user").value;

    var string1=url.replace("https://","")
var position=string1.indexOf("/");
if(position==-1)
{
  var string2=string1.slice(0);
}
else{
  var string2=string1.slice(0,position);
}

document.getElementById("result1").style.display="none";
document.getElementById("result2").style.display="none";
 var i;
 var Boolean=false;
var weblist=["www.youtube.com","www.tutorialspoint.com","www.google.com","mail.google.com","www.hotstar.com","login.microsoftonline.com","systems.aspiresys.com","www.flipkart.com"];
 for( i=0;i < weblist.length;i++)
  {
    if(string2==weblist[i])
        {
           Boolean=true;
        }
          else
       {

       }
  }
  if(string2.indexOf("$")!=-1)
  {
     Boolean=false;
  }
    else
 {

 }
  if(Boolean==true)
  {
    document.getElementById("result1").style.display="block";
  }
  else{
    document.getElementById("result2").style.display="block";
  }
}
