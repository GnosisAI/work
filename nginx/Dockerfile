
## Satge 1
FROM node as cv
LABEL MAINTAINER = "Zakaria Fellah"
COPY cv /var/www/cv
WORKDIR /var/www/cv
RUN npm install 
RUN npm install -g webpack webpack-cli
RUN webpack

## Stage 2
From node as Algorithmia
COPY frontend-algorithmia /var/www/algorithmia
WORKDIR /var/www/algorithmia
RUN npm install
RUN npm run build

## Serve Stage
FROM nginx:alpine
COPY ./config/cv.conf /etc/nginx/conf.d/cv.conf
COPY --from=cv /var/www/cv /var/www/cv
COPY ./config/algorithmia.conf /etc/nginx/conf.d/algorithmia.conf
COPY --from=Algorithmia /var/www/algorithmia/dist /var/www/algorithmia/
EXPOSE 81
EXPOSE 82