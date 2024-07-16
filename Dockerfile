FROM nginx:alpine

WORKDIR /var/www/homepage

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./build .

EXPOSE 80
