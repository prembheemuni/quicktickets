set -e 

echo "Creating Databses"

psql -U postgres -c "CREATE DATABASE bookingdb;"

psql -U postgres -c "CREATE DATABASE notificationdb;"

psql -U postgres -c "CREATE DATABASE paymentdb;"

psql -U postgres -c "CREATE DATABASE usersdb;"

echo "Databases created successfully!"


