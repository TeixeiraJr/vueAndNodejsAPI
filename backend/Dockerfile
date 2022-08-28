FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

COPY .env .

EXPOSE 3000

CMD node src/index.js