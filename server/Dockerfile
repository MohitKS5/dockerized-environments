FROM node:10.9.0-alpine as builder

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package*.json /app/server/

# Install dependencies
RUN npm install --production=true

# Copy the server files over
COPY . /app/server/

FROM node:10.9.0-alpine

# Create and set the working directory
RUN mkdir -p /app/server
WORKDIR /app/server

# Copy the server from the build container
COPY --from=builder /app/server /app/server

CMD ["node", "server.js"]