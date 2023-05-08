FROM node:20-alpine3.16

WORKDIR /src/app
COPY . .
RUN npm install 
EXPOSE 4200
RUN chown -R node /src/app

CMD ["npm", "start"]
