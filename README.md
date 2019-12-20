# Docker Environments
Environments for dev and production of dockerized web apps
## Basic Usage (for production)
- Download docker-compose.yml file.
- change image names for client and server.
- RUN `docker-compose up`
## Configuration
The application can be configured using environment variables in docker-compose file. The fields with defaults are as follows.
#### Server
 - MONGO_URI= `mongodb=//db=27017/db`: mongodb url to connect to.
 - PORT= `3001`: Server port
 - NODE_ENV= `production`: Node environment
 - HOST= `http=//159.65.137.16`: Server IP address (localhost for dev)
 - TZ= `Asia/Kolkata`: Server Time zone for some dependencies.
 #### Client
- [.env.production](./client/.env.production): React production variables
- [.env.development](./client/.env.development): React development env variables
#### Mongo
- MONGO_INITDB_ROOT_USERNAME=`something` Mongo username 
- MONGO_INITDB_ROOT_PASSWORD=`strong!password` Mongo password

NOTE: Don't forget to specify the same in server code if specified here. Default is none since the containers are protected by
firewalls.

## Development
- Clone the repository and enter the root directory.
- RUN `make dev`(using makefile) or `docker compose -f dev-dockerfile.yml up --build`

### Repository Prod build
- Clone the repository and enter the root directory. `git clone https://github.com:MohitKS5/realtime-stats-triggers.git && cd realtime-stats-triggers`
- RUN `make prod`(using makefile) or `docker compose up --build`
