#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

echo "Apply database makemigrations"
python manage.py makemigrations
echo "Apply database migrations"
python manage.py migrate


exec "$@"
