# IdeaSpark - AI Business Idea Validator

IdeaSpark is an AI-powered SaaS application that validates business ideas. It provides a comprehensive analysis of market viability, competition, potential revenue streams, and marketing strategies using the Gemini API. This project is proudly powered by Nkumba University.

![IdeaSpark Screenshot](https://i.imgur.com/example.png) <!-- Replace with an actual screenshot URL -->

## Features

- **In-Depth AI Analysis**: Leverages the Gemini API to generate a detailed report on any business idea.
- **Comprehensive Report**: Analysis includes Market Size, Competitor Landscape, SWOT, Target Audience Profile, Monetization Strategies, and more.
- **Viability Score**: Provides a score from 1-10 with a detailed justification, including positive factors and key risks.
- **Shareable Reports**: Generate a unique, shareable link for each analysis to collaborate with partners or mentors.
- **Sleek & Responsive UI**: Clean and modern user interface built with Tailwind CSS.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **AI**: Google Gemini API (`gemini-2.5-flash`)
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ideaspark.git
    cd ideaspark
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    - Create a file named `.env` in the root of your project.
    - Copy the contents of `.env.example` into it.
    - Add your Google Gemini API key to the `.env` file:
      ```
      VITE_API_KEY="YOUR_GEMINI_API_KEY_HERE"
      ```
    - You can get an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Running Locally

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or whatever port is indicated) in your browser to see the application.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1.  **Push your code to a GitHub repository.**

2.  **Import the repository on Vercel.**
    - Vercel will automatically detect that you are using Vite and configure the build settings. The `vercel.json` file in this repo ensures the settings are correct.

3.  **Configure Environment Variables:**
    - In your Vercel project settings, go to the "Environment Variables" section.
    - Add your Gemini API key with the name `VITE_API_KEY` and the value from your `.env` file.

4.  **Deploy!**
    - Vercel will build and deploy your application. Any subsequent pushes to the main branch will trigger automatic redeployments.
