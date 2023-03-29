#!/bin/sh

# Add your backup dir location, s3 location, password, mysql location and mysqldump location
DATE=$(date +%d-%m-%Y)


GZIP=$(which gzip)
MYSQL=$(which mysql)
MYSQLDUMP=$(which mysqldump)
HOST=$DB_CONTAINER_NAME

# get a list of databases
databases=$($MYSQL -h ${HOST} -u root -p$DB_PASSWORD -e "SHOW DATABASES;" | grep -Ev "(Database|information_schema)")

echo "$databases"

$MYSQLDUMP --force --opt -h ${HOST} -u root -p$DB_PASSWORD --skip-lock-tables --databases $DB_DATABASE | gzip | \
  s3cmd put - s3://$S3_BUCKET_NAME/$PROJECT_NAME/$DB_DATABASE/$DB_DATABASE-$DATE.sql.gz

  # TODO: Add checks to make sure backup was sent successfully



