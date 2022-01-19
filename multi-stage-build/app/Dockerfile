FROM node:latest as base
COPY . .
RUN npm install
FROM node:alpine as main
COPY --from=base node_modules ./node_modules
COPY --from=base index.js .
COPY --from=base package.json .
COPY --from=base env .
EXPOSE 3000
CMD [ "node", "index.js" ]
