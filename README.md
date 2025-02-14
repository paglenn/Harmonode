




<div style="display: flex; align-items: center; justify-content: center; flex-direction:row">

  <img src="https://github.com/oslabs-beta/Harmonode/assets/68034977/1f5dcb40-99e4-4295-b758-ddf0e0572055" alt="Logo" width="600">
  <div style="margin-left: 20px;">As modern web applications continue to evolve, so does the complexity of managing and visualizing endpoints, fetch requests, and data flow between the client-side, routes, and backend components. As your application scales, keeping track of these connections can quickly turn into a nightmare.
Enter Harmonode — an Electron-powered development tool that lightens the challenges of endpoint management and visualization. By harnessing the power of ReactFlow, Harmonode empowers users to seamlessly navigate through the web of connections, offering a clear and concise visualization of the trail each route follows through the component tree of an app, from it's initial request(s) in any frontend components, through the server, any middleware, and back again.
</div>
</div>




---

## Contents

- [Usage](#usage)
- [Getting started](#gettingstarted)
- [Contributors](#contributors)


<a name="usage"></a>
## Usage
<div style="margin-left: 20px;">
From the home screen, navigate to "Projects", and click "Add New Project". Follow the prompts to load your project code base, and be sure to designate the name of your backend server file. Fetch requests that are made directly within React components will be readable by Harmonode, which will then render a visual using React Flow of the paths of these requests through the file structure. 
</div>


---


![homePageScreenShot](https://github.com/oslabs-beta/Harmonode/assets/68034977/3087b770-6a33-4c80-b60a-c274ef4235f2)



---


![output1](https://github.com/oslabs-beta/Harmonode/assets/68034977/8a070763-f7b4-475f-908e-999afe2b2361)

---

<a name="gettingstarted"></a>

## Getting Started

Either clone straight from this repo, or download the app directly from [harmonode.com](https://harmonode.com/) and follow the installation directions.

If cloning from here, run ```npm install```, and make sure that typescript is installed globally. ```npm run dev``` will start the electron app on your local system. Click on "Projects" in the sidebar, then "Add New Project", and load any standard project built with a React frontend and a Node.js backend, preferably with Express. Click on Diagram to view a React Flow visual of fetch paths, or List to view a more detailed view. Various viewing options are available in Settings.

Currently, simple fetch requests which are passed either strings or complete variables as the url, e.g...<br>
<br>
fetch(someUrl, {method: 'POST', etc...}), or <br>
fetch('localserver://users') 

...will suffice, although we are building additional functionality for more real-world usability. So, in the future, requests which are being passed concatenated variables will work, as will requests made from util methods being called in frontend components.  

<a name="contributors"></a>

## Contributors

The founding fathers of Harmonode:

- Hamza Chaudhry | [@hmz44](https://github.com/hmz44)
- Eric Dalio | [@EricDalio](https://github.com/EricDalio)
- Ken Johnston | [@kfiddle](https://github.com/kfiddle) 
- Sebastian Sarmiento | [@sebastiansarm](https://github.com/sebastiansarm/)
- Tim Weidinger | [@timweidinger](https://github.com/timweidinger) 



<!-- Rest of the content -->
