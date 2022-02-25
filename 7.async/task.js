class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [],
            this.timerId = null;
    }



    addClock(time, callback, idCall) {
        if (idCall === undefined) {
            throw new Error('error text');
        }
        if (this.alarmCollection.some((el) => el.id === idCall)) {
            console.error('Ошибка');
            return;
        }
        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: idCall

        })
    }
    removeClock(id) {
        let beforeLength = this.alarmCollection.length;
        this.alarmCollection.filter((el) => el.id != id);
        let afterLength = this.alarmCollection.length;
        return beforeLength > afterLength;
            
        

    }

    getCurrentFormattedTime() {
        let nowTime = new Date();
        let stringTimeHours = nowTime.getHours();
        stringTimeHours = stringTimeHours < 10 ? "0" + stringTimeHours : stringTimeHours;
        let stringTimeMinutes = nowTime.getMinutes();
        stringTimeMinutes = stringTimeMinutes < 10 ? "0" + stringTimeMinutes : stringTimeMinutes;
        return `${stringTimeHours}:${stringTimeMinutes}`;

    }

    start() {
        let checkClock = () => {
            this.alarmCollection.forEach((el) => {
                if (el.time === this.getCurrentFormattedTime()) {
                    el.callback();
                }

                if (this.timerId !== null) {
                    this.timerId = setInterval(checkClock, 3000);
                }
            })

        }
    }

    stop (){
        if(this.timerId!==null){
            clearInterval(this.timerId);
            this.timerId=null;
        }



    }
    printAlarms (){
        this.alarmCollection.forEach((el)=>{
            console.log(`${el.id} + ${el.time}`)
        });
    }

    clearAlarms (){
        this.stop();
        this.alarmCollection=[];

    }

}


