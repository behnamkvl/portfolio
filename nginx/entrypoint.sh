#!/bin/sh

env >> /etc/environment

# execute CMD
echo "starting cron jobs container!"
echo "$@"
exec "$@"

certbot --nginx -d behnamkvl.me -d www.behnamkvl.me -n --agree-tos -m behnam.vr@gmail.com
