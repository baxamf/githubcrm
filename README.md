# github CRM

Simple CRM for public github repos

Preconditions:

- ports 6379, 5432, 3000, 4173 have to be free, so close all services which are using these ports
- docker, docker-compose installed
- clone repo and create .env files in both folders: api, client
- add content from files.env.example to appropriate .env files

After that in root folder (where docker-compose.yaml located) execute next commands

- docker-compose build
- docker-compose up -d

Client will be able on http://localhost:4173/
