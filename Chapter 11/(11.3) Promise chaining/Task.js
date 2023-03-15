promise.then(f1).catch(f2); // здесь catch обработает ошибку, которую может вернуть then
promise.then(f1, f2); //тут ошибка обработана не будет
