import Styles from "./innerContainer.module.css"
export default function InnerContainer({ children }) {
  return <div className={Styles.innerContainer}>{children}</div>;
}
