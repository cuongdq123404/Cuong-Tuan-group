# Stage 1: builder - install all dependencies
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Stage 2: production - minimal runtime image
FROM node:18-alpine AS production
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app .

EXPOSE 8080
CMD ["npm", "start"]
