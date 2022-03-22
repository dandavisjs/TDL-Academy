const combination = [
  {
    answer: 1,
    question: {
      eng: 'Before you back under a trailer, make sure the:',
      rus: 'Перед тем, как вернуться под прицеп, убедитесь, что:',
    },
    answers: [
      {
        eng: 'Trailer brakes are locked.',
        rus: 'Тормоза прицепа заблокированы.',
      },
      {
        eng: 'Tractor protection valve is normal.',
        rus: 'Защитный клапан трактора в норме.',
      },
      {
        eng: 'Air brakes are off.',
        rus: 'Пневматические тормоза выключены.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'You are coupling a tractor to a semi-trailer and have backed up but are not under it. What should you hook up before backing under?',
      rus: 'Вы прицепляете тягач к полуприцепу и дали задний ход, но не находитесь под ним. Что вы должны подключить прежде чем отступить?',
    },
    answers: [
      {
        eng: 'The electrical service cable.',
        rus: 'Электрический служебный кабель.',
      },
      {
        eng: 'The emergency and service air lines.',
        rus: 'Аварийные и служебные воздуховоды.',
      },
      {
        eng: 'Nothing: back up and lock the fifth wheel.',
        rus: 'Ничего: дайте задний ход и заблокируйте седельно-сцепное устройство.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'You should not back a tractor under a trailer until the whole air system is:',
      rus: 'Вы не должны загонять трактор под прицеп до тех пор, пока вся воздушная система не будет:',
    },
    answers: [
      {
        eng: 'At normal pressure.',
        rus: 'При нормальном давлении',
      },
      {
        eng: 'Bled down to half the maximum pressure.',
        rus: 'Бросил давление до половины максимального.',
      },
      {
        eng: 'Between 60 and 80 psi.',
        rus: 'От 60 до 80 фунтов на квадратный дюйм.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'You are coupling a semi-trailer to your tractor but have not yet backed under. The trailer is at the right height when:',
      rus: 'Вы прицепляете к тягачу полуприцеп, но еще не сдали назад. Прицеп находится на нужной высоте когда.',
    },
    answers: [
      {
        eng: 'The kingpin is about 1 ¼ inches above the fifth wheel.',
        rus: 'Шкворень находится примерно на 1 ¼ дюйма выше седельно-сцепного устройства.',
      },
      {
        eng: 'The end of the kingpin is even with the top of the fifth wheel.',
        rus: 'Конец шкворня находится на одном уровне с верхней частью седельно-сцепного устройства.',
      },
      {
        eng: 'It will be raised slightly when the tractor is backed under it.',
        rus: 'Он немного приподнимется, когда трактор подъедет задним ходом.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'How should you test the tractor semi-trailer connection for security?',
      rus: 'Как проверить надежность соединения тягача с полуприцепом?',
    },
    answers: [
      {
        eng: 'Put the tractor in gear and pull ahead with a sharp jerk.',
        rus: 'Переключите коробку передачб и резким рывком едьте вперед.',
      },
      {
        eng: 'Pull gently forward in low gear against the locked trailer brakes. Then look at it carefully.',
        rus: 'Осторожно едьте вперед на низской передаче на заблокированных тормозов прицепа. Потом внимательно осмотрте.',
      },
      {
        eng: 'Rock the trailer back and forth with the trailer brakes locked.',
        rus: 'Раскачивайте прицеп вперед и назад с заблокированными тормозами прицепа.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'If the service air line comes apart while you are driving a combination vehicle, but the emergency line stays together, what will happen right away?',
      rus: 'Если во время движения на комбинированном автомобиле разорвался трубопровод служебного воздуха, а аварийный трубопровод остался вместе, что будет сразу?',
    },
    answers: [
      {
        eng: 'The emergency tractor brakes will come on.',
        rus: 'Сработают аварийные тормоза трактора.',
      },
      {
        eng: 'The trailer’s air tank will exhaust through the open line.',
        rus: 'Воздушный бак трейлера опустошится через открытую линию.',
      },
      {
        eng: 'Nothing is likely to happen until you try to apply the brakes.',
        rus: 'Ничего не произойдет, пока вы не попытаетесь нажать на тормоза.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'Which part of the kingpin should the locking jaws close around?',
      rus: 'Вокруг какой части шкворня должны сомкнуться фиксирующие кулачки?',
    },
    answers: [
      {
        eng: 'The shank',
        rus: 'Шейка',
      },
      {
        eng: 'The head',
        rus: 'Голова',
      },
      {
        eng: 'The base',
        rus: 'Основа',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'When should you use the hand valve to park a combination vehicle?',
      rus: 'Когда следует использовать ручной клапан для парковки комбинированного автомобиля?',
    },
    answers: [
      {
        eng: 'To park at loading docks',
        rus: 'Припарковаться у погрузочных доков',
      },
      {
        eng: 'To park on a grade',
        rus: 'Парковаться на уровне',
      },
      {
        eng: 'Never',
        rus: 'Никогда',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The fifth wheel locking lever is not locked after the jaws close around the kingpin. This means that:',
      rus: 'Рычаг блокировки седельно-сцепного устройства не блокируется после того, как захваты смыкаются вокруг шкворня. Это означает, что:',
    },
    answers: [
      {
        eng: 'You can set the fifth wheel for weight balance.',
        rus: 'Вы можете установить пятое колесо для балансировки веса.',
      },
      {
        eng: 'The parking lock is off and you may drive away.',
        rus: 'Парковочный замок выключен, и вы можете уехать.',
      },
      {
        eng: 'The coupling is not right and should be fixed before driving the coupled unit.',
        rus: 'Муфта неправильная и должна быть исправлена до начала движения сцепленного агрегата.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'You supply air to the trailer tanks by:',
      rus: 'Вы подаете воздух в цистерны прицепа:',
    },
    answers: [
      {
        eng: 'Pushing in the trailer air supply valve.',
        rus: 'Вдавливание клапана подачи воздуха прицепа.',
      },
      {
        eng: 'Pulling out the trailer air supply valve.',
        rus: 'Вытягивание клапана подачи воздуха прицепа.',
      },
      {
        eng: 'Connecting the service line glad hand.',
        rus: 'Подключение сервисной линии с радостью.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'You have coupled with a semi-trailer. In what position should you put the front trailer supports/landing gear before driving away?',
      rus: 'Вы сцепились с полуприцепом. В какое положение следует ставить передние опоры прицепа/шасси прежде чем уехать?',
    },
    answers: [
      {
        eng: 'Raised ½ way with the crank handle removed.',
        rus: 'Поднят на ½ пути со снятой рукояткой',
      },
      {
        eng: 'Fully raised with the crank handle secured in its bracket.',
        rus: 'Полностью поднят, рукоятка закреплена в кронштейне.',
      },
      {
        eng: 'Three turns off the top with the crank handle secured in its bracket.',
        rus: 'Три оборота сверху с рукояткой, закрепленной в кронштейне.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'In normal driving, some drivers use the hand valve before applying the brake pedal to prevent a jack-knife. Which of these statements are true?',
      rus: 'При обычном вождении некоторые водители используют ручной клапан перед нажатием на педаль тормоза, чтобы предотвратить складывание. Какие из этих утверждений верны?',
    },
    answers: [
      {
        eng: 'It should not be done.',
        rus: 'Этого делать не следует.',
      },
      {
        eng: 'It results in less skidding than using the brake pedal alone.',
        rus: 'Это приводит к меньшему заносу, чем при использовании только педали тормоза.',
      },
      {
        eng: 'It is the best way to brake and keep the truck in a straight line.',
        rus: 'Это лучший способ затормозить и удержать грузовик на прямой.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The air leakage rate for a combination vehicle (engine off, brakes off) should be less than ____ psi per minute.',
      rus: 'Скорость утечки воздуха для комбинированного транспортного средства (двигатель выключен, тормоза выключены) должна быть менее ____ фунтов на квадратный дюйм в минуту.',
    },
    answers: [
      {
        eng: '1',
        rus: '1',
      },
      {
        eng: '2',
        rus: '2',
      },
      {
        eng: '3',
        rus: '3',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'Why should you be sure that the fifth wheel plate is greased as required?',
      rus: 'Почему вы должны быть уверены, что пластина седельно-сцепного устройства смазана в соответствии с требованиями?',
    },
    answers: [
      {
        eng: 'To ensure good electrical connections.',
        rus: 'Для обеспечения хорошего электрического соединения.',
      },
      {
        eng: 'To prevent steering problems.',
        rus: 'Во избежание проблем с рулевым управлением.',
      },
      {
        eng: 'To reduce heat and noise.',
        rus: 'Для уменьшения тепла и шума.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'A driver crossed the air lines when hooking up to an old trailer. What will happen?',
      rus: 'Водитель пересек воздушные линии, прицепляясь к старому прицепу. Что случится?',
    },
    answers: [
      {
        eng: 'If the trailer has no spring brakes, you can drive away, but you will not have trailer brakes.',
        rus: 'Если у прицепа нет пружинных тормозов, вы можете уехать, но у вас не будет тормозов прицепа.',
      },
      {
        eng: 'The hand valve will apply the tractor brakes instead of the trailer brakes.',
        rus: 'Ручной клапан задействует тормоза трактора вместо тормозов прицепа.',
      },
      {
        eng: 'The brake pedal will work the trailer spring brakes instead of the air brakes.',
        rus: 'Педаль тормоза приводит в действие пружинные тормоза прицепа вместо пневматических тормозов.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'Air lines on a combination vehicle are often colored to keep them from getting mixed up. The emergency line is ____; the service line is ____.',
      rus: 'Воздушные магистрали на комбинированных транспортных средствах часто окрашивают, чтобы они не перепутались. Экстренная линия____; сервисная линия____',
    },
    answers: [
      {
        eng: 'Red;blue ',
        rus: 'text',
      },
      {
        eng: 'Black; Yellow',
        rus: 'text',
      },
      {
        eng: 'Blue; Red',
        rus: 'text',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'There are two things that a driver can do to prevent a roll-over. They are; (1) Keep the cargo as close to the ground as possible; and (2)',
      rus: 'Есть две вещи, которые водитель может сделать, чтобы предотвратить опрокидывание. Они есть; (1) Держите груз как можно ближе к земле; и (2)',
    },
    answers: [
      {
        eng: 'Make sure that the brakes are properly adjusted.',
        rus: 'Убедитесь, что тормоза правильно отрегулированы.',
      },
      {
        eng: 'Go slowly around turns.',
        rus: 'Медленно проходите повороты.',
      },
      {
        eng: 'Keep the fifth wheel’s free play as tight as possible.',
        rus: 'Максимально уменьшите свободный ход седельно-сцепного устройства.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'After you supply air to the trailer, make sure the air lines are not crossed and the trailer brakes are working. This is done by?',
      rus: 'После того, как вы подали воздух в прицеп, убедитесь, что воздуховоды не перекрещиваются и тормоза прицепа работают. Этот делается?',
    },
    answers: [
      {
        eng: 'Turning on the parking brakes from the cab.',
        rus: 'Включение стояночных тормозов из кабины.',
      },
      {
        eng: 'Applying and releasing the trailer brakes and listening for brake sounds.',
        rus: 'Задействуйте и отпустите тормоза прицепа и прислушайтесь к звукам тормозов.',
      },
      {
        eng: 'Lifting the brake pedal.',
        rus: 'Поднятие педали тормоза.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'Semi-trailers made before 1975 that are equipped with air brakes:',
      rus: 'Полуприцепы, изготовленные до 1975 г. и оборудованные пневматическими тормозами:',
    },
    answers: [
      {
        eng: 'Are easier to brake because they are heavier.',
        rus: 'Их легче тормозить, потому что они тяжелее.',
      },
      {
        eng: 'Usually need a glad hand converter.',
        rus: 'Обычно нужен конвертер с радостной рукой.',
      },
      {
        eng: 'Often do not have spring brakes.',
        rus: 'Часто не имеют пружинных тормозов.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'Which of these statements is true?',
      rus: 'Какое из этих утверждений верно?',
    },
    answers: [
      {
        eng: 'Always delay braking a heavy vehicle until you have no other choice.',
        rus: 'Всегда откладывайте торможение тяжелого транспортного средства до тех пор, пока у вас не останется другого выбора.',
      },
      {
        eng: 'Light vehicles need more braking power to stop than heavy ones.',
        rus: 'Легким автомобилям для остановки требуется больше тормозного усилия, чем тяжелым.',
      },
      {
        eng: '“Bobtail” tractors can take longer to stop than a combination vehicle loaded to the maximum gross weight.',
        rus: 'Тракторы типа «бобтейл» могут остановиться дольше, чем автопоезда, загруженные до максимальной полной массы.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'Why should you lock the tractor glad hands (or dummy couplers) to each other when you are not towing a trailer?',
      rus: 'Почему вы должны блокировать тяги трактора (или заглушки) друг к другу, когда вы не буксируете трейлер?',
    },
    answers: [
      {
        eng: 'The connected brake circuit becomes a back up air tank.',
        rus: 'Подключенный тормозной контур становится резервным воздушным резервуаром.',
      },
      {
        eng: 'It will keep dirt and water out of the lines.',
        rus: 'Это предотвратит попадание грязи и воды в линии.',
      },
      {
        eng: 'If you did not, you could never build system pressure.',
        rus: 'Если бы вы этого не сделали, вы бы никогда не смогли создать давление в системе.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'You are coupling a tractor and semi-trailer and have connected the air lines. Before backing under the trailer, you should:',
      rus: 'Вы сцепляете тягач и полуприцеп и соединили воздуховоды. Прежде чем залезть под трейлер, вы должны:',
    },
    answers: [
      {
        eng: 'Supply air to the trailer system, then pull out the air supply knob to lock the trailer brakes.',
        rus: 'Подайте воздух в систему прицепа, затем потяните ручку подачи воздуха, чтобы заблокировать тормоза прицепа.',
      },
      {
        eng: 'Make sure that the trailer brakes are off.',
        rus: 'Убедитесь, что тормоза прицепа выключены.',
      },
      {
        eng: 'Apply the brakes twice to alert others.',
        rus: 'Дважды нажмите на тормоз, чтобы предупредить других.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'The hand valve should be used:',
      rus: 'Ручной клапан следует использовать:',
    },
    answers: [
      {
        eng: 'Only with the foot brake.',
        rus: 'Только с ножным тормозом.',
      },
      {
        eng: 'To test the trailer brakes.',
        rus: 'Для проверки тормозов прицепа',
      },
      {
        eng: 'Only when the trailer is fully loaded. ',
        rus: 'Только при полной загрузке прицепа.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'The safety catch for the fifth wheel locking lever must be ____ for a coupling to be complete.',
      rus: 'Предохранитель рычага блокировки седельно-сцепного устройства ____  чтобы муфта была полной. ',
    },
    answers: [
      {
        eng: 'Over the locking lever.',
        rus: 'Над фиксирующим рычагом.',
      },
      {
        eng: 'Under the locking lever.',
        rus: 'Под запирающим рычагом.',
      },
      {
        eng: 'Through the locking lever.',
        rus: 'Через фиксирующий рычаг.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The front trailer supports/landing gear are up and the trailer is resting on the tractor. Make sure:',
      rus: 'Передние опоры/шасси прицепа подняты, прицеп опирается на тягач. Убедитесь:',
    },
    answers: [
      {
        eng: 'There is enough clearance between the tops of the tractor tires and the nose of the trailer.',
        rus: 'Между верхними частями шин трактора носовой частью прицепа имеется достаточный зазор.',
      },
      {
        eng: 'There is enough clearance between the tractor frame and the landing gear.',
        rus: 'Между рамой трактора и шасси имеется достаточный зазор.',
      },
      {
        eng: 'Both A and B are correct.',
        rus: 'И А, и Б верны.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'Your emergency air line breaks or gets pulled apart while you are driving. The loss of pressure will cause the:',
      rus: 'Ваш аварийный воздуховод рвется или разрывается во время вождения. Падение давления вызывает:',
    },
    answers: [
      {
        eng: 'Emergency trailer brakes to come on.',
        rus: 'Включаются аварийные тормоза прицепа.',
      },
      {
        eng: 'Air compressor to unload instead of pumping air.',
        rus: 'Воздушный компрессор разгрузится вместо накачки воздуха.',
      },
      {
        eng: 'Trailer supply valve to open.',
        rus: 'Клапан подачи прицепа откроется.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'You have a major leak in the service line and you put on the brakes.',
      rus: 'У вас большая утечка в сервисной линии, и вы тормозите.',
    },
    answers: [
      {
        eng: 'Trailer emergency brakes to come on.',
        rus: 'Включаются аварийные тормоза прицепа.',
      },
      {
        eng: 'Trailer tank pressure to be lost.',
        rus: 'Падает давление в баке прицепа.',
      },
      {
        eng: 'Tractor spring brakes to lock on.',
        rus: 'Пружинные тормоза трактора блокируются.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'You are driving a combination vehicle when the trailer breaks away, pulling apart both air lines. You would expect:',
      rus: 'Вы едете на комбинированном автомобиле, когда прицеп срывается, разрывая обе воздушные линии. Последствия:',
    },
    answers: [
      {
        eng: 'The tractor to lose all air pressure.',
        rus: 'Трактор потерял все давление воздуха.',
      },
      {
        eng: 'The tractor protection valve to close.',
        rus: 'Защитный клапан трактора закрывается',
      },
      {
        eng: 'The trailer supply valve to stay open.',
        rus: 'Клапан подачи прицепа останется открытым',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'You are about to back your tractor under a semi-trailer. The trailer is at the right height when the:',
      rus: 'Вы собираетесь загнать свой тягач под полуприцеп. Прицеп находится на правильной высоте, если:',
    },
    answers: [
      {
        eng: 'Trailer landing gear is fully extended.',
        rus: 'Шасси прицепа полностью выпущено.',
      },
      {
        eng: 'End of the kingpin is even with the top of the fifth wheel.',
        rus: 'Конец шкворня находится на одном уровне с верхней частью седельно-сцепного устройства.',
      },
      {
        eng: 'Trailer will be lifted slightly when the tractor backs under it.',
        rus: 'Прицеп немного приподнимется, когда трактор заедет под него.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'How much space should be between the upper and lower fifth wheel after coupling? ',
      rus: 'Какое расстояние должно быть между верхним и нижним седельно-сцепным устройством после сцепки?',
    },
    answers: [
      {
        eng: 'At least ½ inch.',
        rus: 'Минимум ½ дюйма.',
      },
      {
        eng: 'None.',
        rus: 'Никакого.',
      },
      {
        eng: 'Just enough to see light through it.',
        rus: 'Достаточно, чтобы увидеть свет сквозь.',
      },
    ],
  },
];

export default combination;
