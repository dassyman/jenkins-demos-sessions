FROM node:alpine3.12

WORKDIR /opt/app

COPY index.js .
COPY package.json .
COPY package-lock.json .

RUN npm install --only=production

EXPOSE 8080

CMD ["npm","start"]