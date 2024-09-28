![Screenshot 2024-09-28 223512](https://github.com/user-attachments/assets/a4479523-e9bc-4ac5-b6a2-a3feda7b85b9)
![Screenshot 2024-09-28 223501](https://github.com/user-attachments/assets/9cd79a53-0174-4f7a-a4cd-23ff37250bb0)
![Screenshot 2024-09-28 223403](https://github.com/user-attachments/assets/2148fb0d-a930-46e0-bd5d-4dda638c8f0b)
![Screenshot 2024-09-28 223339](https://github.com/user-attachments/assets/55bcfb4f-174c-4ba8-8286-f9076bac8d5d)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
  <h1>GetMeACoffee</h1>
  <p><strong>GetMeACoffee</strong> is a crowdfunding platform designed to support creators, developers, and individuals by allowing supporters to donate through a simple and intuitive interface. Built with modern web technologies, this platform provides a seamless user experience focusing on performance and security.</p>

  <h2>Tech Stack</h2>
  <h3>Languages</h3>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h3>Frameworks and Libraries</h3>
  <ul>
    <li><a href="https://nextjs.org/" target="_blank">Next.js</a> - React-based framework for building server-rendered applications.</li>
    <li><a href="https://reactjs.org/" target="_blank">React.js</a> - JavaScript library for building user interfaces.</li>
    <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> - A utility-first CSS framework for rapidly building custom designs.</li>
    <li><a href="https://authjs.dev/" target="_blank">Auth.js</a> - Authentication library for handling user login securely.</li>
    <li><a href="https://stripe.com/" target="_blank">Stripe</a> - Payment gateway integration for handling transactions.</li>
    <li><a href="https://nodejs.org/" target="_blank">Node.js</a> - JavaScript runtime used for backend development.</li>
  </ul>

  <h3>Database</h3>
  <ul>
    <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a> - NoSQL database for storing user and project data.</li>
    <li><a href="https://mongoosejs.com/" target="_blank">Mongoose</a> - Object Data Modeling (ODM) library for MongoDB.</li>
  </ul>

  <h3>API Integration</h3>
  <p>API communication is handled using <strong>Mongoose</strong> for connecting the application to the MongoDB database.</p>

  <h2>Features</h2>
  <ul>
    <li>User authentication (via Auth.js).</li>
    <li>Payment gateway integration (via Stripe).</li>
    <li>Crowdfunding for creators.</li>
    <li>Dynamic project creation and funding goals.</li>
  </ul>

  <h2>Prerequisites</h2>
  <p>Before running the project, ensure you have the following installed:</p>
  <ul>
    <li><a href="https://nodejs.org/" target="_blank">Node.js</a> (version 14.x or higher)</li>
    <li><a href="https://www.mongodb.com/try/download/community" target="_blank">MongoDB</a> (local or cloud instance)</li>
  </ul>

  <h2>Installation and Setup</h2>
  <p>Follow these steps to install and set up the project locally:</p>

  <ol>
    <li><strong>Clone the repository:</strong></li>
    <pre><code>git clone https://github.com/your-username/getmeacoffee.git
cd getmeacoffee</code></pre>

    Install dependencies: Run the following command to install all necessary packages for both the front and backend:
    $npm install

    Set up environment variables: Create a .env.local file in the root directory and add the following:
    MONGODB_URI=your-mongodb-connection-string
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXTAUTH_URL=your-next-auth-url</code></pre>

    Run MongoDB: Ensure MongoDB runs locally or uses a cloud service like MongoDB Atlas.

    Run the development server: To start the Next.js development server,
    run:
    $npm run dev
    Your app should now be running at http://localhost:3000.
  </ol>

  <h2>Running the Project in Production</h2>
  <ol>
    <li><strong>Build the project:</strong></li>
    <pre><code>npm run build</code></pre>

    Start the production server:
    $npm start
  </ol>

  <h2>Folder Structure</h2>
  <pre><code>.
├── components     # React components
├── pages          # Next.js pages
├── public         # Static assets
├── styles         # Tailwind CSS configuration
├── lib            # Mongoose and other API integrations
└── .env.local     # Environment variables
</code></pre>

  <h2>Contributing</h2>
  <p>Feel free to fork this project and submit pull requests. Contributions are welcome!</p>
</body>
</html>

## Screenshots

