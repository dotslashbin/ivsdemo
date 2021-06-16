ivsdemo
# IVS Demo


## Intro
This is a sample implementation that was requested from me. It basically takes in email and name as inputs to register as a member, and listing of results. This is only meant to be used as reference. 

Please feel free to commment, I appreciate constructive criticisms. 

***Developer Notes***
I hesitated on implementing a few features that were not in the specifications, as I did not want to overthink the entire thing. I followed the instructions accurately, and here are the factors:

-   "List of names for all sign-ups" - I decided to return all but have placeholders for possible pagination in the future. I assure you that it will not be a major refactor to enable it.
-   Authentication - I did not implement expiry for the JWT, but placeholders are ready for it. Refactoring to implement that will be pretty straightforward.
-   Deployed environments - I created free tier instances on EC2, one for the API and the other for the web app. I would have gone for containerized applications on ECS, but they were not free.

## Project Details
### Running the application

*Requirements*
Please ensure that you have these installed in your system before starting. 
1.  docker
2.  docker-compose
3.  Shell
4.  Browser
5.  API testing tool ( ex. postman )
6. git client
7. nodejs
8. yarn
9. Please ensure is nothing is using the ports **3000**, **27017**, and **9080**. 

*Setting up your environment for the project*

1.  Go to your terminal emulator or Shell terminal
2.  Install **NodeJS** into your system. (here's a guide [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/) ). Please check if you have successfully installed Nodejs 14.x by doing the command **_node -v._** If you can see the version without any errors, then you have done it right.
3.  Install **yarn** by running the command **_npm install -g yarn_** _in your shell terminal._ Check by running **_yarn -v_** command, and see if you can view the version without any problems.
4.  Ensure that you have docker and docker-compose running in your system. Since systems will vary, here are the guides to refer to
- docker: [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)
	- docker-compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
5.  Test your installation with **_docker -v_** and **_docker-compose -v_**
6.  Install git, and check with **_git --version_**

*Setting up the project* 
7.  Open your shell terminal **_if_** you are not already in it.
8.  Clone the repository ([https://github.com/dotslashbin/ivsdemo](https://github.com/dotslashbin/ivsdemo))
9.  Go to the project directory. You will notice that there are subfolders here that contain the files for each component of the project. _For this exercise, I have excluded the container for development to simplify things. Having said that, we will need to transpile the typescript before building the container itself._
10.  Got into the **_api_** folder
11.  Install the packages by running **_yarn_.**
12.  To build the project, run **_yarn build_**. You should see the typescript being compiled into a folder called **_dist_**.
13.  Go back up to the parent directory. You should see a **_docker-compose.yaml_** file in here.
14.  Build the environment by running **_docker-compose up -d --build_**.
15.  Wait till all finishes, then check if the containers are running with **_docker ps_** command.
16.  Once these are all done, you are ready to test.

*Testing with API tool*
1.  Open your API testing tool.
2.  First, let's create a few members. Create a POST request to **_localhost/Sign-up/_,** and supply the JSON input as a body. The format for the input is 

> { "name": "enter a name" , "email": "enter an email" }

3.  You should see a return with a token, if successful. Failing validation should result in validation error messages with status 422.
4.  Copy the token
5.  Now, lets test fetching all records. Create a GET request to **_localhost/members_**_, AND_ with this, create an Authorization header with the value of 'Bearer ' + < the token> . Note that there is a space between bearer and the token.
6.  Run it and you should see the results with your newly created/signed member.
7.  Copy one of the ID's from the members
8.  Finally, let's test fetching one record. Create a GET request to localhost/members/<_insert id here_>. This will test fetching one record based on ID.

*Testing with the web app*
  

1.  Open a web browser
2.  go to **_http://localhost:9080_**
3.  Let's create a member. Enter an email address and name and then click **Register**. Do for a couple of times to generate more records.
4.  Click on **Show all** to display a list.
5.  Click on a listen item to display the details of that member
