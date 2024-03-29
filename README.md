# Automated Daily Email Sender


## Description
Node.js application that sends an email programmatically every day at 10 AM Eastern Standard Time (EST) using gmail. The email's content is a simple message of such as "Good Morning! This is your daily reminder."

## Brief Explanation of My Code

Using Node.js and the installed dependencies, I created App.js. I imported the required packages, added nodemailer with environment variables from the env file, created a function sendEmail for creating and sending email using nodemailer and lastly using the cron.schedule to schedule an automated daily  daily at 10 AM EST. 


**Decisions Made During Development:** Deciding between using .env file or leaving the information to be filled on App.js

The structure of the function in App.js on if I can improve it. 


## Set Up Instructions & Getting Started

1. The project requires [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) to be installed on your device. 


2. Clone the repository from my repository in your terminal
   ```bash
   git clone https://github.com/yourusername/your-repo.git

3. Install dependencies in your terminal
    ```bash
    npm install nodemailer node-cron dotenv

4. Second, go into your .env file and fill in the information for Email_Address that will send the email, the [Email_Password](https://support.google.com/mail/thread/205453566/how-to-generate-an-app-password?hl=en) (since we are using sensitive information, use gmail app password)


## How to Run Application

1. On the terminal now run the command in the background as long as the terminal is not killed
    ```bash
    node App.js &
