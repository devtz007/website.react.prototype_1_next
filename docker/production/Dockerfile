# Stage 1: build
FROM node:lts-alpine AS builder
WORKDIR /app
COPY ../../package.json ../../package-lock.json ./
RUN npm ci
COPY ../.. ./
RUN npm run build

# Stage 2: runtime
FROM node:lts-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
