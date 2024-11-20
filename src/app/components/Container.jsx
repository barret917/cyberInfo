
import style from "./Container.module.css"

export const Container = ({
  children,
  className,
}) => {
  return (
    <div className={style.container}>{children}</div>
  );
};
