FROM node:alpine

ADD . /var/app

WORKDIR /var/app

RUN npm install

CMD npm start

EXPOSE 3000