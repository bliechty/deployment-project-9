FROM node:current-alpine

WORKDIR /usr/local/projectNine/

COPY . .

EXPOSE 3000

RUN npm install

CMD ["node", "app"]