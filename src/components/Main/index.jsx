import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles["main"]}>
      <div className={styles["main__todos"]}>
          <div className={styles["main__box"]}></div>
        <p className={styles["main__text"]}>Note #1</p>
      </div>
      
    </main>
  );
};

export default Main;
