FROM nginx:latest

WORKDIR /usr/share/nginx

COPY default.conf /etc/nginx/conf.d/

COPY /html /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]