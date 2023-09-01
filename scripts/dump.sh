docker exec -e PGPASSWORD="postDb" -it postDb pg_dump --no-owner \
    -U postgres \
    -d postDb \
    -s \
    -f /backup/postDb.sql