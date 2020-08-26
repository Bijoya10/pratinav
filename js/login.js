class Login{
    constructor(){
        this.name=createInput("Enter_Username");
        this.password=createInput("","Password");
        this.ok=createButton("Enter");        
    }

    display(){
      this.name.position(700,200);
      this.password.position(700,250);
      this.ok.position(780,300);

      this.ok.mousePressed(()=>{
      if(form.flag===1){

        this.name.hide();
        this.password.hide();
        this.ok.hide();
        for(var p in allPlayers){
          if(this.name.value()===allPlayers[p].name && this.password.value()===allPlayers[p].password){
            player.name=this.name.value();
            player.password=this.password.value();
            player.index=allPlayers[p].index;
          }
        }
        userData=new UserData();
        userData.display();
      
      }  else if(form.flag===2){

          player.name=this.name.value();
          player.password=this.password.value();
          playerCount++;
          player.index=playerCount;
          player.updateCount(playerCount);
          player.update();
          this.name.hide();
          this.password.hide();
          this.ok.hide();
          userData=new UserData();
          userData.display();

      }
        
        
      })

    }  
}