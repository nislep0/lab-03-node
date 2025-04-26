APP_NAME=lab-node
.PHONY: build run clean
build:
  docker build -t $(APP_NAME):default -f Dockerfile.default .
  docker build -t $(APP_NAME):alpine -f Dockerfile.alpine .
  docker build -t $(APP_NAME):multistage -f Dockerfile.multistage .

run:
  docker compose up --build

clean:
  docker compose down -v
  docker rmi $(APP_NAME):default $(APP_NAME):alpine $(APP_NAME):multistage || true
