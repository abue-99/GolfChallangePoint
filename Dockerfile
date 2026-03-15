# ---- build stage ----
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# ---- runtime stage ----
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app
# Stelle sicher, dass deine App auf 0.0.0.0 lauscht
EXPOSE 3000
CMD ["npm", "start"]