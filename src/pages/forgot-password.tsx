import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forms.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useForm } from "../utils/hooks";
import { forgotPassword } from "../services/user/userSlice";

function ForgotPassword() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    email: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassword(values.email));
    navigate("/reset-password", { state: { fromForgotPassword: true } });
  };

  return (
    <div className={styles.form_container}>
      <form
        action="#"
        className={styles.form}
        onSubmit={onSubmit}>
        <h1 className={`text text_type_main-medium ${styles.heading}`}>Восстановление пароля</h1>
        <EmailInput
          name="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Укажите e-mail"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large">
          Восстановить
        </Button>
        <div className={`${styles.text_container} text text_type_main-default text_color_inactive`}>
          <p className={styles.text}>
            Вспомнили пароль?{" "}
            <Link
              to="/login"
              className={styles.link}>
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
