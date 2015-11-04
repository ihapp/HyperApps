# Internet Hyper Application Introduction

## What is HyperApp?

A HyperApp is a Web application bundle that contains everything it needs to run locally inside a virtual machine instead of on a remote server:

![](http://www.tentity.com/BaseArch.png)

HyperApps are built as regular Web applications with Node.js, AJAX, PHP, ASP.NET, or servlets, etc.

## Why HyperApps?

A HyperApp can serve static and dynamic content locally while communicating with a remote web server if needed. Thus, HyperApps can dramatically improve performance and the user experience while leveraging underlying hardware capabilities without compromising security in comparison with desktop/native applications. Note, HyperApps preserve the same-origin policy and can only connect to their origin web servers. 

In essence, HyperApps are lightweight client-side proxy web servers that unify desktop/native and web applications. They are built on top of virtualization, thus isolated from each other and the host, and provide more security to end users and businesses.

Since HyperApps work locally, they can be viewed as MVC applications which allow leveraging the declarative nature of HTML to build View and delegating Model and Controller to the local virtual machine instead of pushing a large amount of JavaScript into a browser.

HyperApp states can be easily backed up to a cloud allowing HyperApps sharing between computers: office, home, laptop, tablet, etc. as well as restoring them in case of a hardware failure.

HyperApps are easy to clone, deploy, and test, thus they enhance application development.

## How it works?

![](http://www.tentity.com/BaseFlow.png)

1. A user enters a URL in a browser, example: `https://someserver/someapp.html`
1. The browser loads the page and its script checks if its HyperApp exists on user’s machine
  * If so, it redirects to `happ://someserver/someapp.html`
  * Otherwise it checks if the HyperApp plugin is installed
    * If so, it redirects to `happ://someserver/someap.html`
    * Otherwise it asks the user to install the plugin
1. The browser passes URLs with `happ` scheme/protocol to the plugin
2. The plugin checks if a corresponding HyperApp is running
  1. If not, it checks if a corresponding HyperApp image exists
    1. If not, it downloads the bundle from a corresponding remote web server
    2. The plugin creates the HyperApp image and a virtual machine
  2. The plugin starts a virtual machine with the HyperApp image
1. The plugin channels HTTP requests to a corresponding HyperApp.

Offline mode:

1. A user enters `happ://someserver/someapp.html` in a browser
2. The browser passes URLs with `happ` scheme/protocol to the plugin
3. The plugin checks if a corresponding HyperApp is running
  * If not, it starts a corresponding HyperApp
1. The plugin channels HTTP requests to a corresponding HyperApp.

## Get Started on Mac

The current implementation depends on Docker Machine, VirtualBox, and Firefox. In this demo, our web app is the popular 2048 game on Docker Hub https://hub.docker.com/r/ihapp/demo2048/.

> Prerequisites: Firefox browser

1. If you have [Kitematic](http://docs.docker.com/kitematic/) installed, skip this step. Otherwise, download and install the **HyperApp-0.1.0-Mac-beta.pkg** (from releases). It installs `VirtualBox` and `Docker Machine`. Or, if you are a developer and plan to work with docker containers, you can install `Kitematic` instead. 
2. Download and install the **HyperApp-0.2.0-Firefox.xpi** Firefox addon (from releases)

 > Select the "Open" item from Firefox's "File" menu, it will bring up a file selection dialog. Navigate to the "HyperApp-0.2.0-Firefox.xpi" file, open it and follow the prompts to install the add-on. 

3. Try the following in Firefox

 ```
 happ://ihapp.demo2048/
 ```

 > The result is the popular 2048 game as seen at http://docs.docker.com/kitematic/nginx-web-server/. Behind the scene, Firefox passes the `happ` scheme to the addon. The addon created a VM **ihapp.demo2048**, started a container for **ihapp/demo2048**, and channeled **happ://ihapp.demo2048/** trafic to the container. 

**Note:** Docker Machine starts slow, but it can be fixed in the future.  

## Get Started on Linux

The current implementation depends on Docker and Firefox. In this demo, our web app is the popular 2048 game on Docker Hub https://hub.docker.com/r/ihapp/demo2048/.

> Prerequisites: Firefox browser

1. [Install Docker](http://docs.docker.com/linux/step_one/)
2. Add yourself to the Docker group

 ```
 $ sudo usermod -aG docker <YourLoginName>
 ```

3. Download and install the **HyperApp-0.2.0-Firefox.xpi** Firefox addon (from releases)

 > Select the "Open" item from Firefox's "File" menu, it will bring up a file selection dialog. Navigate to the "HyperApp-0.2.0-Firefox.xpi" file, open it and follow the prompts to install the add-on. 

4. Try the following in Firefox

 ```
 happ://ihapp.demo2048/
 ```
 
 > The result is the popular 2048 game as seen at http://docs.docker.com/kitematic/nginx-web-server/. Behind the scene, Firefox passes the `happ` scheme to the addon. The addon started a container for **ihapp/demo2048**, and channeled **happ://ihapp.demo2048/** trafic to the container. 

