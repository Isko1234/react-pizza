import styles from "./NotFoundBlock.module.scss";

console.log(styles);
const index = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>
          <icon>😕</icon>
        </span>
        <br />
        Page Not Found
      </h1>
      <p>Unfortunetly,we dont have any these kind of pages</p>
    </div>
  );
};

export default index;
