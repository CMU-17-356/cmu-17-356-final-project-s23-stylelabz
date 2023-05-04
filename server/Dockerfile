FROM node:17-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

COPY . .

RUN npm ci
RUN npx tsc

FROM node:17-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY --from=builder ./usr/src/app/dist ./dist

RUN npm ci --production

COPY . .

EXPOSE 8080
CMD [ "npm", "run", "start" ]
