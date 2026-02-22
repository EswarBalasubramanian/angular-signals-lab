# 🧠 Angular Signals Lab

A playground and learning repository for mastering **Angular Signals**
---\
from simple to complex reactive patterns.

This project demonstrates:

-   Using `signal()`, `computed()`, and `effect()` for state management\
-   Standalone components and modern Angular routing\
-   Nested and reusable UI patterns (e.g., nested comments)\
-   Architecting real apps with Angular's reactive primitives

------------------------------------------------------------------------

## 🚀 Project Structure

    src/
    ├── app/
    │   ├── home/                 # Home page
    │   ├── todo/                 # Todo app with signal-based state
    │   └── comments/             # Nested comments component example
    ├── app.routes.ts             # Angular routing config
    └── main.ts                   # Application bootstrap

------------------------------------------------------------------------

## 🎯 Learning Goals

-   Define and read signals (`signal()`)
-   Create derived state with `computed()`
-   Handle side effects using `effect()`
-   Implement lazy routing with `loadComponent` & `loadChildren`
-   Use standalone component architecture effectively

------------------------------------------------------------------------

## ⚙️ Setup & Running

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/EswarBalasubramanian/angular-signals-lab.git
cd angular-signals-lab
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Start development server

``` bash
npm start
```

App runs at:

    http://localhost:4200/

------------------------------------------------------------------------

## 🏗 Build & Test

### Build production bundle

``` bash
npm run build
```

### Run unit tests

``` bash
npm test
```

------------------------------------------------------------------------

## 📈 How to Extend This Lab

-   Add new signal-based features inside `src/app/`
-   Use `signal()`, `computed()`, and `effect()` in components
-   Register lazy routes in `app.routes.ts`
-   Explore nested state patterns and shared signal stores

------------------------------------------------------------------------

## 👨‍💻 Author

**Eswar Balasubramanian**

------------------------------------------------------------------------

## 📄 License

Open for learning and experimentation.
