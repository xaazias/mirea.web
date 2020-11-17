let lang = 'ru', day = 3;

let weekObj = {
    'ru': ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
};

alert(weekObj[lang][day - 1]);