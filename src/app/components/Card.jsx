import styles from "./Card.module.css";
import Link from "next/link"; 


const Card = ({
  href,
  title,
  excerpt,

}) => {
  

 

  return (
    <div className={styles.gridItem}>
      <article className={styles.card}>
        <div className={styles.cardContent}>
        
          <h3 className={styles.cardTitle}>
            <Link href={href}>{title}</Link>
          </h3>
          <div className={styles.cardExcerpt}>
            <p>{excerpt}</p>
          </div>
          <div className={styles.permalink}>
            <Link
              href={href}
              className={`${styles.btn} ${styles.btnFlat} ${styles.btnMini}`}
            >
              Читать больше
            </Link>
          </div>
         
        </div>
      </article>
    </div>
  );
};

export default Card;
