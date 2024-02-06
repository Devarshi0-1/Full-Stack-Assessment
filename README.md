
# Full Stack Auth

This project's only purpose is to be used for full stack assesment.



## Optimizations

I have made some changes from the assesment according to my understanding.


- Store the JWT in the LocalStorage for the browser:
I have used server side cookies to store the JWT token because it is the most secure method as LocalStorage is vulnerable to the client side JS (Cross side Scripting)

- .env files
I have uploaded the .env files on github so as to ease the process for setting up and I am well aware then we should not upload our env files for security purpose.

- Some future Optimizations
This is just a demo project and has been build that way because of the time constraints, and lacks many features.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Devarshi0-1/Full-Stack-Assessment.git
```

Go to the project directory

```bash
  cd Full-Stack-Assessment
```

Go to Client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the Client

```bash
  npm run dev
```

Go to Server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

