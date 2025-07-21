# React i18n Setup with YAML and Single-Language Files

You are a senior React developer assistant. I want you to set up **i18n with react-i18next** using **YAML translation files** for my React project. Perform these steps:

---

## 1. **Install Dependencies**

Run the necessary npm installs:
- `react-i18next`
- `i18next`
- `i18next-multiload-backend-adapter`
- `js-yaml`

---

## 2. **Create Folder Structure**

In `src/locales/`, create a single YAML file per language:
- `src/locales/en.yaml`
- `src/locales/es.yaml`

Each YAML file should contain all translation keys for every component (e.g., `contact19.connect`, `contact19.getInTouch`, `header.title`, etc.).

---

## 3. **Create an i18n Config File**

Add `src/i18n.js` with:
- i18next initialization
- YAML loader using `js-yaml`
- `i18next-multiload-backend-adapter` configured to load `src/locales/{{lng}}.yaml`
- `en` as the default language

---

## 4. **Update Components**

- For `Contact19.jsx` and other components, import `useTranslation` from `react-i18next`.
- Use `const { t } = useTranslation()`.
- Replace hardcoded text with keys like `t("contact19.connect")` or `t("header.title")`.

---

## 5. **Provide a Final README Snippet**

Explain how to:
- Switch languages using `i18n.changeLanguage("es")`
- Add new translations by editing `src/locales/en.yaml` and `src/locales/es.yaml`.

---

## **After these steps, output:**
- Apply `yamllint` to `src/locales/en.yaml` and `src/locales/es.yaml` and solve all the reported errors
- The final project structure (showing `src/locales/en.yaml` and `src/locales/es.yaml`)
- The modified `Contact19.jsx`
- The complete `i18n.js` configuration file
- Examples of `en.yaml` and `es.yaml` with translations for `Contact19`.
