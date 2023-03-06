FROM node:18-alpine
RUN mkdir /myapp
WORKDIR /myapp
COPY . .
CMD npm install && npm run start
EXPOSE 3000
