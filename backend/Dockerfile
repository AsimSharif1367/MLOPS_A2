from node:16
workdir /app
copy package*.json ./
run npm install
copy . .
expose 3001
cmd ["node", "src/index.js"]