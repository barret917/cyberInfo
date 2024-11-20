import React from "react";
import styles from "./Study.module.css";

export const Study = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centeredContent}>
        <h2 className={styles.title}>
          Наслаждайтесь процветающим и преданным своему делу обучающимся
          сообществом!
        </h2>
        <p className={styles.description}>
          Учитывая нынешний дефицит квалифицированных кадров в сфере
          кибербезопасности, мы хотим помочь вам получить знания и навыки,
          необходимые для захватывающей карьеры!
        </p>
      </div>

      <div className={styles.cardContainer}>
        <dl className={styles.grid}>
          <div className={styles.card}>
            <dt className={styles.cardTitle}>
              <div className={styles.iconContainer}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className={styles.svg}
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </div>
              Библиотека контента YouTube
            </dt>
            <dd className={styles.cardBody}>
              <p>
                Ознакомьтесь с нашей обширной коллекцией образовательных
                видеороликов, охватывающих различные темы кибербезопасности, от
                начального до продвинутого уровня!
              </p>
              <p className={styles.cardFooter}>
                <a href="#" className={styles.link}>
                  Узнать больше <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>

          <div className={styles.card}>
            <dt className={styles.cardTitle}>
              <div className={styles.iconContainer}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  className={styles.svg}
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                </svg>
              </div>
              Сообщество Discord
            </dt>
            <dd className={styles.cardBody}>
              <p>
                Присоединяйтесь к нашему активному сообществу энтузиастов
                кибербезопасности на Discord и общайтесь с единомышленниками,
                чтобы учиться и делиться своими знаниями!
              </p>
              <p className={styles.cardFooter}>
                <a href="#" className={styles.link}>
                  Присоединиться <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>

          <div className={styles.card}>
            <dt className={styles.cardTitle}>
              <div className={styles.iconContainer}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className={styles.svg}
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
                </svg>
              </div>
              Блог
            </dt>
            <dd className={styles.cardBody}>
              <p>
                Повышайте свои навыки в области кибербезопасности и оставайтесь
                на шаг впереди в своей карьере. Получите доступ к экспертным
                советам, последним тенденциям и образовательным ресурсам!
              </p>
              <p className={styles.cardFooter}>
                <a href="#" className={styles.link}>
                  Последние сообщения <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
