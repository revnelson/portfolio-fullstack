
FROM alpine:latest

ARG S3_ACCESS_KEY
ARG S3_ACCESS_SECRET
ARG S3_BACKUP_INTERVAL=15min
ARG S3_ENCRYPTION_PASSWORD
ARG S3_EXPIRY_DAYS

COPY ./backup.sh /etc/periodic/${S3_BACKUP_INTERVAL}/backup.sh

RUN apk update
RUN apk upgrade
RUN apk add --no-cache mariadb-client nano
RUN chmod a+x /etc/periodic/${S3_BACKUP_INTERVAL}/*

RUN apk add --no-cache python3 py-pip
RUN pip install --no-cache-dir s3cmd && mkdir /s3

RUN s3cmd --access_key=${S3_ACCESS_KEY} --secret_key=${S3_ACCESS_SECRET} --expiry-days=${S3_EXPIRY_DAYS} -s --dump-config 2>&1 | tee /root/.s3cfg

RUN sed -i "s/encrypt =.*/encrypt = True/" /root/.s3cfg

RUN sed -i "s/gpg_passphrase.*/gpg_passphrase = ${S3_ENCRYPTION_PASSWORD}/" /root/.s3cfg