# 🚀 Getting started

First, create an `.env` file with the following:

```dotenv
# Client Environments
NODE_ENV=development
#NODE_ENV=production
#NODE_ENV=directedsuccess
#NODE_ENV=awardedsolutions

HOST_PORT_DEVELOPMENT=5000
HOST_PORT_DIRECTEDSUCCESS=5100
HOST_PORT_AWARDEDSOLUTIONS=5200

# Database 
DATABASE_CLIENT_DEV=sqlite
DATABASE_FILENAME_DEV=.tmp/data.db
DATABASE_FILENAME_DIRECTEDSUCCESS=.tmp/data-directedsuccess.db
JWT_SECRET=7H+XTgupl7L1ZNVI9TbznQ==

# Application
HOST_DEV=0.0.0.0
APP_KEYS=lwuifWMbLfhWhG63yD3xGg==,ezLrdJfNt8OFjSWdMQjfCw==,hSSc6vR0XpMtCxHdOeR26w==,jUg13pKgBI96TIN4Y9502w==
API_TOKEN_SALT=fw7EOYX+6AZHhJ038m/5YA==
ADMIN_JWT_SECRET=PXqoWzIrhLT8sX+8DgFRyw==
TRANSFER_TOKEN_SALT=piT+tDgiXGIlZnqTrMAr9g==

```

Next, install packages:

```bash
npm install
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:5001/admin](http://localhost:5001/admin) with your browser to start.

# Scripts

## Application

```bash
npm run start:pm2    # start production using pm2 - runs all clients
```

```bash
pm2 monit           # monitor pm2 processes

```
