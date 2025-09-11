# Cài dependencies bằng Yarn
FROM node:18-alpine AS deps
WORKDIR /app

# Cài đặt Yarn nếu image không có sẵn
RUN corepack enable

# Copy file lock để cài chính xác phiên bản
COPY package.json yarn.lock ./

# Cài dependencies
RUN yarn install --frozen-lockfile

# Copy toàn bộ mã nguồn
FROM node:18-alpine AS builder
WORKDIR /app
RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/yarn.lock ./yarn.lock
COPY . .

# Build app Next.js
RUN yarn build

# Tối ưu cho production: dùng chế độ standalone
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy các file cần thiết từ build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]
