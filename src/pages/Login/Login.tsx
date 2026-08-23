import { useLanguage } from "../../i18n/LanguageContext";

function Login() {
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t("appName")}</h1>
      <p>{t("appTagline")}</p>

      <input
        type="email"
        placeholder={t("emailPlaceholder")}
      />

      <br />

      <input
        type="password"
        placeholder={t("passwordPlaceholder")}
      />

      <br />

      <button>
        {t("loginButton")}
      </button>
    </div>
  );
}

export default Login;
