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

1. A user enters a URL in a browser, example: https://someserver/someapp.html
1. The browser loads the page and its script checks if its HyperApp exists on user’s machine
  * If so, it redirects to happ://someserver/someapp.html
  * Otherwise it checks if the HyperApp plugin is installed
    * If so, it redirects to happ://someserver/someap.html
    * Otherwise it asks the user to install the plugin
1. The browser passes URLs with ‘happ’ scheme/protocol to the plugin
2. The plugin checks if a corresponding HyperApp is running
  1. If not, it checks if a corresponding HyperApp image exists
If not, it downloads the bundle from a corresponding remote web server.
The plugin creates the HyperApp image and a virtual machine.
The plugin starts a virtual machine with the HyperApp image.
The plugin channels HTTP requests to the HyperApp.

Offline mode:

A user enters happ://someserver/someapp.html in a browser.
The browser passes URLs with ‘happ’ scheme/protocol to the plugin.
The plugin checks if a corresponding HyperApp is running
If not, it starts the HyperApp.
The plugin channels HTTP requests to the HyperApp.
