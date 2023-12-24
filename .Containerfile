FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g serve

COPY . .

EXPOSE 3510

CMD [ "npm", "run", "serve" ]