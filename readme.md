This template is used to serve protected files. For instance, you may have a studio contest where you want to show the final result to the customer and make the site password protected.

First, make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed. This will install git locally and allow you to push files to Heorku.

To get started perform follow these steps:

### Clone the template app locally

To host your static files on Heroku we are going to use a small web server. Open terminal and enter the following:

```bash
# clone this template app with a specific name (e.g., new-site-name)
git clone git@github.com:topcoderinc/studio-static-template.git new-site-name
cd new-site-name
```

### Add your static files to server

Now copy all of the HTML, images, css, js, etc. into the /files directory.

### Setup the site on Heroku

Now we need to create the app on Heroku and push your files to the server:

```
# setup the new git repo and add your files
rm -rf .git
git init
git add .
git commit -am 'initial commit'

#create the site on heroku
heroku create new-site-name

# push your files to heroku
git push heroku master
```

### Add security

To restrict access to the site, we need to provision the wwwhisper addon and configure it.

```
heroku addons:add wwwhisper:starter --admin=your_email
# open the website in the browser -- should be restricted now!!
heroku open
```

Now go to http://[your-new-url]/wwwhisper/admin, enter the email you used to provision the addon above. Now add the email address(es) of the people that should have access to the `/` directory (i.e., the customers).

### Copilots and Heroku

There is no reason that co-pilots could not perform these steps. Here's how it would work in that scenario. You would simply create the new site:

```
#create the site on heroku
heroku create new-site-name
```

Then log into Heroku, and click the `Access` tab for the new application. Enter the co-pilot's Heroku email address and they will receive an invitation view email to contribute. The co-pilot would then do all of the normal steps above, with the exception of `heroku create new-site-name` (since the site has already been created). Instead they would go to the `Settings` tab for the application in Heroku and copy the `Git URL`. Then they would type `git remote add heroku [the-Git-URL]` to connect their local repo to heroku. 

### Costs

Heroku has a free tier and most of these sites could run for free. The way Heroku works, if the site hasn't been accessed within an hour, Heroku will spin down the dyno. Once someone hits the URL, Heroku will spin the dyno up quickly (1-3 seconds) and start server files. 