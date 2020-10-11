FROM node:14-alpine3.12

RUN apk add --update --no-cache git && \
    npm install -g @angular/cli@10.1.3

COPY entrypoint.sh /entrypoint.sh
COPY app /app

WORKDIR /app
EXPOSE 4200

ENTRYPOINT ["sh", "/entrypoint.sh"]