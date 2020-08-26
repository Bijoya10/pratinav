class Advisory{
    constructor(){
        this.text1=createElement("h4");
        this.text2=createElement("h4");
        this.text3=createElement("h4");
        this.text4=createElement("h4");
        this.text5=createElement("h4");
    }
    hide(){
        this.text1.hide();
        this.text2.hide();
        this.text3.hide();
        this.text4.hide();
        this.text5.hide();
    }
    display(){
        
        this.text1.html("Advise :");
        this.text1.position(300,200);

        
        this.text2.html("1. If Oxygen level less than 95% walk in fresh air ,eat a bowl of green vegetables and do respiratory exercises daily to increase O2 level");
        this.text2.position(300,300);

        
        this.text3.html("2. If blood pressure less than 90/60mmHg then increase Suger intake and meditate for atleast 30 mins daily.If blood pressure higher than 140/90mmHg drink water regularly and do exersice");
        this.text3.position(300,400);
            
        this.text4.html("3. If pulse rate lower than 60 then medidate and do breathing exersice daily for 30 mins atleast and if higher than 100 do meditation,walking and drink water");
        this.text4.position(300,500);

            
        this.text5.html("If water intake less than 3 literes try drinking 4 litres of water daily");
        this.text5.position(300,600);
    }
}