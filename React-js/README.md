#  Day 02 — Git & GitHub Basics

 **YouTube Lesson**: [Watch the video](https://youtu.be/t5nZUCOZYhA)

This lesson covers how to fetch data and push your code to GitHub using Git.

---

##  Initial Setup

1. Install [Git](https://git-scm.com/downloads) on your PC.
2. Set up your SSH key:
   - Run `ssh-keygen` and copy the SSH key from `~/.ssh/id_rsa.pub`
   - Add it to your GitHub account under **Settings > SSH and GPG keys**

---

##  Basic Git Workflow

###  Initialize and Connect to GitHub

```bash
# Step 1: Initialize git in your project
git init

# Step 2: Add your GitHub repository as the remote origin
git remote add origin git@github.com:Zoku808/react-js-course1.git

# Step 3: Set main as the default branch
git branch -M main

# Step 4: Check the current status
git status

# Step 5: Stage all files for commit
git add .

# Step 6: Commit your changes
git commit -m "Initial commit"

# Step 7: Confirm your working tree is clean
git status
# Output should be: On branch main | nothing to commit, working tree clean

# Step 8: Push for the first time
git push --set-upstream origin main

# OR (same as above)
git push -u origin main

---

### Sync GitHub with Local Repository (After Changes)

# Stage all changed files
git add .

# Commit with a message
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull in case there are updates on GitHub
git pull
