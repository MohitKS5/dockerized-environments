# Build in this container
FROM node:12.14.0-alpine as react_builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./client/package* /usr/src/app

# Set production flag so dev dependencies aren't installed
RUN yarn install --production=true

COPY ./client /usr/src/app

# Build the production build
RUN yarn build

#############################
#     Server Build          #
#############################
FROM node:12.14.0-alpine as builder

RUN mkdir -p /app/server
WORKDIR /app/server

COPY ./server/package*.json /app/server/

# Install dependencies
RUN yarn install --production=true

# Copy the server files over
COPY ./server /app/server

#############################
#     Final Image           #
#############################
FROM node:12.14.0-alpine

# Create and set the working directory
RUN mkdir -p /app/server
WORKDIR /app/server

# Copy the server from the build container
COPY --from=builder /app/server /app/server

# Copy the react build from the build container
COPY --from=react_builder /usr/src/app/build /app/server/public


CMD ["node", "server.js"]