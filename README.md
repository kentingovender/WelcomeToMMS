#Angular Application - Welcome Page
This is a basic Angular application featuring a landing page where users can input their name. When a name is entered, a button is enabled that, upon clicking, displays a popup with the message "Welcome to MMS." The design draws inspiration from the Metal Management Solutions website.

#Features:
Input field for entering the user's name.
Button that is disabled until text is entered in the input field.
Displays a popup with a welcome message when the button is clicked.
Responsive design with custom styling inspired by Metal Management Solutions.
Hosted on GitHub Pages.
Demo
You can view the live demo of the app here.

#Getting Started
To run this project locally, follow these steps:

#Prerequisites:
Node.js (v14+)
Angular CLI (v12+)
Git

#Installation:

#Clone the repository:
git clone https://github.com/<your-username>/<repository-name>.git

#Navigate to the project directory:
cd <repository-name>

#Install the dependencies:
npm install

#Start the development server:
ng serve

#Open your browser and go to:
http://localhost:4200/

#Building for Production
To build the project for production and host it on GitHub Pages:

-ng build --output-path docs --base-href /<repository-name>/
Then, push the generated files in the docs folder to the main branch of your repository.

#Hosting on GitHub Pages
Ensure that the docs folder is pushed to the main branch of your repository.
Go to the Settings of your repository.
Scroll down to GitHub Pages and select the /docs folder as the source.
Your site will be live at https://<your-username>.github.io/<repository-name>/.


#Technologies Used
Angular
HTML5 & CSS3
TypeScript
GitHub Pages for deployment


