# make branch
```bash
git checkout -B feature/lesson
# check which branch we are on
git branch   
# this will push changes to main branch
# and make feature/lesson as main because of -u
git push -u origin feature/lesson
# go to specific branch
git checkout main
# then you do a pull
git pull
# what branch is causing the merge issue
git log --merge
```
# git head
```bash
# it existis in .git folder you can look into it by
cat head
```

# git diff
it is used to look at changes and compare them
```bash
git diff HEAD README.md
# to display logs better and in one line
git log --pretty=oneline
# see changes between branches 
git diff main feature/lesson
```
# git blame
```bash
# to see all change in the file
git blame filename
# to see specific lines (line 5 to 15)
git blame -L 5,15 filename
```

Step 1: Clone the repository.

Step 2: Create a new branch.

git checkout -b test/forking-example 

Step 4: Create a new file and commit it to the repository.

touch text.txt
git add . 
git commit -m 'chore: testing' 

Step 5 Push the branch to your remote repository.

git push -u origin test/forking-example 

# resources 

Git Cheatsheet

https://education.github.com/git-cheat-sheet-education.pdf

Git patterns and anti-patterns for successful developers  

https://youtu.be/t_4lLR6F_yk


Vim Cheatsheet

https://devhints.io/vim