export PATH=$PATH:/usr/local/node-v5.11.0-linux-x64/bin
cnpm install
pm2 startOrRestart ecosystem.json --env production
