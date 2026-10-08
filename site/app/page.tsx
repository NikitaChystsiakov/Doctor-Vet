import Booking from '@/components/Booking';
import Header from '@/components/Header';
import { BookHere, Nearest, NearestSlots, NightNote } from '@/components/Live';
import { ArrowIcon, CrossIcon, PinIcon, StarIcon } from '@/components/icons';
import { ARTICLES, CLINIC_INFO, HOURS, LINKS, PHONES, RATINGS, RATINGS_TOTAL, REVIEWS, SERVICES, SPECIES, URGENT_SIGNS, VIBER } from '@/lib/content';

export default function Home() {
  const [feature, ...rest] = ARTICLES;
  return (
    <>
      <Header />
      <main id="top">
        {/* 1. Первый экран: фото + заголовок + запись */}
        <section className="hero">
          <div className="wrap hero-in">
            <figure className="hero-photo">
              <img src="/img/hero-reception-stbernard.webp" alt="Ветеринар гладит сенбернара у стойки ресепшена «Доктор Вет»" width="2000" height="1342" fetchPriority="high" />
              <figcaption><span className="cap-long">Ресепшен клиники; врач и собака дорисованы нейросетью для прототипа</span><span className="cap-short">Врач и собака дорисованы нейросетью</span></figcaption>
            </figure>
            <div className="hero-card">
              <h1>Круглосуточная ветеринарная помощь в&nbsp;Минске</h1>
              <p className="hero-sub">Две клиники «Доктор Вет» со своей реанимацией, лабораторией и МРТ. Работаем с 2006 года.</p>
              <NightNote />
              <NearestSlots />
              <a className="hero-urgent" href="tel:7031"><CrossIcon /><span>Срочно? Дежурный врач круглосуточно</span><b>7031</b></a>
            </div>
          </div>
        </section>

        {/* 2. Запись */}
        <section className="booking" id="book" aria-labelledby="bookH">
          <div className="wrap booking-in">
            <div className="booking-text">
              <h2 className="h2" id="bookH">Запись на приём</h2>
              <p>Выберите услугу или врача — останутся только подходящие варианты. Не знаете, к кому идти, — начните с терапевта. Ближайшее время: <b><Nearest /></b>.</p>
              <p className="booking-note">Администратор перезвонит, чтобы подтвердить запись.</p>
            </div>
            <Booking />
          </div>
        </section>

        {/* 3. По виду животного */}
        <section className="sec species" aria-labelledby="speciesH">
          <div className="wrap">
            <h2 className="h2" id="speciesH">Кого лечим</h2>
            <p className="sec-lead">Не только кошки и собаки: в списке пациентов клиники 44 вида — от хомяков и попугаев до черепах, лошадей и верблюдов.</p>
            <div className="species-row">
              {SPECIES.map(s => (
                <a className={`sp-card${s.big ? ' sp-big' : ''}`} key={s.id} href={s.href}>
                  <img src={s.img} alt="" loading="lazy" width="800" height="600" />
                  <span className="sp-body"><b>{s.title}</b><span>{s.kinds}</span></span>
                </a>
              ))}
            </div>
            <p className="stock-note">Фото животных в этом блоке — временные, из фотобанка.</p>
          </div>
        </section>

        {/* 3. Направления */}
        <section className="sec services" id="services" aria-labelledby="servicesH">
          <div className="wrap">
            <div className="sec-head"><h2 className="h2" id="servicesH">Направления</h2><a className="more" href={LINKS.prices}>Цены на услуги <ArrowIcon /></a></div>
            <ul className="svc">
              {SERVICES.map(s => (
                <li key={s.t}><a href={s.href}><b>{s.t}</b><span>{s.d}</span><ArrowIcon /></a></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Срочно */}
        <section className="sec" aria-labelledby="urgentH">
          <div className="wrap">
            <div className="urgent">
              <div className="urgent-list">
                <h2 className="h2" id="urgentH">Когда ехать сразу, без записи</h2>
                <p className="urgent-lead">Если с питомцем происходит что-то из этого списка — не ждите утра и свободного окна. Обе клиники принимают круглосуточно.</p>
                <ul>{URGENT_SIGNS.map(s => <li key={s}><CrossIcon />{s}</li>)}</ul>
              </div>
              <aside className="urgent-call">
                <a className="urgent-tel" href="tel:7031">7031</a>
                <p className="urgent-ops">Позвоните по дороге: короткий номер для A1 и МТС, или <a href="tel:+375173882828">+375 17 388-28-28</a></p>
                <div className="urgent-addr">
                  {CLINIC_INFO.map(c => <a key={c.id} href={c.route}><PinIcon />{c.addr}<span>маршрут</span></a>)}
                </div>
                <p className="urgent-night">С 21:00 до 9:00 принимает дежурный врач, действует ночной тариф.</p>
              </aside>
            </div>
          </div>
        </section>

        {/* 5. Почему мы: одна цифра + команда + своя база */}
        <section className="sec proof" aria-labelledby="proofH">
          <div className="wrap proof-in">
            <div className="proof-num">
              <p className="big" aria-hidden="true">170<span>+</span></p>
              <h2 className="h2" id="proofH">пациентов в сутки принимают наши врачи</h2>
              <p>Работаем в Минске с 2006 года: больше 100 ветеринарных специалистов, своё отделение реанимации и интенсивной терапии, инфекционный стационар, лаборатория, рентген, УЗИ, эндоскопия и МРТ. Сложные случаи ведут вместе врачи разных специализаций.</p>
              <a className="more team-link" href={LINKS.doctors}>Больше 100 специалистов — все врачи и их специализации <ArrowIcon /></a>
            </div>
            <div className="proof-photos">
              <figure className="pp-a"><img src="/img/mri.webp" alt="Кабинет МРТ" loading="lazy" /><figcaption>МРТ Philips Intera 1,5 Т</figcaption></figure>
              <figure className="pp-b"><img src="/img/0O9A6096.webp" alt="Ресепшен клиники" loading="lazy" /><figcaption>Ресепшен, Подшипниковый пр., 9</figcaption></figure>
              <figure className="pp-c"><img src="/img/0O9A6116.webp" alt="Зона ожидания для кошек" loading="lazy" /><figcaption>Отдельная зона ожидания для кошек</figcaption></figure>
            </div>
          </div>
        </section>

        {/* 6. Клиники */}
        <section className="sec clinics" id="clinics" aria-labelledby="clinicsH">
          <div className="wrap">
            <h2 className="h2" id="clinicsH">Две клиники, обе круглосуточно</h2>
            <div className="cl-row">
              {CLINIC_INFO.map(c => (
                <article className="cl" key={c.id}>
                  <img src={c.img} alt={`Здание клиники, ${c.addr}`} loading="lazy" />
                  <div className="cl-body">
                    <p className="cl-open"><i aria-hidden="true" />Открыто круглосуточно</p>
                    <h3>{c.addr}</h3>
                    <dl className="cl-hours">{HOURS.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
                    <p className="cl-extra">{c.extra}</p>
                    <p className="cl-near">Ближайшее свободное время: <b><Nearest clinic={c.id} /></b></p>
                    <div className="cl-act">
                      <BookHere clinic={c.id} className="btn">Записаться в эту клинику</BookHere>
                      <a className="btn btn-ghost" href={c.page}>Подробнее о клинике</a>
                    </div>
                    <a className="cl-route" href={c.route}><PinIcon />Построить маршрут в Яндекс Картах</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Отзывы */}
        <section className="sec reviews" aria-labelledby="reviewsH">
          <div className="wrap">
            <h2 className="h2" id="reviewsH">{RATINGS_TOTAL} на картах</h2>
            <div className="rt-row">
              {RATINGS.map(r => (
                <div className="rt" key={r.source}>
                  <p className="rt-src">{r.source}</p>
                  {r.items.map(i => (
                    <a key={i.clinic} href={i.href}><b>{i.rating}</b><StarIcon /><span>{i.clinic}<small>{i.count}</small></span></a>
                  ))}
                </div>
              ))}
            </div>
            <div className="rv-row">
              {REVIEWS.map(r => (
                <blockquote className="rv" key={r.author}>
                  <p>«{r.text}»</p>
                  <footer><b>{r.author}</b><span>{r.source} · {r.clinic} · {r.date}</span><a href={r.href}>читать полностью</a></footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Статьи */}
        <section className="sec articles" id="articles" aria-labelledby="articlesH">
          <div className="wrap">
            <div className="sec-head"><h2 className="h2" id="articlesH">Статьи наших врачей</h2><a className="more" href={LINKS.publications}>Все публикации <ArrowIcon /></a></div>
            <div className="ar-in">
              <a className="ar-feature" href={feature.href}>
                <img src={feature.img} alt="Рентгеновский снимок: инородные тела в кишечнике собаки" loading="lazy" />
                <b>{feature.t}</b>
                <span className="ar-tag">{feature.tag} · случай из практики</span>
              </a>
              <ul className="ar-list">
                {rest.map(a => <li key={a.t}><a href={a.href}><b>{a.t}</b><span className="ar-tag">{a.tag}</span><ArrowIcon /></a></li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Футер со всеми номерами */}
      <footer className="ft">
        <div className="wrap ft-in">
          <div className="ft-brand">
            <p className="ft-logo"><img src="/img/logo.png" alt="Доктор Вет — ветеринарные клиники" width="170" height="30" /></p>
            <p>Ветеринарные клиники в Минске.<br />Круглосуточно, без выходных.</p>
            <p className="ft-soc"><a href={LINKS.instagram}>Instagram</a><a href={LINKS.tiktok}>TikTok</a></p>
          </div>
          <div>
            <p className="lbl">Колл-центр, 24/7</p>
            <ul className="ft-phones">
              {PHONES.map(p => <li key={p.tel}><a href={`tel:${p.tel}`}>{p.value}</a><span>{p.label}{p.note ? ` · ${p.note}` : ''}</span></li>)}
              <li><a href={VIBER.href}>{VIBER.value}</a><span>{VIBER.note}</span></li>
            </ul>
          </div>
          <div>
            <p className="lbl">Клиники</p>
            <ul className="ft-list">{CLINIC_INFO.map(c => <li key={c.id}><a href={c.page}>{c.addr}</a></li>)}</ul>
            <p className="lbl ft-gap">Клиентам</p>
            <ul className="ft-list">
              <li><a href={LINKS.prices}>Цены</a></li><li><a href={LINKS.erip}>Оплата через ЕРИП</a></li><li><a href={LINKS.faq}>Часто спрашивают</a></li>
            </ul>
          </div>
          <div>
            <p className="lbl">О компании</p>
            <ul className="ft-list">
              <li><a href={LINKS.about}>О нас</a></li><li><a href={LINKS.doctors}>Врачи</a></li><li><a href={LINKS.news}>Новости</a></li><li><a href={LINKS.vacancies}>Вакансии</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap ft-legal">
          <span>© ООО «Доктор Вет», 2006–2026</span>
          <a href={LINKS.privacy}>Политика обработки персональных данных</a>
          <span>Прототип главной: расписание в записи и фото животных — демонстрационные.</span>
        </div>
      </footer>
    </>
  );
}
