# React i18n Setup with YAML and Per-Component Locales

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

For each React component, create a `locales` folder in the **same directory as the component**.

For `src/components/home/components/Contact19.jsx`, create:
- `src/components/home/components/locales/en/contact19.yaml`
- `src/components/home/components/locales/es/contact19.yaml`

Each should contain translation keys (`connect`, `getInTouch`, `inquiries`, and `cards.*` as per the Contact19 component).

---

## 3. **Create an i18n Config File**

Add `src/i18n/i18n.js` with:
- i18next initialization
- A YAML loader using `js-yaml`
- `i18next-multiload-backend-adapter` configured to load namespaces dynamically from `[component_path]/locales/{{lng}}/{{ns}}.yaml`
- `en` as default language and `contact19` as default namespace

---

## 4. **Update Components**

- For `Contact19.jsx`, import `useTranslation` from `react-i18next`.
- Use `const { t } = useTranslation("contact19")`.
- Replace hardcoded text (`connect`, `getInTouch`, `inquiries`, card titles, and descriptions) with `t()` calls.

---

## 5. **Provide a Final README Snippet**

Explain how to:
- Switch languages using `i18n.changeLanguage("es")`
- Add new translations for other components by creating their own `locales/en/<componentName>.yaml` and `locales/es/<componentName>.yaml` files in the same directory.

---

## **After these steps, output:**
- The final project structure (showing `locales` inside component directories)
- The modified `Contact19.jsx`
- The complete `i18n.js` configuration file
- An example of `contact19.yaml` for English and Spanish
