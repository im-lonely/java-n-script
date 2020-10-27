git add .

git commit -m "Updated by script"

git push

if [ read "Publish? [y/n]" == "y" ]

    # npm version patch

    # npm publish
    
    echo "Published"

fi