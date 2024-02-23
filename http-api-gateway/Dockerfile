FROM node:21

WORKDIR /user/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .