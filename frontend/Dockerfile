# build stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy manifests
COPY package*.json ./


# Install deps INCLUDING dev deps
RUN npm ci --include=dev && npm i react-router-dom@^6

# Now copy the rest
COPY . .
RUN ls -la . && cat postcss.config.cjs || true
RUN npm run build

# --- Runtime stage (optional: nginx to serve static) ---
FROM nginx:alpine AS runtime
# SPA fallback + static caching
COPY nginx.conf /etc/nginx/conf.d/default.conf
# remove default site and add ours
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
