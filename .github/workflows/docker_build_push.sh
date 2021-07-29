#!/usr/bin/env bash

set -eo pipefail

# find $1 -type d
ls $1

# SHA=$(git rev-parse HEAD)

echo "docker file path is ${1}"
echo "docker tag is: ${REPOSITORY_NAME}:latest"
cd $1
#
# Build the  image
#

docker build \
  -t "${REPOSITORY_NAME}:latest" \
  --label "built_at=$(date)" \
  --label "build_actor=${GITHUB_ACTOR}" \
  .

docker build \
  -t "behnamkvl/portfolionginx:1.19.0-alpine" \
  --label "built_at=$(date)" \
  --label "build_actor=${GITHUB_ACTOR}" \
  -f ./nginx/Dockerfile.nginx 

if [ -z "${DOCKERHUB_TOKEN}" ]; then
  # Skip if secrets aren't populated -- they're only visible for actions running in the repo (not on forks)
  echo "Skipping Docker push"
else
  # Login and push
  docker logout
  docker login --username "${DOCKERHUB_USER}" --password "${DOCKERHUB_TOKEN}"
  docker push "${REPOSITORY_NAME}:latest"
  docker push "behnamkvl/portfolio-nginx:1.19.0-alpine"
fi
