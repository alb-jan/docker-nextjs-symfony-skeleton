FROM node:18-alpine

WORKDIR /app

# install build tools if you need them
RUN apk add --no-cache python3 g++ make libc6-compat cairo-dev jpeg-dev giflib-dev

# copy project files
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]