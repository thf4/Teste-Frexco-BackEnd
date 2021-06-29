FROM node:latest

COPY package*.json ./

WORKDIR /home/app
RUN npm install

COPY . .
EXPOSE 3000:3000

CMD ["yarn", "nodemon"]
