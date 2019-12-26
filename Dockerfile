FROM node

#RUN apk add --no-cache bash    // this for alpin

WORKDIR /var/www/example-server

COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000


CMD [ "npm", "run", "start:debug" ]

