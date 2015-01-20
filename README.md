#HyreNow

###Installing Dependencies
1. Bower: `bower install`
2. Node Modules: `sudo npm install`

###Compiling
1. `grunt build`

###Installing Backend (steps to be followed in order):
1. Mysql Server and client (Ubuntu): `sudo apt-get install mysql-server; apt-get install mysql-client`
2. Installing Virtualenv for python (Ubuntu): `sudo apt-get install python-virtualenv`
3. Creating Virtualenv : `virtualenv env_1`
4. Activating virtualenv : `source bin/env_1/activate`
5. Installing python packages via pip (from requirements.txt file) : `pip install -r requirements.txt` 
6. Installing gunicorn via apt-get (ubuntu) : `sudo apt-get install gunicorn`
7. Installing Supervisor via apt-get (ubuntu) : `sudo apt-get install -y supervisor`  (links: http://goo.gl/wbYcYq, http://goo.gl/Z8tlVO)
  1. Make a new supervisor conf - /etc/supervisor/conf.d/hyrenow.conf with following content : 
    ```[program:hyrenow]
       command = /home/hyrenow/env_1/bin/gunicorn run:app
       directory = /home/hyrenow```
  2. Use following commands to manage supervisor :
    ```sudo supervisorctl reread
      sudo supervisorctl update
      sudo supervisorctl start hyrenow```
