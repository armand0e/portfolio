#!/bin/bash

# Portfolio Deployment Script
# This script builds and deploys the Arman Rafiee portfolio using Docker

set -e

echo "🚀 Starting portfolio deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get version from package.json or use timestamp
VERSION=$(date +%Y%m%d-%H%M%S)
IMAGE_NAME="arman-portfolio"
CONTAINER_NAME="arman-portfolio"

echo -e "${BLUE}📦 Building Docker image: ${IMAGE_NAME}:${VERSION}${NC}"

# Build the Docker image
docker build -t ${IMAGE_NAME}:${VERSION} -t ${IMAGE_NAME}:latest .

echo -e "${GREEN}✅ Docker image built successfully!${NC}"

# Stop and remove existing container if it exists
if docker ps -a --format "table {{.Names}}" | grep -q ${CONTAINER_NAME}; then
    echo -e "${YELLOW}🔄 Stopping existing container...${NC}"
    docker stop ${CONTAINER_NAME} || true
    docker rm ${CONTAINER_NAME} || true
fi

echo -e "${BLUE}🚀 Starting new container...${NC}"

# Run the new container
docker run -d \
  --name ${CONTAINER_NAME} \
  -p 3000:3000 \
  --restart unless-stopped \
  ${IMAGE_NAME}:latest

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${BLUE}🌐 Portfolio is now running at: http://localhost:3000${NC}"

# Show container status
echo -e "${BLUE}📊 Container status:${NC}"
docker ps --filter "name=${CONTAINER_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo -e "${YELLOW}📝 Useful commands:${NC}"
echo -e "  View logs: ${GREEN}docker logs ${CONTAINER_NAME}${NC}"
echo -e "  Stop container: ${GREEN}docker stop ${CONTAINER_NAME}${NC}"
echo -e "  Restart container: ${GREEN}docker restart ${CONTAINER_NAME}${NC}" 