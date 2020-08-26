class UserData{
    constructor(){
        this.text6=createElement("h2");
        this.text7=createElement("h2");
        this.text8=createElement("h2");
        this.text9=createElement("h2");

        this.bp=createInput(player.bp);
        

        this.save=createButton("Enter to save data");
        this.data=createButton("Advisory");
        
    }
    display(){
        clear();
        background("black");
        this.text6.html("Oxygen level");
        this.text6.position(700,150);
        this.bp.position(900,170);
        
        this.text7.html("Blood Pressure level");
        this.text7.position(700,250);
     
        this.text8.html("Pulse rate");
        this.text8.position(700,350);
     
        this.text9.html("Water intake in glasses");
        this.text9.position(700,450);

        this.save.position(700,550);
        this.data.position(1200,150);

    this.data.mousePressed(()=>{
    
        this.text6.hide();
        this.text7.hide();
        this.text8.hide();
        this.text9.hide();

        this.save.hide();
        this.data.hide();
    
        clear();
        background("black");
        advisory.display();
        })
    
    this.save.mousePressed(()=>{

        player.bp=this.bp.value();
        player.updateData();
     })
    }
}