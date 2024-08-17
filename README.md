<h2>Live Link: <a href="https://hotwheels-2b915.web.app/">Hot Wheels</a></h2>
<h2>Server Side Code: <a href="https://github.com/mushfiq7297/hotWheels-serever">Server</a></h2>
<h1>Project Overview:</h1>
<p>This project will focus on implementing pagination, searching, categorization and sorting of products.
</p>
<h3>Installation and Setup:</h3>
<p>
  To clone and run this project locally, follow these steps:
</p>
<p>
 1. Clone the repository:<br>

  ```
git clone [repository URL]
```

</p>
<p>
2. Navigate to the project directory:<br>

  ```
cd [project directory]
```

</p>
<p>
3. Install dependencies:<br>

  ```
npm install
```

</p>
<p>
  4. Setup MongoDB:<br>
  <ul>
    <li>Ensure you have MongoDB installed and running on your local machine.<br></li>
    <li> Create a .env file in the root of the project and add your MongoDB connection string:<br></li>  
    </ul>
    
  ```
MONGO_URI=your_mongodb_connection_string
```

     
 
</p>
<p>
  5. Setup Firebase:<br>
  <ul>
    <li>Go to the Firebase Console and create a new project.</li>
    <li>Enable Firebase Authentication and set up the desired authentication methods.</li>
    <li>Create a firebaseConfig.js file in the src directory and add your Firebase configuration:</li>
    </ul> 
</p>

```
    const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_auth_domain",
    projectId: "your_project_id",
    storageBucket: "your_storage_bucket",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id"
    };
```

<p>
6. Run the project:<br>

  ```
npm start
```

</p>




- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

