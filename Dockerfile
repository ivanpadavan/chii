FROM node:20-alpine

RUN npm install -g chii

EXPOSE 8080

CMD ["chii", "start", "-h", "0.0.0.0", "-p", "8080"]
