FROM node:latest

WORKDIR /app

COPY . .

RUN npm i

CMD ["npx", "ts-node", "func.ts"]