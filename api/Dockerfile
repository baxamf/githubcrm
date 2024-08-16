FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY prisma ./prisma/

COPY . .

RUN npm run build

CMD [ "sh", "-c", "npm run start:prod" ]

