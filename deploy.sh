BRANCH=$1

if [ "$BRANCH" == "main" ]; then
    DEPLOY_PATH="/home/azureuser/practicas-ga"
else
    DEPLOY_PATH="/home/azureuser/stage"
fi

ssh -o StrictHostKeyChecking=no azureuser@4.227.181.213 << EOF

    cd $DEPLOY_PATH

    git pull origin $BRANCH

EOF