FROM node:10.19.0

WORKDIR /app
COPY package*.json ./

RUN yarn install
COPY ./ ./
EXPOSE 5000
CMD ["yarn", "start"]
