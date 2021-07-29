FROM node:14

USER root
# Create app directory
ENV HOME=/usr/app
RUN mkdir $HOME
WORKDIR $HOME
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

COPY ./ ./
EXPOSE 8080
RUN npm run build
CMD [ "node", "server.js" ]
