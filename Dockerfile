FROM node:16.14.0-alpine3.15
WORKDIR /lottery
RUN chown -R root /lottery && sed -i '/openBrowser/ d' /lottery/server/server.js
&& cd /lottery/server
&& npm install
&& cd ../product
&& npm install
&& npm run build
EXPOSE 8888
WORKDIR /lottery/product
CMD ["npm", "run", "serve"]
