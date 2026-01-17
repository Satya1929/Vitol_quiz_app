<div align="left" style="position: relative;">
<!-- <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="30%" style="margin: -20px 0 0 20px;"> -->
<h1>VITOL_QUIZ_APP</h1>
<p align="left">
	<em>A lightweight quiz platform for practicing questions on the Indian Constitution.</em>
</p>
<p align="left">
<!-- 	<img src="https://img.shields.io/github/license/Satya1929/Vitol_quiz_app?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license"> -->
	<img src="https://img.shields.io/github/last-commit/Satya1929/Vitol_quiz_app?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Satya1929/Vitol_quiz_app?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Satya1929/Vitol_quiz_app?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
<!-- - [🎗 License](#-license) -->
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Vitol Quiz App is a React and TypeScript based study tool. It organizes multiple-choice questions on the Indian Constitution into weekly sets and provides detailed analysis after each quiz.

---

## 👾 Features

- **📅 Structured 6-Week Curriculum**: Quizzes are organized into a weekly learning path, covering core topics of the Indian Constitution with dedicated sections for Previous Year Questions (PYQs) and multiple practice sets (up to 6 sets per week).
- **⚡ Dynamic Quiz Mechanics**: A high-performance interface that allows users to track their progress (e.g., "Question 1 of 10"), skip challenging questions to revisit later, and submit only when ready.
- **📊 Comprehensive Analytics**:
  - **Visual Statistics**: Post-quiz breakdown including Attempted, Not Attempted, Correct, and Incorrect counts.
  - **In-depth Review**: A per-question analysis that highlights your choice versus the correct answer.
  - **Pedagogical Explanations**: Every single question is paired with a clear, educational explanation to help reinforce constitutional concepts.
- **🎨 Premium UI/UX**:
  - **Glassmorphism Design**: A sleek, modern aesthetic using semi-transparent "glass" cards powered by Tailwind CSS.
  - **Micro-Animations**: Custom animated gradient backgrounds and interactive elements for an engaging user experience.
  - **Integrated Learning**: A dedicated Video Section for visual tutorials directly within the platform.
- **🛠️ Modern Tech Stack**: Built with React 18 and TypeScript for type safety, utilizing a **Serverless Static Architecture** with a JSON-based data layer for lightning-fast performance and Vite for optimized builds. Integrated with Google Analytics (GA4) for engagement tracking.

---

## �️ Tech Stack

Designed with a **Serverless Static Architecture** utilizing a local JSON-based data layer for lightning-fast performance and zero-latency quiz transitions.

### ⚛️ Core Frontend
- **React 18**: Utilizing the latest React features like Concurrent Rendering and transition hooks for a smooth user experience.
- **TypeScript**: Implemented throughout the project to provide strict type-checking for quiz data structures, state management, and component props.

### ⚡ Build & Development
- **Vite**: Used as the build tool and development server, offering near-instantaneous Hot Module Replacement (HMR) and highly optimized production builds.
- **ESLint (Flat Config)**: Configured with standard rules for React and TypeScript to ensure high code quality and consistency.

### 🎨 Styling & UI/UX
- **Tailwind CSS**: A utility-first CSS framework used to create the app's modern "Glassmorphism" aesthetic.
- **Lucide React**: A collection of beautiful, lightweight SVG icons used for navigation (Home, Back) and quiz feedback (Check, X, Skip).
- **PostCSS**: Used for CSS transformations and Autoprefixer to ensure styles work across all modern browsers.

### 📊 Data & Analytics
- **JSON-Driven Architecture**: The entire curriculum (6 weeks, 36+ sets) is stored in a structured `quizData.json` file, making it easy to update or add new subjects without touching the logic.
- **React GA4**: Integrated with Google Analytics 4 (G-XGLMVEGNZB) to track user acquisition, quiz completion rates, and page interactions.

### 🏗️ State Management
- **React Context/Hooks**: Leverages `useState` and `useEffect` for managing the multi-stage quiz flow (Weeks → Sets → Quiz → Analysis).

---

## �📁 Project Structure

```sh
└── Vitol_quiz_app/
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── src
    │   ├── App.tsx
    │   ├── components
    │   ├── data
    │   ├── index.css
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```


### 📂 Project Index
<details open>
	<summary><b><code>VITOL_QUIZ_APP/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
				<td>PostCSS configuration enabling Tailwind CSS and autoprefixer.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td>TypeScript configuration for Node-based tooling.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>Lock file tracking exact versions of installed dependencies.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Project configuration referencing other TypeScript configs.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>Tailwind CSS setup with custom gradient animation.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td>TypeScript options used when compiling the React app.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/package.json'>package.json</a></b></td>
				<td>Project metadata and npm scripts.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
				<td>Build configuration using Vite with the React plugin.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/index.html'>index.html</a></b></td>
				<td>HTML entry point for the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
				<td>ESLint rules for TypeScript and React projects.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/main.tsx'>main.tsx</a></b></td>
				<td>Entry file that renders the React application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/index.css'>index.css</a></b></td>
				<td>Global Tailwind CSS styles.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/App.tsx'>App.tsx</a></b></td>
				<td>Root component managing quiz flow and state.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
				<td>Type definitions for Vite's environment variables.</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/components/QuizQuestion.tsx'>QuizQuestion.tsx</a></b></td>
						<td>Displays a single quiz question with navigation controls.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/components/Background.tsx'>Background.tsx</a></b></td>
						<td>Provides the gradient background wrapper.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/components/VideoSection.tsx'>VideoSection.tsx</a></b></td>
						<td>Contains the embedded YouTube video.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/components/Contributors.tsx'>Contributors.tsx</a></b></td>
						<td>Shows contributor details with social links.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/components/QuizAnalysis.tsx'>QuizAnalysis.tsx</a></b></td>
						<td>Calculates statistics and lists answers after a quiz.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/components/WeekCard.tsx'>WeekCard.tsx</a></b></td>
						<td>Card element representing a week selection.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Satya1929/Vitol_quiz_app/blob/master/src/components/QuizCard.tsx'>QuizCard.tsx</a></b></td>
						<td>Selectable card for each quiz set or PYQ.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with Vitol_quiz_app, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


### ⚙️ Installation

Install Vitol_quiz_app using one of the following methods:

**Build from source:**

1. Clone the Vitol_quiz_app repository:
```sh
❯ git clone https://github.com/Satya1929/Vitol_quiz_app
```

2. Navigate to the project directory:
```sh
❯ cd Vitol_quiz_app
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run Vitol_quiz_app using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

<!-- 
### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
``` -->


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Deploy and Bring 10,000+ page visits.</strike>
- [ ] **`Task 2`**: Implement Same for Multiple Subjects.
- [ ] **`Task 3`**: Implement AI suggestion to reduce mistakes.

---

## 🔰 Contributing

- **🐛 [Report Issues](https://github.com/Satya1929/Vitol_quiz_app/issues)**: Submit bugs found or log feature requests for the `Vitol_quiz_app` project.
- **💡 [Submit Pull Requests](https://github.com/Satya1929/Vitol_quiz_app/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Satya1929/Vitol_quiz_app
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Satya1929/Vitol_quiz_app/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Satya1929/Vitol_quiz_app">
   </a>
</p>
</details>

---

<!-- ## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file. (To Do)

--- -->

## 🙌 Acknowledgments

- Developed by Satyaprakash Swain using official VIT Chennai study materials.

---
