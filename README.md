# nginx-101
Practical training for basic nginx features

## Architecture

Usage of Nginx as reserve proxy.

![Usage of Nginx](https://camo.githubusercontent.com/a1d60c4ade45cd794b70b685b8973369593f4b94/68747470733a2f2f696d6775722e636f6d2f65397a777930552e706e67)

## HTTP Load Balancing

The weight parameter instructs NGINX to pass **twice** as many connections to the **second server**. 
The weight parameter defaults to 1.

```
upstream backend {
  server 10.10.12.45:80 weight=1; 
  server app.example.com:80 weight=2;
} 

server {
  location / {
    proxy_pass http://backend;
  }
}
```

## HTTP Basic Auth

```
location / {
  auth_basic "Private site"; 
  auth_basic_user_file conf.d/passwd;
}
```

File passwd
```
# comment
name1:password1
name2:password2:comment
name3:password3
```

To generate an encrypted password `openssl passwd MyPassword1234`.

Both the `openssl` and `htpasswd` commands can generate passwords with the apr1 algorithm, which NGINX can also understand.

## Cache

## Using Includes for Clean Configs
