import styles from "./container.module.css"
export default function Container({ children }) {
  return <div class={styles.parentContainer}>{children}</div>;
}
