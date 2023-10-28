FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm i --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]
