FROM node:16
WORKDIR /backend
COPY ./package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "server"]