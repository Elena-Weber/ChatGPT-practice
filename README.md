## Description

This is a React application tht uses ChatGPT APIs to pull jokes with the parameters you give. It was built using this tutorial:
[https://www.freecodecamp.org/news/build-a-job-description-generator-with-nextjs-and-chatgpt/] (https://www.freecodecamp.org/news/build-a-job-description-generator-with-nextjs-and-chatgpt/)

## Getting Started

Clone the project and cd into the folder. Create a .env file if it doesn't exist.

Sing up on ChatGPT's official website: [https://openai.com/api/] (https://openai.com/api/)

Visit this page - [https://platform.openai.com/account/api-keys] (https://platform.openai.com/account/api-keys) - and create a secret key. Don't close it otherwise you'll never see it again.

Open the .env file and add this text there:

OPENAI_API_KEY = {place your API here and remove {}}

Add .env to the .gitignore file so your API key isn't submitted to GitHub.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. Type the first and the second characters, add some details and generate a joke. Have fun!

## Deployed app

Find it here:

