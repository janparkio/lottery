FROM node:16.14.0-alpine3.15

WORKDIR /app

COPY . .

RUN sed -i '/openBrowser/ d' /app/server/server.js \
    && cd /app/server \
    && npm install \
    && cd ../product \
    && npm install \
    && npm run build

EXPOSE 8888

WORKDIR /app/product

CMD ["npm", "run", "serve"]
