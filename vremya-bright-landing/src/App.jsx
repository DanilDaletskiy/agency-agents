import { useState } from 'react'

const NAV_LINKS = [
  { href: '#audience', label: 'Для кого' },
  { href: '#offer', label: 'Оффер' },
  { href: '#program', label: 'Программа' },
  { href: '#packages', label: 'Пакеты' },
  { href: '#about', label: 'О создателе' },
  { href: '#faq', label: 'FAQ' },
]

function Blob({ className }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
}

function SectionEyebrow({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-300">
      {children}
    </div>
  )
}

function GradientButton({ children, className = '', as: Tag = 'button', ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(168,85,247,0.35)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(168,85,247,0.55)] active:scale-[0.98] ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#08060d]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-lg font-extrabold tracking-tight text-white">
          Время Быть <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Ярче</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GradientButton as="a" href="#cta">
            Оставить заявку
          </GradientButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Меню"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <GradientButton as="a" href="#cta" onClick={() => setOpen(false)} className="mt-2 w-full">
              Оставить заявку
            </GradientButton>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      <Blob className="-left-32 -top-32 h-96 w-96 bg-purple-700/40" />
      <Blob className="-right-20 top-10 h-80 w-80 bg-fuchsia-600/30" />
      <Blob className="bottom-0 left-1/3 h-72 w-72 bg-violet-800/30" />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 0%, black, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <SectionEyebrow>Курс для организаторов детских мероприятий</SectionEyebrow>

        <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Готовая система запуска яркого бизнеса
          <br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
            в городе за 10 дней
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-xl font-extrabold text-white sm:text-2xl">
          10 дней <span className="text-fuchsia-400">·</span> 1 000 000 ₽ чистой прибыли*{' '}
          <span className="text-fuchsia-400">·</span> 0 вложений
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
          Методология, продажи и организация уже упакованы — вам не нужно ничего изобретать, просто взять готовую
          систему и запустить бизнес в своём городе.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <GradientButton as="a" href="#cta" className="px-8 py-4 text-base">
            Оставить заявку
          </GradientButton>
          <a
            href="#offer"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Что входит в курс
          </a>
        </div>

        <p className="mx-auto mt-10 max-w-lg text-xs text-gray-600">* в зависимости от численности населения города</p>
      </div>
    </section>
  )
}

function Audience() {
  const cards = [
    {
      title: 'Опытные организаторы мероприятий, аниматоры и ведущие',
      text: 'Найдёте много нового: открытия и уникальные методики из реальной практики.',
    },
    {
      title: 'Активный родитель, который хочет заниматься детскими мероприятиями в масштабе',
      text: 'Получите новый навык и новый опыт в дополнение к уже имеющемуся.',
    },
    {
      title: 'Активный человек, который хочет попробовать себя в организации мероприятий с нуля',
      text: 'Получите детальные инструкции, как всё делать самостоятельно — и продавать, и организовывать.',
    },
  ]
  return (
    <section id="audience" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Для кого это</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Кому подходит этот курс</h2>
          <p className="mt-4 text-gray-400">
            Формат подходит и тем, кто уже работает в индустрии мероприятий, и тем, кто начинает с нуля.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-purple-500/40"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-transparent blur-2xl transition-opacity group-hover:opacity-150" />
              <h3 className="relative text-base font-bold text-white">{c.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-gray-400">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Offer() {
  const items = [
    'Как начать бизнес с нуля вложений',
    'Как продавать без вложений в рекламу',
    'Полностью упакованный сценарий мероприятия, готовый к использованию',
    'Чек-листы, шаблоны и полиграфия для каждого этапа подготовки',
    'Обучение команды и доступ к сообществу выпускников курса',
  ]

  const costItems = [
    { label: 'Разработка сценария мероприятия', price: '150 000 ₽' },
    { label: 'Постановка шоу-программы', price: '250 000 ₽' },
    { label: 'Обучение отдела продаж', price: '120 000 ₽' },
    { label: 'Скрипты и шаблоны продаж', price: '60 000 ₽' },
    { label: 'Сопровождение куратора', price: '140 000 ₽' },
    { label: 'Дизайн макета афиши', price: '25 000 ₽' },
    { label: 'Дизайн макета билета', price: '15 000 ₽' },
    { label: 'Полиграфия и печать материалов', price: '40 000 ₽' },
  ]

  return (
    <section id="offer" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <SectionEyebrow>Оффер по сути</SectionEyebrow>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Вы получаете не курс видео, а готовый бизнес под запуск
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            15 лет в бизнесе, 10 лет именно с этим форматом мероприятий — методология выстроена и проверена на
            практике, а не в теории. Всё, что мы отработали за это время, упаковано так, чтобы вы запустили бизнес
            в своём городе без лишних экспериментов.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[11px] font-bold text-white">
                ✓
              </span>
              <span className="text-sm leading-relaxed text-gray-300">{it}</span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-extrabold text-white sm:text-2xl">Сколько это стоило бы по отдельности</h3>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-white/[0.03] text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-5 py-4 font-semibold sm:px-6">Позиция</th>
                  <th className="px-5 py-4 text-right font-semibold sm:px-6">Рыночная цена</th>
                </tr>
              </thead>
              <tbody>
                {costItems.map((item) => (
                  <tr key={item.label} className="border-t border-white/10">
                    <td className="px-5 py-4 text-gray-300 sm:px-6">{item.label}</td>
                    <td className="px-5 py-4 text-right text-gray-400 sm:px-6">от {item.price}</td>
                  </tr>
                ))}
                <tr className="border-t border-white/10 bg-white/[0.04]">
                  <td className="px-5 py-4 font-bold text-white sm:px-6">Итого</td>
                  <td className="px-5 py-4 text-right text-xl font-black text-white sm:px-6">≈ 800 000 ₽</td>
                </tr>
                <tr className="border-t border-fuchsia-500/30 bg-gradient-to-r from-fuchsia-500/10 to-violet-500/10">
                  <td className="px-5 py-4 font-bold text-white sm:px-6">Цена курса «Время Быть Ярче»</td>
                  <td className="px-5 py-4 text-right text-xl font-black text-white sm:px-6">от 36 690 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-center text-sm font-semibold text-fuchsia-300">Вы экономите колоссальные суммы</p>
        </div>
      </div>
    </section>
  )
}

function ProgramFormat() {
  const blocks = [
    { title: 'Живое открытие', text: 'Яркий старт, который сразу собирает внимание 80–200 участников и задаёт темп на весь вечер.' },
    { title: 'Интерактивная программа', text: 'Несколько сменяющих друг друга зон активности и конкурсов — без пауз и провисаний.' },
    { title: 'Командная работа на сцене', text: 'Ведущий, аниматоры и техническая команда работают синхронно по единому сценарию.' },
    { title: 'Эмоциональный финал', text: 'Кульминация мероприятия, которая формирует сарафанное радио и повторные заказы.' },
  ]
  return (
    <section id="program" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Как устроена программа</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Не одно шоу, а целое живое событие на 4 часа</h2>
          <p className="mt-4 text-gray-400">
            Детское интерактивное мероприятие построено как единая программа с несколькими смысловыми блоками, а не
            набор случайных активностей.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <div key={b.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-3xl font-black text-white/10">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-base font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseStructure() {
  const blocks = [
    {
      step: 'Блок 1',
      title: 'Подготовка',
      bullets: [
        'Как искать спонсоров, чтобы снизить себестоимость мероприятия',
        'Как договариваться с поставщиками по тактике win-win и снижать издержки',
      ],
    },
    {
      step: 'Блок 2',
      title: 'Продажа',
      bullets: [
        'Как начать продажи без стартовых вложений',
        'Как договариваться со школами о продаже сразу 300–400 билетов за один разговор',
      ],
    },
    {
      step: 'Блок 3',
      title: 'Реализация',
      bullets: [
        'Как получить дорогое шоу по цене, доступной для детского мероприятия',
        'Как провести мероприятие по готовому сценарию силами своей команды',
      ],
    },
  ]
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <Blob className="-right-24 bottom-0 h-96 w-96 bg-purple-700/25" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Структура курса</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Три блока от нуля до первой прибыли</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.title} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">{b.step}</span>
              <h3 className="mt-2 text-xl font-extrabold text-white">{b.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {b.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm leading-relaxed text-gray-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  const items = [
    { title: 'Прибыль с первого мероприятия', text: 'Ощутимый доход уже с дебютного события — без месяцев раскачки.' },
    { title: 'Готовый кейс для портфолио', text: 'Видео, фото и отзывы для продажи следующих мероприятий.' },
    { title: 'Доверие родителей в городе', text: 'Узнаваемый бренд снимает вопрос «а кто вы такие» на первой встрече.' },
    { title: 'База контактов', text: 'Родители, школы и сады, с которыми можно работать на постоянной основе.' },
    { title: 'Право на доп. монетизацию', text: 'Абонементы, мерч и сопутствующие услуги поверх основного продукта.' },
  ]
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Что вы получаете в итоге</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Не разовое мероприятие, а актив для бизнеса</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-sm font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChainNode({ children, strong, small }) {
  const base = 'rounded-xl border px-4 py-3 text-center font-semibold'
  if (strong) {
    return (
      <div className={`${base} border-fuchsia-500/50 bg-gradient-to-br from-fuchsia-500/15 to-violet-500/15 text-sm text-white sm:text-base`}>
        {children}
      </div>
    )
  }
  if (small) {
    return <div className={`${base} border-white/10 bg-white/[0.03] text-xs text-gray-300`}>{children}</div>
  }
  return <div className={`${base} border-white/10 bg-white/[0.03] text-sm text-gray-200`}>{children}</div>
}

function ChainArrow() {
  return <div className="rotate-90 text-2xl leading-none text-fuchsia-400 lg:rotate-0">→</div>
}

function ContactsAsset() {
  const occasions = ['День рождения', 'Корпоратив', 'Юбилей', 'Свадьба', 'Выпускной']
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <Blob className="-left-24 top-0 h-80 w-80 bg-fuchsia-700/20" />
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>База контактов как актив</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Это не разовое мероприятие, а актив для бизнеса</h2>
          <p className="mt-4 text-gray-400">
            После мероприятия вы получаете не только прибыль, а ещё около 2000 контактов родителей в базе. Каждый
            контакт — это в среднем 4–5 поводов для повторного заказа в год.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <ChainNode>Мероприятие</ChainNode>
          <ChainArrow />
          <ChainNode strong>≈ 2000 контактов родителей</ChainNode>
          <ChainArrow />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {occasions.map((o) => (
              <ChainNode key={o} small>
                {o}
              </ChainNode>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-6 text-center">
          <p className="text-lg font-extrabold text-white sm:text-xl">
            2000 контактов × 5 поводов = 10 000 потенциальных мероприятий каждый год
          </p>
        </div>
      </div>
    </section>
  )
}

function FeatureCell({ value }) {
  if (value === true) return <span className="text-lg font-bold text-emerald-400">✓</span>
  if (value === false) return <span className="text-gray-600">—</span>
  return <span className="text-xs font-semibold text-white">{value}</span>
}

function Packages() {
  const packages = [
    {
      name: 'Сам себе организатор',
      price: '36 690 ₽',
      desc: '4 недели, 3 блока курса — всё в видеоформате, вы сами записываете и применяете.',
      items: [
        '4 недели, 3 блока курса',
        'Доступ к материалам — 1 месяц после прохождения',
        'Доступ к телеграм-каналу',
        'Без скриптов продаж и маркетинговых шаблонов',
      ],
    },
    {
      name: 'Вместе весело шагать',
      price: '44 847 ₽',
      desc: 'Знания из курса плюс сопровождение на этапе подготовки к первому мероприятию.',
      items: [
        'Всё из пакета «Сам себе организатор»',
        'Материалы и разборы на практике: готовые скрипты и шаблоны',
        'Обратная связь по домашним заданиям',
        'Куратор на этапе продаж и подготовки к первому мероприятию',
      ],
      highlight: true,
    },
    {
      name: 'Мы сила',
      price: '199 999 ₽',
      desc: 'Полное сопровождение запуска с куратором на протяжении полугода.',
      items: [
        'Всё из пакета «Вместе весело шагать»',
        '6 месяцев сопровождения',
        'Приоритетная поддержка куратора',
        'Всего 4 места в потоке',
      ],
      scarce: true,
    },
  ]

  const featureRows = [
    { label: 'Доступ к материалам курса', values: ['1 месяц после курса', '1 месяц после курса', '6 месяцев'] },
    { label: '3 блока курса в видеоформате', values: [true, true, true] },
    { label: 'Доступ к телеграм-каналу', values: [true, true, true] },
    { label: 'Готовые скрипты продаж и шаблоны', values: [false, true, true] },
    { label: 'Разбор домашних заданий', values: [false, true, true] },
    { label: 'Куратор на этапе продаж и подготовки', values: [false, true, true] },
    { label: 'Сопровождение до первого мероприятия', values: [false, true, true] },
    { label: 'Расширенное сопровождение', values: [false, false, '6 месяцев'] },
    { label: 'Ограничение по местам', values: [false, false, 'Всего 4 места'] },
  ]

  return (
    <section id="packages" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Пакеты участия</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Выберите глубину сопровождения</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlight
                  ? 'border-fuchsia-500/50 bg-gradient-to-b from-fuchsia-500/10 to-violet-500/5 lg:-translate-y-3'
                  : p.scarce
                    ? 'border-amber-500/40 bg-gradient-to-b from-amber-500/5 to-transparent'
                    : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Популярный выбор
                </span>
              )}
              {p.scarce && (
                <span className="mb-4 inline-block w-fit rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-300">
                  Всего 4 места
                </span>
              )}
              <h3 className="text-xl font-extrabold text-white">«{p.name}»</h3>
              <div className="mt-2 text-3xl font-black text-white">{p.price}</div>
              <p className="mt-3 text-sm text-gray-400">{p.desc}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                    {it}
                  </li>
                ))}
              </ul>

              <GradientButton as="a" href="#cta" className="mt-8 w-full">
                Выбрать «{p.name}»
              </GradientButton>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-white/[0.03] text-xs uppercase tracking-wider text-gray-500">
                <th className="px-5 py-4 font-semibold sm:px-6">Что входит</th>
                {packages.map((p) => (
                  <th
                    key={p.name}
                    className={`px-5 py-4 text-center font-semibold sm:px-6 ${
                      p.highlight ? 'bg-gradient-to-b from-fuchsia-500/10 to-violet-500/10 text-white' : 'text-gray-300'
                    }`}
                  >
                    «{p.name}»
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row) => (
                <tr key={row.label} className="border-t border-white/10">
                  <td className="px-5 py-4 text-gray-300 sm:px-6">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-5 py-4 text-center sm:px-6">
                      <FeatureCell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function About() {
  const bullets = ['15 лет в бизнесе, 10 лет в формате «Время Быть Ярче»', '5000+ проведённых мероприятий', '300 000+ детей — участников программ']
  return (
    <section id="about" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <Blob className="-left-24 top-1/2 h-80 w-80 -translate-y-1/2 bg-fuchsia-700/20" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[380px_1fr]">
        <div className="mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 via-[#150e24] to-fuchsia-900/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl font-black tracking-tight text-white/30">
                ВБЯ
              </div>
            </div>
            <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs text-gray-300 backdrop-blur">
              [ФОТО / ЛОГОТИП КОМПАНИИ]
            </span>
          </div>
        </div>

        <div>
          <SectionEyebrow>О компании</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">О создателе</h2>
          <p className="mt-4 max-w-xl text-gray-400">
            Компания «Атлансис». Основатель бренда «Время Быть Ярче». 15 лет в бизнесе, 10 лет именно с этим
            форматом мероприятий — методология выстроена и проверена на практике, а не в теории.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {bullets.map((b) => (
              <div key={b} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-white">
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isOpen}>
        <span className="text-sm font-semibold text-white sm:text-base">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-sm text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {isOpen && <div className="px-6 pb-5 text-sm leading-relaxed text-gray-400">{a}</div>}
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'Нужен ли опыт для прохождения курса?',
      a: 'Программа рассчитана на людей как с опытом, так и без опыта. Опытный найдёт здесь много нового — открытия и уникальные методики из реальной практики. Без опыта — получит детальные инструкции, как всё делать с нуля.',
    },
    {
      q: 'Сколько времени занимает запуск до первого мероприятия?',
      a: 'Около 10 дней: столько в среднем занимает пройти курс, договориться о площадке и провести первое мероприятие по готовому сценарию.',
    },
    {
      q: 'Нужна ли своя команда аниматоров сразу?',
      a: 'Нет, набор и обучение команды — часть курса. В пакетах «Вместе весело шагать» и «Мы сила» есть сопровождение на этом этапе.',
    },
    {
      q: 'Как оплачивать курс, есть ли рассрочка?',
      a: 'Оплата возможна единовременно или в рассрочку — условия уточняются индивидуально после заявки.',
    },
    {
      q: 'Будет ли со мной работать куратор?',
      a: 'Да, начиная с пакета «Вместе весело шагать» — куратор сопровождает на этапе продаж и подготовки к первому мероприятию.',
    },
  ]
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <SectionEyebrow>Частые вопросы</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Отвечаем на главные сомнения</h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CTAForm() {
  const [form, setForm] = useState({ name: '', phone: '', city: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.city) return
    // В проде здесь будет реальная отправка на бэкенд
    setSubmitted(true)
  }

  return (
    <section id="cta" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <Blob className="left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 bg-purple-700/30" />

      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Оставьте заявку на курс «Время Быть Ярче»</h2>
            <p className="mt-3 text-gray-400">Куратор свяжется с вами и расскажет, как запустить курс в вашем городе.</p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
              <p className="text-lg font-bold text-white">Заявка принята!</p>
              <p className="mt-2 text-sm text-emerald-200">
                Спасибо, {form.name}. Куратор свяжется с вами в течение рабочего дня по номеру {form.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-fuchsia-500/60"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Телефон"
                required
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-fuchsia-500/60"
              />
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Город"
                required
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-fuchsia-500/60 sm:col-span-2"
              />
              <GradientButton type="submit" className="w-full py-4 text-base sm:col-span-2">
                Отправить заявку
              </GradientButton>
              <p className="text-center text-xs text-gray-600 sm:col-span-2">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <div className="text-base font-extrabold text-white">Время Быть Ярче</div>
          <p className="mt-1 text-xs text-gray-500">Курс для организаторов детских мероприятий</p>
        </div>

        <div className="flex flex-col gap-1 text-xs text-gray-500 sm:items-end">
          <span>Телефон: [ТЕКСТ]</span>
          <span>Email: [ТЕКСТ]</span>
          <span>© {new Date().getFullYear()} «Время Быть Ярче». Все права защищены.</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08060d] text-white antialiased selection:bg-fuchsia-500/30">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Offer />
        <ProgramFormat />
        <CourseStructure />
        <Results />
        <ContactsAsset />
        <Packages />
        <About />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </div>
  )
}
