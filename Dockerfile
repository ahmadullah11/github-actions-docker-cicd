<<<<<<< HEAD
FROM  node:22-alpine

WORKDIR /app

COPY  package.json ./
RUN npm install 

COPY . .

EXPOSE 8080 

CMD ["node", "index"]
=======
﻿FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
>>>>>>> 7603ce9b45d7ddf743da6bf9f5b94436e579d84c
