FROM node:18-bullseye

RUN apt-get update && apt-get install -y python3 g++ make libcairo2-dev libjpeg-dev libgif-dev

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm rebuild lightningcss --build-from-source

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]