FROM node:20-alpine

RUN npm install -g chii

ENV HOST=0.0.0.0
ENV PORT=8080
ENV BASE_PATH=/
ENV DOMAIN=

EXPOSE 8080

CMD ["sh", "-c", "chii start -h \"$HOST\" -p \"$PORT\" -d \"$DOMAIN\" --base-path \"$BASE_PATH\""]
