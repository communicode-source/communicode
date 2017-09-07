FROM node:8.4.0

ENV APP_HOME /usr/src/app

#ENV PORT 8080
#ENV APIPORT 3000

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ADD package.json $APP_HOME
RUN npm install -g yarn
RUN npm install -g pm2
ADD . $APP_HOME
RUN yarn install

EXPOSE 3000
EXPOSE 8080
EXPOSE 9615

CMD ["pm2-docker", "process.json", "--web"]
