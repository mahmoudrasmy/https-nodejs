# Steps to create a nodejs script to implement https 

## Pre-requistes
- Install nodejs
 -$sudo apt-get update
 -$sudo apt-get install nodejs
 -$sudo apt-get install npm
	
- Download and install OpenSSL https://www.openssl.org/source/
- Generate the certificate and the key using the below commands
>$\OpenSSL_Dir\openssl genrsa -out localhost.key 2048<br>
>$\OpenSSL_Dir\openssl req -new -x509 -key localhost.key -out localhost.cert -days 3650 -subj /CN=localhost -config "Open_SSL_Dir\openssl-0.9.8h-1-bin\share\openssl.cnf"
	
## Steps

- $npm install
- $node app.js
	

## Refrences
- https://www.npmjs.com/package/node-openssl-p12
- https://stackoverflow.com/questions/9497719/extract-public-private-key-from-pkcs12-file-for-later-use-in-ssh-pk-authenticati
- http://nodejs.cn/doc/node/tls.html#tls_tls_createserver_options_secureconnectionlistener
- https://stackoverflow.com/questions/24392571/node-js-crypto-js-pfx-header-too-long
