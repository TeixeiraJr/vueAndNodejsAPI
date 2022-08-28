FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .


EXPOSE $PORT

CMD node src/index.js