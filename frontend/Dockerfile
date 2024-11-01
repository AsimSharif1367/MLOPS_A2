from node:16 as build
workdir /app
copy package*.json ./
run rm -rf node_modules && npm install --force
copy . .
run npm run build

from nginx:alpine
copy --from=build /app/build /usr/share/nginx/html
expose 80
cmd ["nginx", "-g", "daemon off;"]