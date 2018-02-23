# Steps to create a nodejs script to implement https 

## Pre-requistes

	1-Install nodejs
	2-Download and install OpenSSL https://www.openssl.org/source/
	3-Generate the certificate and the key using the below commands
		-$\OpenSSL_Dir\openssl genrsa -out localhost.key 2048
		-$\OpenSSL_Dir\openssl req -new -x509 -key localhost.key -out localhost.cert -days 3650 -subj /CN=localhost -config "Open_SSL_Dir\openssl-0.9.8h-1-bin\share\openssl.cnf"
	
## Steps

	1-$npm install
	2-$node app.js
	
