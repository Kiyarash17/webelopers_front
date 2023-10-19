FROM node:16.3.0-alpine as dependencies
WORKDIR /webelopers-front
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.3.0-alpine as builder
WORKDIR /webelopers-front
COPY . .
COPY --from=dependencies /webelopers-front/node_modules ./node_modules
RUN yarn build

FROM node:16.3.0-alpine as runner
WORKDIR /webelopers-front
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /webelopers-front/next.config.js ./
COPY --from=builder /webelopers-front/public ./public
COPY --from=builder /webelopers-front/.next ./.next
COPY --from=builder /webelopers-front/node_modules ./node_modules
COPY --from=builder /webelopers-front/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]