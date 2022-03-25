const airbrakes = [
  {
    answer: 2,
    question: {
      eng: 'Air braking takes more time than hydraulic braking because air:',
      rus: 'Пневматическое торможение занимает больше времени, чем гидравлическое торможение, потому что пневматическое:',
    },
    answers: [
      {
        eng: 'Brakes use different brake drums.',
        rus: 'В тормозах используются разные тормозные барабаны.',
      },
      {
        eng: 'Takes more time to flow through the lines than hydraulic fluid.',
        rus: 'Требует больше времени для протекания по линиям, чем гидравлическая жидкость.',
      },
      {
        eng: 'Is always leaking through airline fittings.',
        rus: 'Всегда протекает через штуцеры воздушных линий.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'If your truck has dual parking control valves, you can use pressure from a separate tank to:',
      rus: 'Если на вашем грузовике установлены двойные парковочные клапаны, вы можете использовать давление из отдельного бака для:',
    },
    answers: [
      {
        eng: 'Release the spring emergency parking brakes to move a short distance.',
        rus: 'Отпустите пружинный аварийный стояночный тормоз, чтобы проехать небольшое расстояние.',
      },
      {
        eng: 'Apply more brake pressure if the main tank is getting low.',
        rus: 'Примените большее тормозное усилие, если основной бак становится низким.',
      },
      {
        eng: 'Stay parked twice as long with your service air pressure.',
        rus: 'Оставайтесь на стоянке в два раза дольше с рабочим давлением воздуха.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'The driver must be able to see a warning before air pressure in the service air tanks falls below ____ psi.',
      rus: 'Водитель должен иметь возможность увидеть предупреждение до того, как давление воздуха в ресиверах рабочего воздуха упадет ниже __ psi',
    },
    answers: [
      {
        eng: '40',
        rus: '40',
      },
      {
        eng: '60',
        rus: '60',
      },
      {
        eng: '80',
        rus: '80',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The brake pedal in an air brake system:',
      rus: 'Педаль тормоза в пневматической тормозной системе:',
    },
    answers: [
      {
        eng: 'Controls the speed of the air compressor.',
        rus: 'Управляет скоростью воздушного компрессора.',
      },
      {
        eng: 'Always needs to be held down halfway during normal driving.',
        rus: 'Всегда нужно удерживать на полпути во время обычного вождения.',
      },
      {
        eng: 'Controls the air pressure applied to the brakes.',
        rus: 'Контролирует давление воздуха, подаваемое на тормоза',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'If your vehicle has an alcohol evaporator, it is there to:',
      rus: 'Если в вашем автомобиле есть испаритель спирта, он предназначен для:',
    },
    answers: [
      {
        eng: 'Rid the wet tank of alcohol that condenses and sits at the bottom.',
        rus: 'Избавьте мокрый бак от спирта, который конденсируется и остается на дне.',
      },
      {
        eng: 'Eliminate the need for daily tank draining.',
        rus: 'Исключите необходимость ежедневного слива бака.',
      },
      {
        eng: 'Reduce the risk of ice in air brake valves in cold weather.',
        rus: 'Уменьшите риск обледенения клапанов пневматического тормоза в холодную погоду.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'All vehicles equipped with air brakes have:',
      rus: 'Все автомобили, оснащенные пневматическими тормозами, имеют:',
    },
    answers: [
      {
        eng: 'A hydraulic system, in case the air system falls.',
        rus: 'Гидравлическая система на случай выхода из строя воздушной системы.',
      },
      {
        eng: 'A supply pressure gauge.',
        rus: 'Манометр подачи.',
      },
      {
        eng: 'An air use gauge.',
        rus: 'Датчик использования воздуха.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'If you do not have automatic tank drains, how often should you drain the oil and water from the bottom of compressed air storage tanks?',
      rus: 'Если у вас нет автоматического дренажа резервуаров, как часто вы должны сливать масло и воду со дна резервуаров для хранения сжатого воздуха?',
    },
    answers: [
      {
        eng: 'At the end of each day of driving?',
        rus: 'В конце каждого дня вождения?',
      },
      {
        eng: 'Once a week.',
        rus: 'Раз в неделю',
      },
      {
        eng: 'Every other week.',
        rus: 'Каждую последующую неделю',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'To check the free play of manual slack adjusters on S-cam brakes, you should park on:',
      rus: 'Чтобы проверить свободный ход ручных регуляторов зазора тормозов с S-образным кулачком, необходимо припарковаться на:',
    },
    answers: [
      {
        eng: 'Level ground with the parking brake on, then apply the service brake.',
        rus: 'Выровняйте поверхность с включенным стояночным тормозом, затем включите рабочий тормоз.',
      },
      {
        eng: 'Level ground, chock the wheels, and release the parking brake.',
        rus: 'Выровняйте поверхность, заблокируйте колеса и отпустите стояночный тормоз.',
      },
      {
        eng: 'Level ground and drain off air pressure before adjusting.',
        rus: 'Перед регулировкой выровняйте землю и стравите давление воздуха.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'Of the choices below, the first thing to do when a low air pressure warning comes on is:',
      rus: 'Из приведенных ниже вариантов первое, что нужно сделать при появлении предупреждения о низком давлении воздуха, это:',
    },
    answers: [
      {
        eng: 'Stop and safely park as soon as possible.',
        rus: 'Остановитесь и безопасно припаркуйтесь как можно скорее.',
      },
      {
        eng: 'Shift to the next higher gear.',
        rus: 'Переключитесь на следующую более высокую передачу.',
      },
      {
        eng: 'Open the air supply control valve.',
        rus: 'Откройте клапан управления подачей воздуха.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'If you must make an emergency stop, brake so you:',
      rus: 'Если вам необходимо совершить экстренную остановку, затормозите так, чтобы:',
    },
    answers: [
      {
        eng: 'Use the full power of the brakes and lock them.',
        rus: 'Используйте полную мощность тормозов и заблокируйте их.',
      },
      {
        eng: 'Can steer and your vehicle stays in a straight line.',
        rus: 'Может управлять, и ваш автомобиль остается на прямой линии.',
      },
      {
        eng: 'Use the hand brake first.',
        rus: 'Сначала используйте ручной тормоз.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The air compressor governor controls:',
      rus: 'Регулятор воздушного компрессора управляет:',
    },
    answers: [
      {
        eng: 'When the brake chambers release pressure.',
        rus: 'Когда тормозные камеры сбрасывают давление.',
      },
      {
        eng: 'Air pressure applied to the brakes.',
        rus: 'Давление воздуха подается на тормоза.',
      },
      {
        eng: 'When air is pumped into the air tanks.',
        rus: 'Когда воздух нагнетается в воздушные резервуары.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The braking power of the spring brakes:',
      rus: 'Тормозная мощность пружинных тормозов:',
    },
    answers: [
      {
        eng: 'Is not affected by the condition of the services brakes.',
        rus: 'Не влияет на состояние рабочих тормозов.',
      },
      {
        eng: 'Can only be tested by highly trained brake service people.',
        rus: 'Могут быть проверены только высококвалифицированными специалистами по обслуживанию тормозов.',
      },
      {
        eng: 'Depends on whether the service brakes are in adjustment.',
        rus: 'Зависит от того, отрегулированы ли рабочие тормоза.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'If your vehicle has an alcohol evaporator, every day during cold weather you should:',
      rus: 'Если в вашем автомобиле есть испаритель спирта, каждый день в холодную погоду вы должны: ',
    },
    answers: [
      {
        eng: 'Check the alcohol level and fill the evaporator if needed.',
        rus: 'Проверьте уровень спирта и при необходимости заполните испаритель.',
      },
      {
        eng: 'Change the Alcohol.',
        rus: 'Сменить спирт.',
      },
      {
        eng: 'Clean the air filter with alcohol.',
        rus: 'Очистить воздушный фильтр спиртом.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'During normal driving, spring brakes are usually held back by:',
      rus: 'Во время обычного вождения пружинные тормоза обычно сдерживают:',
    },
    answers: [
      {
        eng: 'Bolts or clamps.',
        rus: 'Болты или хомуты.',
      },
      {
        eng: 'Air pressure.',
        rus: 'Давление воздуха',
      },
      {
        eng: 'Spring pressure.',
        rus: 'Давление пружины.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The application pressure gauge shows how much air pressure you:',
      rus: 'Манометр приложения показывает, какое давление воздуха вы:',
    },
    answers: [
      {
        eng: 'Have used in this trip.',
        rus: 'Использовали в этой поездке.',
      },
      {
        eng: 'Have in the air tanks.',
        rus: 'Иметь в воздухе баллоны.',
      },
      {
        eng: 'Are applying to the brakes.',
        rus: 'Прикладываем к тормозам.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'In air brake vehicles, the parking brakes should be used:',
      rus: 'В транспортных средствах с пневматическим тормозом следует использовать',
    },
    answers: [
      {
        eng: 'As little as possible.',
        rus: 'Как можно меньше.',
      },
      {
        eng: 'Any time the vehicle is parked.',
        rus: 'В любое время, когда автомобиль припаркован.',
      },
      {
        eng: 'To hold your speed when going downhill.',
        rus: 'Чтобы удерживать скорость при спуске.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'Your brakes are fading when:',
      rus: 'Ваши тормоза ослабевают, когда:',
    },
    answers: [
      {
        eng: 'You have to push harder on the brake pedal to control your speed on a downgrade.',
        rus: 'Вы должны сильнее нажимать на педаль тормоза, чтобы контролировать скорость на спуске.',
      },
      {
        eng: 'The brake pedal feels spongy when you apply pressure.',
        rus: 'Педаль тормоза кажется губчатой, когда вы нажимаете на нее.',
      },
      {
        eng: 'You release pressure on the brake pedal and speed increases.',
        rus: 'Вы отпускаете педаль тормоза, и скорость увеличивается.',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'Why should you drain water from compressed air tanks?',
      rus: 'Зачем нужно сливать воду из баллонов со сжатым воздухом?',
    },
    answers: [
      {
        eng: 'The low boiling point of water reduces braking power.',
        rus: 'Низкая температура кипения воды снижает эффективность торможения.',
      },
      {
        eng: 'Water can freeze in cold weather and cause brake failure.',
        rus: 'Вода может замерзнуть в холодную погоду и вызвать отказ тормозов',
      },
      {
        eng: 'To keep the air compressor oil clean.',
        rus: 'Для поддержания чистоты масла воздушного компрессора.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'Your vehicle has a dual air brake system. If a low air pressure warning comes on for the secondary system, you should:',
      rus: 'Ваш автомобиль оснащен двойной пневматической тормозной системой. Если для вторичной системы появляется предупреждение о низком давлении воздуха, вы следует:',
    },
    answers: [
      {
        eng: 'Bring the vehicle to a safe stop and continue only when the system is fixed.',
        rus: 'Доведите автомобиль до безопасной остановки и продолжайте движение только после того, как система зафиксируется.',
      },
      {
        eng: 'Reduce your speed, and test the remaining system while driving.',
        rus: 'Снизьте скорость и проверьте оставшуюся систему во время вождения.',
      },
      {
        eng: 'Reduce your speed, and drive to the nearest garage for repairs.',
        rus: 'Сбавьте скорость и езжайте в ближайший гараж для ремонта.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The air loss rate for a straight truck with the engine off and the brakes on should not be more than:',
      rus: 'Скорость потери воздуха для прямолинейного грузовика с выключенным двигателем и включенными тормозами не должна превышать:',
    },
    answers: [
      {
        eng: '1 psi in 30 seconds.',
        rus: '1 psi за 30 секунд.',
      },
      {
        eng: '2 psi in 45 seconds',
        rus: '2 psi за 45 секунд.',
      },
      {
        eng: '3 psi in one minute',
        rus: '3 psi за одну минуту.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'The brake system that applies and releases the brakes when the driver uses the brake pedal is the brake system.',
      rus: 'Тормозная система, которая включает и отпускает тормоза, когда водитель нажимает педаль тормоза, является тормозной системой.',
    },
    answers: [
      {
        eng: 'Service',
        rus: 'Службной',
      },
      {
        eng: 'Parking',
        rus: 'Парковочной',
      },
      {
        eng: 'Drum',
        rus: 'Барабанной',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'Emergency stab braking is when you:',
      rus: 'Экстренное торможение — это когда вы:',
    },
    answers: [
      {
        eng: 'Press hard on the brake pedal and apply hand valve fully until you stop.',
        rus: 'Сильно нажмите на педаль тормоза и полностью включите ручной клапан, пока не остановитесь.',
      },
      {
        eng: 'Apply the hand valve for one second, then push hard on the pedal.',
        rus: 'Примените ручной клапан на одну секунду, затем сильно нажмите на педаль.',
      },
      {
        eng: 'Brake as hard as you can, release the brake when the wheels lock, then put on the brakes again when the wheels start rolling.',
        rus: 'Тормозите как можно сильнее, отпустите тормоз, когда колеса заблокируются, затем снова нажмите на тормоз, когда колеса начинают катиться.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'A straight truck air brake system should not leak at a rate of more than ___ psi per minute with the engine off and the brakes released.',
      rus: 'Пневматическая тормозная система прямого грузовика не должна протекать со скоростью более ___ фунтов на квадратный дюйм в минуту при выключенном двигателе и отпущенном тормозе',
    },
    answers: [
      {
        eng: '6',
        rus: '6',
      },
      {
        eng: '4',
        rus: '4',
      },
      {
        eng: '2',
        rus: '2',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'Before driving a vehicle with a dual air system, allow time for the air compressor to build up a minimum of ____ psi pressure in both the primary and secondary systems.',
      rus: 'Перед началом движения на автомобиле с двойной воздушной системой подождите, пока воздушный компрессор создаст не менее ____ давление в фунтах на квадратный дюйм как в первичной, так и во вторичной системах.',
    },
    answers: [
      {
        eng: '25',
        rus: '25',
      },
      {
        eng: '50',
        rus: '50',
      },
      {
        eng: '100',
        rus: '100',
      },
    ],
  },
  {
    answer: 2,
    question: {
      eng: 'The supply pressure gauge shows how much pressure:',
      rus: 'Манометр подачи показывает, какое давление:',
    },
    answers: [
      {
        eng: 'You have used in this trip.',
        rus: 'Вы использовали в этой поездке.',
      },
      {
        eng: 'Is in the air tanks.',
        rus: 'Есть в воздушных баках.',
      },
      {
        eng: 'Is going to the brake chambers.',
        rus: 'Собирается к тормозным камерам.',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'Which of the following makes total stopping distance longer for air brakes than hydraulic brakes?',
      rus: 'Что из следующего делает общий тормозной путь дольше для пневматических тормозов, чем для гидравлических тормозов?',
    },
    answers: [
      {
        eng: 'Brake lag.',
        rus: 'Тормозная задержка',
      },
      {
        eng: 'Perception distance.',
        rus: 'Расстояние восприятия.',
      },
      {
        eng: 'Reaction time distance.',
        rus: 'Дистанция времени реакции.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'Total stopping distance for air brakes is longer than that for hydraulic brakes due to distance.',
      rus: 'Общий тормозной путь для пневматических тормозов больше, чем для гидравлических тормозов из-за расстояния.',
    },
    answers: [
      {
        eng: 'Perception.',
        rus: 'Восприятие',
      },
      {
        eng: 'Reaction.',
        rus: 'Реакция',
      },
      {
        eng: 'Brake lag.',
        rus: 'Тормозная задержка',
      },
    ],
  },
  {
    answer: 1,
    question: {
      eng: 'If the air compressor develops a leak, what keeps the air in the tank?',
      rus: 'Если в воздушном компрессоре возникает утечка, что удерживает воздух в баке?',
    },
    answers: [
      {
        eng: 'The one-way check valve.',
        rus: 'Односторонний обратный клапан',
      },
      {
        eng: 'The emergency relay valve.',
        rus: 'Аварийный релейный клапан',
      },
      {
        eng: 'The tractor protection valve.',
        rus: 'Клапан защиты трактора.',
      },
    ],
  },
  {
    answer: 3,
    question: {
      eng: 'The most common type of foundation brake found on heavy vehicle is the:',
      rus: 'Наиболее распространенный тип тормоза на большегрузных транспортных средствах:',
    },
    answers: [
      {
        eng: 'Disc brake.',
        rus: 'Дисковый тормоз.',
      },
      {
        eng: 'Wedge drum brake.',
        rus: 'Клиновой барабанный тормоз',
      },
      {
        eng: 'S-cam drum brake.',
        rus: 'Барабанный тормоз S-cam',
      },
    ],
  },
];

export default airbrakes;
