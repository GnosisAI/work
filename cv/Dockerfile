FROM node
MAINTAINER Zakaria Fellah
COPY . /var/www
WORKDIR /var/www
RUN npm install 
RUN npm install -g webpack webpack-cli webpack-dev-server
RUN webpack
EXPOSE 8080
CMD [ "webpack-dev-server", "--host", "0.0.0.0" ]

