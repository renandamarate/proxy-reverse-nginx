FROM node:14-alpine3.13

WORKDIR /home/node/app

COPY . .

RUN npm install mysql --save && \
    npm install express

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]