git add .

git commit -m "Updated by script"

git push

$publish = read "Publish? [y/n]"

if [ $publish == "y" ] then

    # npm version patch

    # npm publish
    
    echo "Published"

fi