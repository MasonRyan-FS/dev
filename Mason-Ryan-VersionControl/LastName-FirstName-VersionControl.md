# Instructions 
Update this document where indicated (brackets). Replace text inside the brackets with your own information. For example: Course Name should be the name of this course, and not the generic words "Course Name".

**Note:** As you complete each item, also update reference links where indicated below. 

<br>

## [ WDV119 ] 

* **[ 1.7 Version Control & Workflow ]**
* **[ Ryan Mason ]**
* **[ 3/7/2022 ]**

This paper addresses some of the topic matter covered in research and activity this week. Be sure to include reference links below to the research and information you used to complete this assignment.

## Topic: Terminal
Professional developers use Terminal daily. It's essential to understand some fundamental commands to use the application. 

Update the information below to demonstrate your knowledge on this topic.   

**1. Using Terminal, there are essential commands to know.**

List the correct Terminal commands to do the actions listed below. Replace **CMD** with the correct command sequence. You can keep or enhance the brief description. 

**The last bullet provides an example**.

* [ clear ]: Clear the Screen 
* [ pwd ]: Print the "Working Directory"
* [ ls ]: List files and folders
* [ ls -a ]: List files and folders, including invisible files
* [ ls -h ]: List all files and folders, in human readable form
* [ cd ]: Change directory
* [ cd / ]: Change directory, go to root directory
* [ cd ~ ]: Change directory and go to user home directory
* [ cd .. ]: Change directory, go up one folder level
* [ cd ... ]: Change directory, go up two folder levels
* **cd ~/Desktop/**: Change directory to my desktop! 


**2. Using Terminal...**

**Folder Drop:** Try typing "cd" followed by a space, and then drag a folder into terminal and press return. Test this out and describe your results below.  

[ Describe Results Here ]


## Topic: Version Control & Git
Version control, also known as revision control, records changes to a file or set of files over time so that you can recall specific versions later. In this class, we are learning Git. Update the information below where indicated.  

**1. There are three types of version control.**

[ Local Version Control: Maintains track of files within that same local system
  Centralized Version Control: Any changes in files are maintained under the main centralized server. This server includes all versioned files
  Distributed Version Control: Every client clones the entire repository on each of their devices, so that if any server dies, any of the client repositories can be copied on to the server to help restore it.]



**2. Using Terminal, there are also essential Git commands to know.**

List the correct Git commands to do the actions listed below in Terminal. Replace CMD with the correct command and keep or enhance the brief description. **The last bullet provides an example**. 

* [ git clone ]: Clone a repository
* [ git config --global user.name ]: Set-up a global user name
* [ git config --global user.email ]: Set-up a global email address (to match my GitHub account eMail)
* git status : [ lets you see which files aren't being tracked by git ]
* [ git add ]: Add modified files to the next commit
* [ git commit -m ]: Make a commit with a new message
* [ git log ]: Show my commit history
* **git help**: This command will bring up Git's help screen in Terminal!
    



**3. Connecting to GitHub using Terminal.**
HTTPS is the the correct way to connect to GitHub in this course. Describe how you connect to GitHub from Terminal using this protocol. What steps do you take? 

[ First step is to go to your repository and get the clone https link. After that, go into a new folder and right click and open git bash and type in the command "git clone (copied url) ]



**4. Using .gitignore and Why it's Important**  
Most repositories contain a .gitignore file. 

* What is the purpose of this file?  
* What is the "**.DS_Store**" file and why would you want to ignore it?
* What other file or folder would you want to add to a .gitignore file and why? 


[ .gitignore tells git which files to ignore when committing your project to the github repository. The .DS_store file holds the user's folder view precerences. It is hidden on mac but visible on other operating systems. 
This happens when a file from a mac is copied over to a windows machine. Some files you want to add to your gitignore are operating system files, language and framework, credentials.]



<br>

# Reference Links
Replace the example references below with your own links and recommended resources. It is acceptable to provide multiple links for a single topic and to use material provided to you in this class. You are encouraged to link to your own independent research as well. 

[ Research Summary: What resource(s) did you find most helpful this past week and why? ]

**Terminal Commands**  
[Dev Community](https://dev.to/kymiddleton/reference-guide-common-commands-for-terminal-6no)  

**Three Types of Version Control**  
[Serengeti Software Tech](https://serengetitech.com/tech/introduction-to-git-and-types-of-version-control-systems/)

**Git Commands**  
[Git scm website](https://git-scm.com/docs)

**Connecting to GitHub using Terminal**  
[GitHub Docs](https://docs.github.com/en/get-started/quickstart/set-up-git)

**Using .gitignore and Why it's Important**  
[Pluralsight](https://www.pluralsight.com/guides/how-to-use-gitignore-file)




