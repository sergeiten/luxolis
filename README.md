# Luxolis Coding Test

Build a simple application that allows users to:

- View a list of blog posts.
- View the details of a specific blog post.
- Add a new blog post.

## Requirements

To run application, you need Docker installed. The following Docker version is used while developing:

```
docker 27.5.1
```

## Getting started

#### Create .env file in backend directory with the following content:

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:EW+E1HetTxfqNqeVmlTIenv9L4wtpgC2TO6JkgzJ6m0=
APP_DEBUG=true
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

PHP_CLI_SERVER_WORKERS=4

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
# CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_SCHEME=null
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"
```

#### Run docker containers

```bash
docker compose -f docker/dev/compose.yaml up -d
```

#### Run migration

```bash
docker compose -f docker/dev/compose.yaml exec backend php artisan migrate
```

#### Running

The frontent application should be available at `http://localhost:3000`

The backend application should be available at `http://localhost:8000`
