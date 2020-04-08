const second1 = document.querySelector('.Second1');
const second = document.querySelector('.Second');
const minute = document.querySelector('.Minute');
const minute1 = document.querySelector('.Minute1');
const hour = document.querySelector('.Hour');
const hour1 = document.querySelector('.Hour1');


setInterval(function(){
    //Second
    sec_1 = Date().slice(23,24);    
    pos_6 = -sec_1 *65;
    second1.style.top = `${pos_6}px`;
    
    if(sec_1==0){
        document.querySelector(`.Second1>.Number:nth-of-type(${10})`).classList.remove('popup');
    }
    else{
        document.querySelector(`.Second1>.Number:nth-of-type(${+(sec_1)})`).classList.remove('popup');
    }
    document.querySelector(`.Second1>.Number:nth-of-type(${+(sec_1)+1})`).classList.add('popup');

    sec = Date().slice(22,23);
    pos_5 = -sec*65;
    second.style.top = `${pos_5}px`;
    
    if(sec==0)
    {
        document.querySelector(`.Second>.Number:nth-of-type(${6})`).classList.remove('popup');
    }
    else{
        document.querySelector(`.Second>.Number:nth-of-type(${+(sec)})`).classList.remove('popup');
    }
    document.querySelector(`.Second>.Number:nth-of-type(${+(sec)+1})`).classList.add('popup');
    
    //Minute
    min_1 = Date().slice(20,21);
    pos_4 = -min_1*65;
    minute1.style.top = `${pos_4}px`;
    if (min_1==0) {
        document.querySelector(`.Minute1>.Number:nth-of-type(${10})`).classList.remove('popup');
    }
    else {
        document.querySelector(`.Minute1>.Number:nth-of-type(${+(min_1)})`).classList.remove('popup');
    }
    document.querySelector(`.Minute1>.Number:nth-of-type(${+(min_1)+1})`).classList.add('popup');

    min = Date().slice(19,20);
    pos_3 = -min*65;
    minute.style.top = `${pos_3}px`;
    if(min==0){
        document.querySelector(`.Minute>.Number:nth-of-type(${6})`).classList.remove('popup');
    }
    else{
        document.querySelector(`.Minute>.Number:nth-of-type(${+(min)})`).classList.remove('popup');
    }
    document.querySelector(`.Minute>.Number:nth-of-type(${+(min)+1})`).classList.add('popup');

    //Hour
    hr_1 = Date().slice(17,18);
    pos_2 = -hr_1*65;
    hour1.style.top = `${pos_2}px`;
    if (hr_1==0) {
        document.querySelector(`.Hour1>.Number:nth-of-type(${10})`).classList.remove('popup');
    } 
    else {
        document.querySelector(`.Hour1>.Number:nth-of-type(${+(hr_1)})`).classList.remove('popup');
        
    }
    document.querySelector(`.Hour1>.Number:nth-of-type(${+(hr_1)+1})`).classList.add('popup');

    hr = Date().slice(16,17);
    pos_1 = -hr*65;
    hour.style.top = `${pos_1}px`;
    if (hr==0) {
        document.querySelector(`.Hour>.Number:nth-of-type(${3})`).classList.remove('popup');
    } 
    else {
        document.querySelector(`.Hour>.Number:nth-of-type(${+(hr)})`).classList.remove('popup');
    }
    document.querySelector(`.Hour>.Number:nth-of-type(${+(hr)+1})`).classList.add('popup');
},1000)    

