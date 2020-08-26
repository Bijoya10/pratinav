class Form {

  constructor() {
    this.acc=createButton("New Account");
    this.login = createButton('Login');
    this.title = createElement('h2');
    this.flag=0;
  }
  
  display(){
    
    background(immunity);

    this.title.html("Immunity Tracker");
    this.title.position(displayWidth/2 - 50, 0);
    
    this.login.position(displayWidth/2 + 10, displayHeight/2);
    this.acc.position(displayWidth/2 -10, displayHeight/2+100);
   
    this.login.mousePressed(()=>{
      this.flag=1;
      this.login.hide();
      this.acc.hide();
      login1=new Login();
      login1.display();
      
    })
    this.acc.mousePressed(()=>{
      this.flag=2;
      this.acc.hide();
      this.login.hide();
      login1=new Login();
      login1.display();
    });

  }
}
