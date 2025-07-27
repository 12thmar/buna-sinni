FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean install
RUN npm install

# Copy rest of your app
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start dev server with external access
CMD ["npm", "run", "dev", "--", "--host"]
