FROM node:18-alpine

WORKDIR /

# Установить зависимости
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

# Установить nodemon
# RUN npm install -g nodemon
RUN pwd
COPY app /app
COPY public /app/public
COPY next.config.ts /app
COPY tsconfig.json /app
COPY tailwind.config.ts /app

# Запуск приложения с nodemon
CMD sh -c "if [ -f yarn.lock ]; then yarn dev; \
  elif [ -f package-lock.json ]; then npm run dev; \
  elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
  else npm run dev; \
  fi"
