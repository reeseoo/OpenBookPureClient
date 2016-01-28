FROM    ubuntu:14.04

RUN     apt-get update
RUN     apt-get install -y nodejs npm git git-core
RUN     ln -s /usr/bin/nodejs /usr/bin/node
COPY    . /app

WORKDIR /app

RUN     npm install -g bower 
RUN     npm install -g grunt-cli
RUN     npm install 
RUN     bower install --allow-root
EXPOSE  9000
ENTRYPOINT ["grunt","serve"]