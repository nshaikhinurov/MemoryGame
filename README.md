# Memory Game

Браузерная карточная игра "Memory". Тестовое задание на стажировку 2017-2018 для направления front-end разработки в компании СКБ Контур.

## Mockup

![](https://github.com/nshaikhinurov/MemoryGame/blob/master/src/img/mockup.jpg "MockUp")

## Задача

Реализовать веб-интерфейс и клиентскую логику браузерной игры «Memory» в соответствии с предложенными правилами и дизайном.

### Правила игры

«Memory» – это карточная настольная игра на одного игрока. Игрок открывает любые две карты за один ход. Если при открытии образовалась пара одинаковых по масти и номиналу карт, то они пропадают со стола, а игроку начисляются очки. Если открытые карты оказались разными, то они переворачиваются обратно рубашкой вверх, а количество набранных очков уменьшается.

Очки пересчитываются на каждом ходу по следующему принципу:
* при образовании пары прибавляется число нераскрытых пар, умноженное на 42;
* при несовпадении пары вычитается число раскрытых пар, умноженное на 42.


## Описание решения и инструкция по запуску

Разработка велась с использованием React, Webpack, Babel и др. Подробнее в файле package.json

### Зависимости

Используются внешние пакеты, не входящие в архив. Их необходимо скачать в корень проекта с помощью npm:

```
npm i
```

### Запуск

Для работы локального сервера использовался пакет webpack-dev-server, который можно запустить командой

```
npm run devserver
```

По умолчанию проект будет доступен по адресу http://localhost:8090/

## Автор

**Наиль Шайхинуров** — n.shaikhinurov@gmail.com

## Благодарность

Спасибо СКБ Контур за интересное задание! Получил много вдохновения. Вы няши!
