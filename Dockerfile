FROM node:10-alpine
WORKDIR /usr/src/app

COPY . .
RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
