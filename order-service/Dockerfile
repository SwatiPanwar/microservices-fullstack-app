FROM node:18

WORKDIR /app

# package files copy karo
COPY package*.json ./

# dependencies install
RUN npm install

# baaki code copy
COPY . .

# app run command
CMD ["node", "index.js"]
