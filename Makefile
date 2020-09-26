BASE = github.com/mkadiri
IMAGE = frontend-microservice
TAG = local

build:
	docker build -t ${BASE}/${IMAGE}:${TAG} .