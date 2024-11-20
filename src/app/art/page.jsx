import Card from "../components/Card";
import { Container } from "../components/Container";

export default function HomePage() {
  return (
    <Container>
      <div className="grid">
        <Card
          id="1"
          href="./articl1"
          title="Киберугрозы растут, а специалистов становится все меньше"
          excerpt="Ключевым вопросом исследования рынка труда в сфере кибербезопасности ISC2 2024..."
          postDate="пятница, октября 18th, 2024"
        />
        <Card
          id="2"
          href="#"
          title="Количество DDoS-атак увеличивается"
          excerpt="Мониторинг развивающихся тенденций DDoS важен для предвидения угроз и адаптации стратегий защиты..."
          postDate="понедельник сентября 23rd, 2024"
        />
        <Card
          id="3"
          href="#"
          title="Большинство компаний боятся невидимых киберугроз"
          excerpt="Недавно компания Critical Start опубликовала свой второй ежегодный отчет о ландшафте киберрисков..."
          postDate="пятница августа 23rd, 2024"
        />
        <Card
          id="4"
          href="#"
          title="IBM: средняя стоимость взлома достигла рекордных $4,88 миллионов в 2024 году"
          excerpt="IBM опубликовала ежегодный отчет о стоимости утечки данных, свидетельствующий о том..."
          postDate="среда июля 31st, 2024"
        />
        <Card
          id="5"
          href="#"
          title="Security skills and certification gap behind intensified attack impacts"
          excerpt="Извините, этот текст доступен только на “en” и “ua”..."
          postDate="пятница июля 12th, 2024"
        />
        <Card
          id="6"
          href="#"
          title="Survey Reveals Alarming Trend: half of cybersecurity professionals  expect to burnout in the next 12 months"
          excerpt="Извините, этот текст доступен только на “en” и “ua”..."
          postDate="четверг июня 20th, 2024"
        />
        <Card
          id="7"
          href="#"
          title="Атаки на цепочки поставок являются главной киберугрозой до 2030 года – ENISA"
          excerpt="Агентство Европейского Союза по вопросам сетевой и информационной безопасности прогнозирует..."
          postDate="вторник мая 28th, 2024"
        />
        <Card
          id="8"
          href="#"
          title="Advanced Cybersecurity Boosts Higher Returns For Shareholders"
          excerpt="Извините, этот текст доступен только на “en” и “ua”..."
          postDate="пятница апреля 26th, 2024"
        />
        <Card
          id="9"
          href="#"
          title="Phishing attacks increased by 40% in 2023"
          excerpt="Извините, этот текст доступен только на “en” и “ua”..."
          postDate="понедельник апреля  8th, 2024"
        />
        <Card
          id="10"
          href="#"
          title="Ransomware surges as compliance stumbles – Thales Group"
          excerpt="Извините, этот текст доступен только на “en” и “ua”..."
          postDate="вторник марта 26th, 2024"
        />
      </div>
    </Container>
  );
}
