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