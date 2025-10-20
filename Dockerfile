FROM node:20-bullseye-slim

WORKDIR /app

COPY package*.json ./

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

ENV npm_config_build_from_source=sqlite3
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD [ "node", "src/main.js" ]