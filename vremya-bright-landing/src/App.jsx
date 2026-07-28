import { useState } from 'react'

const NAV_LINKS = [
  { href: '#audience', label: 'Для кого' },
  { href: '#offer', label: 'Оффер' },
  { href: '#program', label: 'Программа' },
  { href: '#packages', label: 'Пакеты' },
  { href: '#about', label: 'Об Анастасии' },
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
          Время быть <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">ярче</span>
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
        <SectionEyebrow>Франшиза-курс для организаторов детских мероприятий</SectionEyebrow>

        <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Готовая система запуска
          <br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
            яркого бизнеса в вашем городе
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
          Один сценарий, одна команда, одно мероприятие на 4 часа — и от{' '}
          <span className="font-semibold text-white">100 000 ₽</span> прибыли за вечер. Без разработки продукта
          с нуля: методология, продажи и организация уже упакованы.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <GradientButton as="a" href="#calculator" className="px-8 py-4 text-base">
            Посчитать доход в моём городе →
          </GradientButton>
          <a
            href="#offer"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Что входит в франшизу
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {[
            { value: '4 часа', label: 'длительность одного мероприятия' },
            { value: '80–200', label: 'участников за одно событие' },
            { value: 'от 100 000 ₽', label: 'прибыли с одного мероприятия' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Audience() {
  const cards = [
    {
      title: 'Владельцы event-агентств',
      text: 'Хотите добавить в портфель формат с высоким чеком и понятной юнит-экономикой, не тратя месяцы на разработку.',
    },
    {
      title: 'Аниматоры и студии праздников',
      text: 'Устали от демпинга на рынке одиночных выступлений и хотите перейти в сегмент с командным продуктом.',
    },
    {
      title: 'Владельцы детских центров и садов',
      text: 'Ищете доп. поток дохода на своей аудитории — без найма новой команды с нуля и без риска эксперимента.',
    },
    {
      title: 'Предприниматели без опыта в event',
      text: 'Есть капитал и желание запустить бизнес в понятной нише с готовой моделью — франшиза снимает риск «как это работает».',
    },
  ]
  return (
    <section id="audience" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Для кого это</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Курс собран для предпринимателей, а не для родителей</h2>
          <p className="mt-4 text-gray-400">
            Если вы хотите зарабатывать на организации мероприятий — а не проводить их сами каждые выходные, это для вас.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

function PainPoints() {
  const pains = [
    'Доход скачет от месяца к месяцу, а сезонность съедает половину года',
    'Рынок аниматоров демпингует — сложно продавать дороже «ещё одного клоуна»',
    'Родители не доверяют новому подрядчику без имени и кейсов',
    'Своими силами тяжело масштабироваться за пределы одного района города',
    'Непонятно, как выстроить продажи школам, садам и семейным центрам',
  ]
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <Blob className="left-1/2 top-0 h-80 w-80 -translate-x-1/2 bg-violet-700/20" />
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <SectionEyebrow>Знакомо?</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">То, с чем сталкивается каждый организатор</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pains.map((p, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-400">
                !
              </span>
              <p className="text-sm leading-relaxed text-gray-300">{p}</p>
            </div>
          ))}
          <div className="flex items-center rounded-xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-5">
            <p className="text-sm font-semibold leading-relaxed text-white">
              «Время быть ярче» решает это готовой системой продаж, программой и командной моделью — а не советами.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Offer() {
  const items = [
    'Полностью упакованный сценарий мероприятия на 4 часа',
    'Скрипты продаж для школ, садов, семейных центров и напрямую родителям',
    'Маркетинговые материалы: лендинг, посты, презентация для B2B-партнёров',
    'Обучение команды: ведущий, аниматоры, техническая часть',
    'Бренд-стандарты и право использовать имя «Время быть ярче» в вашем городе',
    'Куратор на старте и доступ к сообществу партнёров',
  ]
  return (
    <section id="offer" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Оффер по сути</SectionEyebrow>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Вы получаете не курс с видео, а готовый бизнес под запуск
          </h2>
          <p className="mt-4 text-gray-400">
            Всё, что мы отработали за 20 лет на своём рынке — сценарий, продажи, логистику, команду — упаковано так,
            чтобы вы провели первое мероприятие в течение 4–6 недель после старта.
          </p>

          <ul className="mt-8 space-y-3">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[11px] font-bold text-white">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-gray-300">{it}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-purple-600/10 to-transparent blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#150e24] to-[#0c0813] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Ключевые цифры</p>
            <div className="mt-6 space-y-6">
              <div>
                <div className="text-4xl font-black text-white">от 100 000 ₽</div>
                <div className="mt-1 text-sm text-gray-400">чистой прибыли с одного мероприятия</div>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <div className="text-4xl font-black text-white">80–200</div>
                <div className="mt-1 text-sm text-gray-400">участников на одном событии</div>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <div className="text-4xl font-black text-white">[ЦИФРА]–[ЦИФРА]</div>
                <div className="mt-1 text-sm text-gray-400">мероприятий в месяц у активного партнёра</div>
              </div>
            </div>
          </div>
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

function ComparisonTable() {
  const rows = [
    { label: 'Длительность', usual: '1–1.5 часа', bright: '4 часа' },
    { label: 'Состав команды', usual: '1 аниматор или диджей', bright: 'Ведущий + команда аниматоров + техническая часть' },
    { label: 'Формат', usual: 'Одна активность на весь вечер', bright: 'Мультиформатная программа из нескольких зон' },
    { label: 'Средний чек', usual: 'от [ЦИФРА] ₽', bright: 'от 100 000 ₽' },
  ]
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Разница на цифрах</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Обычная детская дискотека vs «Время быть ярче»</h2>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-white/[0.03] text-xs uppercase tracking-wider text-gray-500">
                <th className="px-5 py-4 font-semibold sm:px-6">Параметр</th>
                <th className="px-5 py-4 font-semibold sm:px-6">Обычная дискотека</th>
                <th className="bg-gradient-to-r from-fuchsia-500/10 to-violet-500/10 px-5 py-4 font-semibold text-white sm:px-6">
                  «Время быть ярче»
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-white/10">
                  <td className="px-5 py-4 font-semibold text-white sm:px-6">{r.label}</td>
                  <td className="px-5 py-4 text-gray-400 sm:px-6">{r.usual}</td>
                  <td className="bg-gradient-to-r from-fuchsia-500/[0.06] to-violet-500/[0.06] px-5 py-4 font-medium text-white sm:px-6">
                    {r.bright}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      text: 'Изучаете методологию, упаковываете предложение под свой город, собираете и обучаете команду.',
    },
    {
      step: 'Блок 2',
      title: 'Продажа',
      text: 'Осваиваете скрипты продаж школам, садам и родителям, запускаете маркетинг и закрываете первые заявки.',
    },
    {
      step: 'Блок 3',
      title: 'Реализация',
      text: 'Проводите первое мероприятие по готовому сценарию с поддержкой куратора и выходите на регулярный поток.',
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
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  const items = [
    { title: 'Прибыль с первого мероприятия', text: 'От 100 000 ₽ уже с дебютного события — без месяцев раскачки.' },
    { title: 'Готовый кейс для портфолио', text: 'Видео, фото и отзывы для продажи следующих мероприятий.' },
    { title: 'Доверие родителей в городе', text: 'Узнаваемый бренд снимает вопрос «а кто вы такие» на первой встрече.' },
    { title: 'База контактов', text: 'Родители, школы и сады, с которыми можно работать на постоянной основе.' },
    { title: 'Право на доп. монетизацию', text: 'Абонементы, мерч и сопутствующие услуги поверх основного продукта.' },
  ]
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Что партнёр получает в итоге</SectionEyebrow>
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

function Calculator() {
  const scenarios = [
    {
      size: '80 участников',
      revenue: 'от 320 000 ₽',
      costs: 'от 210 000 ₽',
      profit: 'от 100 000 ₽',
      breakeven: '≈ 55–60 участников',
      note: 'Точка входа — небольшой город или первый запуск',
    },
    {
      size: '120 участников',
      revenue: 'от 480 000 ₽',
      costs: 'от 290 000 ₽',
      profit: 'от 180 000 ₽',
      breakeven: '≈ 55–60 участников',
      note: 'Средний сценарий для активного партнёра',
      highlight: true,
    },
    {
      size: '200 участников',
      revenue: 'от 800 000 ₽',
      costs: 'от 420 000 ₽',
      profit: 'от 320 000 ₽',
      breakeven: '≈ 55–60 участников',
      note: 'Крупное мероприятие или город-миллионник',
    },
  ]
  return (
    <section id="calculator" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Мини-калькулятор</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Сколько можно заработать на одном мероприятии</h2>
          <p className="mt-4 text-gray-400">
            Ориентировочные цифры по трём типовым сценариям. Точный расчёт под ваш город — на бесплатной консультации.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {scenarios.map((s) => (
            <div
              key={s.size}
              className={`relative rounded-2xl border p-8 ${
                s.highlight
                  ? 'border-fuchsia-500/50 bg-gradient-to-b from-fuchsia-500/10 to-violet-500/5'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Типичный сценарий
                </span>
              )}
              <h3 className="text-lg font-extrabold text-white">{s.size}</h3>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Выручка</span>
                  <span className="font-semibold text-white">{s.revenue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Расходы</span>
                  <span className="font-semibold text-gray-300">{s.costs}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Прибыль</span>
                  <span className="text-xl font-black text-white">{s.profit}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-gray-500">Точка безубыточности</span>
                  <span className="font-semibold text-gray-300">{s.breakeven}</span>
                </div>
              </div>
              <p className="mt-5 text-xs text-gray-500">{s.note}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-600">
          Расчёты ориентировочные и зависят от города, стоимости площадки и глубины загрузки команды.
        </p>
      </div>
    </section>
  )
}

function Packages() {
  const packages = [
    {
      name: 'Знания',
      price: '30 000 ₽',
      desc: 'Для тех, кто хочет разобраться в модели и попробовать своими силами.',
      items: [
        'Доступ к методологии и сценарию программы',
        'Скрипты продаж и маркетинговые шаблоны',
        'Доступ к сообществу партнёров',
        'Записи разборов и вебинаров',
      ],
    },
    {
      name: 'Практика',
      price: '45 000 ₽',
      desc: 'Знания + сопровождение на этапе подготовки к первому мероприятию.',
      items: [
        'Всё из пакета «Знания»',
        'Разбор упаковки под ваш город',
        'Куратор на этапе продаж и подготовки',
        'Обратная связь по первому мероприятию',
      ],
      highlight: true,
    },
    {
      name: 'Под ключ',
      price: '200 000 ₽',
      desc: 'Полное сопровождение запуска — от продаж до первого мероприятия с командой.',
      items: [
        'Всё из пакета «Практика»',
        'Помощь в подборе и обучении команды',
        'Личное сопровождение куратора до первого мероприятия',
        'Приоритетная поддержка и доп. монетизация',
      ],
    },
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
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Популярный выбор
                </span>
              )}
              <h3 className="text-xl font-extrabold text-white">{p.name}</h3>
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
      </div>
    </section>
  )
}

function About() {
  const bullets = ['20 лет на рынке детских мероприятий', '5000+ проведённых мероприятий', '300 000+ детей — участников программ']
  return (
    <section id="about" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <Blob className="-left-24 top-1/2 h-80 w-80 -translate-y-1/2 bg-fuchsia-700/20" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[380px_1fr]">
        <div className="mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 via-[#150e24] to-fuchsia-900/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 text-4xl font-black text-white/30">
                А
              </div>
            </div>
            <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs text-gray-300 backdrop-blur">
              [ФОТО АНАСТАСИИ]
            </span>
          </div>
        </div>

        <div>
          <SectionEyebrow>Автор методологии</SectionEyebrow>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Анастасия [ФАМИЛИЯ]</h2>
          <p className="mt-4 max-w-xl text-gray-400">
            Основатель бренда «Время быть ярче». За два десятилетия в event-индустрии выстроила систему, которая
            позволяет партнёрам в любом городе повторить результат без долгих экспериментов.
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
      q: 'Нужен ли опыт в event-индустрии, чтобы запустить франшизу?',
      a: 'Нет. Программа рассчитана на предпринимателей без опыта в организации мероприятий — методология и скрипты закрывают этот пробел пошагово.',
    },
    {
      q: 'Сколько времени занимает запуск до первого мероприятия?',
      a: 'В среднем 4–6 недель: время уходит на сбор команды, продажи первой площадки и подготовку по готовому сценарию.',
    },
    {
      q: 'Что если в моём городе уже есть похожие услуги?',
      a: 'Формат «Время быть ярче» отличается длительностью, командой и продуктом от разовых аниматоров — это другая ценовая категория и другой чек.',
    },
    {
      q: 'Нужна ли своя команда аниматоров сразу?',
      a: 'Нет, набор и обучение команды — часть программы. В пакетах «Практика» и «Под ключ» есть сопровождение на этом этапе.',
    },
    {
      q: 'Как быстро окупается покупка франшизы?',
      a: 'При среднем сценарии (120 участников) одно-два мероприятия закрывают стоимость пакета «Знания» или «Практика».',
    },
    {
      q: 'Можно ли работать в небольшом городе?',
      a: 'Да, минимальный сценарий рассчитан на 80 участников — этого достаточно для городов с населением от [ЦИФРА] тысяч человек.',
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
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold text-fuchsia-300">
              Осталось [ЦИФРА] мест в потоке этого квартала
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">Узнайте, сколько можно заработать в вашем городе</h2>
            <p className="mt-3 text-gray-400">Оставьте заявку — куратор свяжется и посчитает потенциал именно для вашего города.</p>
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
          <div className="text-base font-extrabold text-white">Время быть ярче</div>
          <p className="mt-1 text-xs text-gray-500">Франшиза-курс для организаторов детских мероприятий</p>
        </div>

        <div className="flex flex-col gap-1 text-xs text-gray-500 sm:items-end">
          <span>Телефон: [ТЕКСТ]</span>
          <span>Email: [ТЕКСТ]</span>
          <span>© {new Date().getFullYear()} «Время быть ярче». Все права защищены.</span>
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
        <PainPoints />
        <Offer />
        <ProgramFormat />
        <ComparisonTable />
        <CourseStructure />
        <Results />
        <Calculator />
        <Packages />
        <About />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </div>
  )
}
