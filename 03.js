// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. 
let time = {
    hours: 12,
    minutes: 35,
    seconds: 40
}
// - Функция вывода времени на экран. 
print = (time) => {
    console.log(`${time.hours}h ${time.minutes}m ${time.seconds}s`)
}
print(time)
// - Функция изменения времени на переданное количество часов. 
changeHours = (time, hours) => {
    console.log("function change hours")
    let totalHours = time.hours + hours
    if (totalHours >= 24) {
        time.hours = totalHours % 24
    } else {
        time.hours = totalHours
    }
}
// - Функция изменения времени на переданное количество минут. 
changeMinutes = (time, minutes) => {
    console.log("function change minutes")
    let totalMinutes = time.minutes + minutes
    if (totalMinutes >= 60) {
        let newMinutes = totalMinutes % 60
        let newHours = ~~(totalMinutes / 60)
        time.minutes = newMinutes
        changeHours(time, newHours)
    } else {
        time.minutes = totalMinutes
    }
}
// - Функция изменения времени на переданное количество секунд. 
changeSecond = (time, change) => {
    console.log("function change seconds")
    let totalSecond = time.seconds + change
    if (totalSecond >= 60) {

        let newSeconds = totalSecond % 60
        let newMinutes = ~~(totalSecond / 60)
        time.seconds = newSeconds
        changeMinutes(time, newMinutes)
    } else {
        time.seconds = totalSecond
    }

    console.table(`${time.hours}h ${time.minutes}m ${time.seconds}s`)
}
changeSecond(time, 6000)



// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
// Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».