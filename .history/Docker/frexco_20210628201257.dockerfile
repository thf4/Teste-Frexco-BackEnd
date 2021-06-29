FROM node:latest

COPY package*.json ./
ENV NODE_ENV=development
WORKDIR /home/app
RUN npm install

COPY . .
EXPOSE 3000:3000

CMD ["yarn", "start"]
