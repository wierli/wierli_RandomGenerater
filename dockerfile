FROM node AS builder
WORKDIR /app
COPY . /app/
RUN npm config set registry "https://registry.npm.taobao.org/"
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder /app/dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 7788