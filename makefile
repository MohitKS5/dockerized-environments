dev:
	docker-compose -f dev-docker-compose.yml up -d --build
prod:
	docker-compose up -d --build
