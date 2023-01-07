FROM bitnami/laravel:latest as base

RUN apt-get update \
        && apt-get install -y \
            g++ \
            libicu-dev \
            libpq-dev \
            libzip-dev \
            zip \
            zlib1g-dev \
            libpng-dev \
            libfreetype6-dev \
            libjpeg62-turbo-dev \
            libwebp-dev
      
RUN echo extension=pdo_pgsql >> /opt/bitnami/php/etc/php.ini 
RUN echo extension=pgsql >> /opt/bitnami/php/etc/php.ini 

FROM base as development

WORKDIR /usr/src

EXPOSE 8000