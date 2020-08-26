class Form {

  constructor() {
    
    this.login = createButton('Login');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.acc=createButton("New Account");
    this.name=createInput("Enter Username");
    this.password=createInput("","Password");
    this.Username=createInput("Enter Name");
    this.pass=createInput("","Password");
    this.ok=createButton("Enter");
    this.enter=createButton("Enter");
    this.O2=createInput("");
    this.bp=createInput("");
    this.p=createInput("");
    this.water=createInput("");
    this.save=createButton("Enter to save data");
    this.data=createButton("Advisory");


  }
  
  display(){
    this.title.html("Immunity Tracker");
    this.title.position(displayWidth/2 - 50, 0);
  
    
    this.login.position(displayWidth/2 + 10, displayHeight/2);
    this.acc.position(750,500);
   
    
    
    this.login.mousePressed(()=>{

      this.login.hide();
      this.name.position(700,200);
      this.password.position(700,250);
      this.ok.position(780,300);


      
    })
    this.acc.mousePressed(()=>{
      
     
      this.name.hide();
      this.password.hide();
      this.acc.hide();
      this.login.hide();
      
      this.Username.position(700,200);
      this.pass.position(700,250);
      this.enter.position(780,300);


    });

    this.ok.mousePressed(()=>{

      this.login.hide();
      this.name.hide();
      this.password.hide();
      this.ok.hide();

      this.O2.position(700,300);
      this.bp.position(700,350);
      this.p.position(700,400);
      this.water.position(700,450);

      
    })

    this.ok.mousePressed(()=>{

      this.login.hide();
      this.name.hide();
      this.password.hide();
      this.ok.hide();
      this.acc.hide();

      var text6=createElement("h2");
      text6.html("Oxygen level");
      text6.position(700,150);
      this.O2.position(700,200);

      var text7=createElement("h2");
      text7.html("Blood Pressure level");
      text7.position(700,250);
      this.bp.position(700,300);

      var text8=createElement("h2");
      text8.html("Pulse rate");
      text8.position(700,350);
      this.p.position(700,400);

      var text9=createElement("h2");
      text9.html("Water intake in glasses");
      text9.position(700,450);
      this.water.position(700,500);

      this.save.position(700,550);
      this.data.position(1200,150);
      
    })
    this.enter.mousePressed(()=>{

      this.login.hide();
      this.name.hide();
      this.password.hide();
      this.ok.hide();
      this.Username.hide();
      this.pass.hide();

      var text6=createElement("h2");
      text6.html("Oxygen level");
      text6.position(700,150);
      this.O2.position(700,200);

      var text7=createElement("h2");
      text7.html("Blood Pressure level");
      text7.position(700,250);
      this.bp.position(700,300);

      var text8=createElement("h2");
      text8.html("Pulse rate");
      text8.position(700,350);
      this.p.position(700,400);

      var text9=createElement("h2");
      text9.html("Water intake in glasses");
      text9.position(700,450);
      this.water.position(700,500);

      this.save.position(700,550);
      this.data.position(1200,150);

      
      
    })

    

   this.data.mousePressed(()=>{
    
    this.O2.hide();
    this.bp.hide();
    this.p.hide();
    this.water.hide();
    this.save.hide();
    this.data.hide();
    
    

    var text1=createElement("h2");
    text1.html("Advise :");
    text1.position(300,200);

    var text2=createElement("h2");
    text2.html("1. If Oxygen level less than 95% walk in fresh air ,eat a bowl of green vegetables and do respiratory exercises daily to increase O2 level");
    text2.position(300,300);

    var text3=createElement("h2");
    text3.html("2. If blood pressure less than 90/60mmHg then increase Suger intake and meditate for atleast 30 mins daily.If blood pressure higher than 140/90mmHg drink water regularly and do exersice");
    text3.position(300,400);

    var text4=createElement("h2");
    text4.html("3. If pulse rate lower than 60 then medidate and do breathing exersice daily for 30 mins atleast and if higher than 100 do meditation,walking and drink water");
    text4.position(300,500);

    var text5=createElement("h2");
    text5.html("If water intake less than 3 literes try drinking 4 litres of water daily");
    text5.position(300,600);




    
  })
    

  }
}
