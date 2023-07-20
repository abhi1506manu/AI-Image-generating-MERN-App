# AI Image Generating MERN App

## DEMO
Screenshot
![Home](https://i.imgur.com/pkg4IDN.png)
<hr>
![Images](https://i.imgur.com/uivXMPT.png)
<hr>
![create-post](https://i.imgur.com/DMKAcOF.png)

## Tech Stack
For Frontend
* [React](https://legacy.reactjs.org/docs/hello-world.html)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/docs/installation)

For Backend
* [NodeJs](https://nodejs.org/en/docs/guides)
* [ExpressJs](https://expressjs.com/en/starter/installing.html)

Database
* [MongoDB](https://www.mongodb.com/docs/manual/introduction/)

## Quick Start
Clone the repository
```
$ git clone https://github.com/abhi1506manu/AI-Image-generating-MERN-App.git

```

### Fronted/Client
Install Dependencies for client
```
$ cd client
$ npm install
```

### Backend/Server 
Install Dependencies for server
```
$ cd backend
$ npm install
```

create a ``.env`` file and add the following:-

- create an account on [MongoDB Atlas](https://www.mongodb.com/atlas/database) and get   connecting Url
- Create an account on [OpenAI](https://openai.com/) and get your API Key
- Similarly create an account on [Cloudinary](https://cloudinary.com/) and get your API key, Secret Key and cloud name

```
MongoDB_URL = 'mongodb+srv://username:password@cluster0.al2unni.mongodb.net/'
OPENAI_API_KEY='sk-jdjksaodsxssxnxsjsjxj'
CLOUDINARY_NAME ='cloud-name'
CLOUDINARY_API_KEY ='api'
CLOUDINARY_SECRET_KEY='secret-key'

```

### Run both client and server concurrently
For client
```
$ npm run dev
```
For Backend

```
$ npm start
```
### Thank you
