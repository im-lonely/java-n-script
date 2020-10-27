git add .

git commit -m "Updated by script"

git push

echo "Publish? [y/n]"

read publish

if [ $publish == "y" ] 
then

    # npm version patch

    # npm publish
    
    echo "Published"

fi