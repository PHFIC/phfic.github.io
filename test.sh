#!/bin/bash

trap "kill 0" SIGINT;

echo "=========== building code ==========="
npx next build
npx next export

echo "========== forking server ==========="
(npx next start > ./tmp/test_server_out.txt)&
server_pid=$!

echo "======= running cypress tests ======="
npx cypress run

echo "=============== done ================"
kill -2 $server_pid
