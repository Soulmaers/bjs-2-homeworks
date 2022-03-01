class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [],
            this.timerId = null
    }



    addClock(time, callback, idCall) {
        if (idCall === undefined) {
            throw new Error("error text");
        }
        if (this.alarmCollection.some((el) => el.id === idCall)) {
            console.error("Ошибка");
            return;
        }
        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: idCall,
        });

    }

    removeClock(id) {
        let beforeLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((el) => el.id !== id);
        let afterLength = this.alarmCollection.length;
        return beforeLength > afterLength;
    }


    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours();
        if (now.getHours() < 10) {
            hours = "0" + hours;
        } else {
            hours;
        }
        let minutes = now.getMinutes();
        if (now.getMinutes() < 10) {
            minutes = "0" + minutes;
        } else {
            minutes
        }
        return (`${hours}:${minutes}`);
    }

    start() {
        let checkClock = () =>
            this.alarmCollection.forEach((el) => {
                if (el.time === this.getCurrentFormattedTime()) {
                    el.callback;
                } if (this.timerId !== null) {
                    this.timerId = setInterval(checkClock, 3000);
                }

            })

    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId === null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((el) => {
            console.log(el.id + el.time);

        })

    }
    clearAlarms() {
        this.stop,
            this.alarmCollection = [];

    }
}



let testAlarmClock = new AlarmClock();
testAlarmClock.addClock("19:30", () => console.log("Подъем"), 1);
testAlarmClock.addClock("19:31", () => {
    console.log("Второй будильник");
    testAlarmClock.removeClock(2);

}, 2);
testAlarmClock.addClock("19:33", () => {
    console.log("Вставай!");
    testAlarmClock.stop();
    testAlarmClock.clearAlarms();
    testAlarmClock.printAlarms();
}, 3);
testAlarmClock.printAlarms();
testAlarmClock.start();