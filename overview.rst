All notes from the first time:

TERMINAL


* ``pwd``
* ``ls / ls -A``
* ``cd [dir]   # .. means ups``
* ``mv file1 file2``
* ``rm -r [dir]  # careful!``
* ``man [command]  # q to stop``

GIT


git stores 'chapters' of changes (add, delete, change); two advantages:

- you can go back if you break something
- you can easily collaborate with others

3 ways: RubyMine, Git Desktop, terminal typing

HEAD
git init     # make directory into git project, makes .git directory
git status   # show the current files (use .gitignore to skip some)
git add :/ --all  # adds the current version of all the files
git commit -m "description"  # stores a "chapter" with the added changes
git log       # show all chapters
git checkout   # a bit complicated, but can go back in history
git clone      # make a local copy of remote one

* ``git init     # make directory into git project, makes .git directory``
* ``git status   # show the current files (use .gitignore to skip some)``
* ``git add :/ --all  # adds the current version of all the files``
* ``git commit -m "description"  # stores a "chapter" with the added changes``
* ``git log       # show all chapters``
* ``git checkout   # a bit complicated, but can go back in history``
* ``git clone      # make a local copy of remote one``
