FROM node:18-alpine

WORKDIR /usr/rc/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm","run","start"]