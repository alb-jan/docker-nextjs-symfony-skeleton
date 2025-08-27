FROM php:8.2-fpm

WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git unzip libicu-dev libzip-dev libpng-dev \
    libssl-dev pkg-config

# Install PHP MongoDB extension
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy project
COPY . .

# Install dependencies
RUN composer install --no-interaction --optimize-autoloader

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
