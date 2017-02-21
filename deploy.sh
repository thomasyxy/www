export PATH=$PATH:/usr/local/node-v6.9.5-linux-x64/bin
cnpm install
pm2 startOrRestart ecosystem.json --env production
