// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом. 
let car = {
    name: 'Alfa Romeo',
    model: 'Giulia',
    year: 2017,
    speed: 100
}
// - Функция для вывода на экран информации об автомобиле.
function print(car) {
    console.table(car)
}
print(car)
// - Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
function timeDistance(car, distance) {
    let time = distance / car.speed
    time += ~~(time / 4)
    console.log(time.toFixed(1), 'hours')
}
timeDistance(car, 300)