#!/bin/sh

env >> /etc/environment

# execute CMD
echo "starting cron jobs container!"
echo "$@"
exec "$@"

/etc/init.d/nginx start
