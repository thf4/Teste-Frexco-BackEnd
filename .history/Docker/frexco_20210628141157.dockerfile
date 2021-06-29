FROM node:latest
LABEL key="thalesF" 
ENV NODE_ENV=development
COPY . /var/www
WORKDIR /var/www
RUN yarn add
CMD ["yarn", "nodemon", "index.js"]
EXPOSE 3000
