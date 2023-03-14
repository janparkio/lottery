FROM node:16.14.0-alpine3.15
WORKDIR /
RUN chown -R root / \
    && sed -i '/openBrowser/ d' /server/server.js \
    && cd /server \
    && npm install \
    && cd ../product \
    && npm install \
    && npm run build
EXPOSE 8888
WORKDIR /product
CMD ["npm", "run", "serve"]
