const create = async () => {
 const fs = require('fs');

 fs.writeFile('fresh.txt', 'I am fresh and young', function (error) {
    if (error) throw error; // если возникла ошибка
    console.log(
        'Асинхронная запись файла завершена. Содержимое файла:'
    );
    let data = fs.readFileSync('fresh.txt', 'utf8');
    console.log(data); // выводим считанные данные
 });

    
};

await create();
