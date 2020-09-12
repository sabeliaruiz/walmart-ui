# docker build -t walmart-ui .
FROM node:carbon
 
WORKDIR /usr/src/app
 
COPY package.json package-lock.json ./
 
RUN npm i
 

COPY . .
 
EXPOSE 4200
 
CMD [ "npm", "start" ]