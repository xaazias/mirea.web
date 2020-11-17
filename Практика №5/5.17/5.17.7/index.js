let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ], day = '';

for (let i = 0; i < arr.length; i++) {
   if ((i + 1) == (new Date).getDay()) {
       document.write(`<i>${arr[i]} </i>`);
       day = arr[i];
   }
   else document.write(`${arr[i]} `);
}