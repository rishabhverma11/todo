function User()
{
  this.name="";
  this.point=100;
  this.givepoint=function givepoint(targetUser)
  {
    targetUser.point +=1;

  }
}

var user1=new User();
var user2=new User();


user1.name="Bucky";
user2.name="Wendy";
user1.givepoint(user2);

console.log("Bucky "+ user1.point);
console.log("wendy "+ user2.point);




