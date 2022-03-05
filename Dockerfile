FROM node:9-slim
WORKDIR /budget-app-be
COPY package.json /server
RUN npm i
COPY . /index
CMD ['npm', 'start']
