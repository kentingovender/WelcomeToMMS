Angular Application - Welcome Page
This is a basic Angular application featuring a landing page where users can input their name. When a name is entered, a button is enabled that, upon clicking, displays a popup with the message "Welcome to MMS." The design draws inspiration from the Metal Management Solutions website.

Features:
Input field for entering the user's name.
Button that is disabled until text is entered in the input field.
Displays a popup with a welcome message when the button is clicked.
Responsive design with custom styling inspired by Metal Management Solutions.
Hosted on GitHub Pages.
Demo
You can view the live demo of the app here.

Getting Started
To run this project locally, follow these steps:

Prerequisites:
Node.js (v14+)
Angular CLI (v12+)
Git
Installation:
Clone the repository:

bash
Copy code
git clone https://github.com/<your-username>/<repository-name>.git
Navigate to the project directory:

bash
Copy code
cd <repository-name>
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
ng serve
Open your browser and go to:

arduino
Copy code
http://localhost:4200/
Building for Production
To build the project for production and host it on GitHub Pages:

bash
Copy code
ng build --output-path docs --base-href /<repository-name>/
Then, push the generated files in the docs folder to the main branch of your repository.

Hosting on GitHub Pages
Ensure that the docs folder is pushed to the main branch of your repository.
Go to the Settings of your repository.
Scroll down to GitHub Pages and select the /docs folder as the source.
Your site will be live at https://<your-username>.github.io/<repository-name>/.
Project Structure
perl
Copy code
<repository-name>/
│
├── docs/                   # Built application (for GitHub Pages)
├── src/                    # Source code of the application
│   ├── app/                # Angular components
│   ├── assets/             # Static assets (e.g., images, fonts)
│   ├── styles.css          # Global styles
│   └── index.html          # Main HTML file
│
├── angular.json            # Angular CLI configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project description (this file)
├── tsconfig.json           # TypeScript configuration
└── .gitignore              # Files to ignore in the repository
Technologies Used
Angular
HTML5 & CSS3
TypeScript
GitHub Pages for deployment

