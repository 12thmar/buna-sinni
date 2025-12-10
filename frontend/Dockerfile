# --- Dev stage: for local development in Docker ---
FROM node:20-alpine AS dev
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci --include=dev && npm i react-router-dom@^6

# Copy source
COPY . .

# Vite dev server
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]


# --- Build stage: for production build ---
FROM node:20-alpine AS build
WORKDIR /app

# Copy manifests
COPY package*.json ./
RUN npm ci --include=dev && npm i react-router-dom@^6

# Now copy the rest
COPY . .
RUN ls -la . && cat postcss.config.cjs || true
RUN npm run build    # uses .env.production


# --- Runtime stage: nginx serving built files ---
FROM nginx:alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
