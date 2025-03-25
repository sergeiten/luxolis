.PHONY: status
status: 
	docker compose -f docker/dev/compose.yaml ps

.PHONY: build
build: 
	docker compose -f docker/dev/compose.yaml build

.PHONY: start
start:
	docker compose -f docker/dev/compose.yaml up -d

.PHONY: stop
stop:
	docker compose -f docker/dev/compose.yaml down
