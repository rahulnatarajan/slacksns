<img align="left" src="https://s3.amazonaws.com/rahultest01/slack1.png" width="180px" height="180px">

# CloudWatch Slack Integration using Lambda - CF

Clicking on the Launch Stack button will launch the Cloudformation template in your AWS account in the North Virginia region. 

[![Launch CloudFormation Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=lambci&templateURL=https://s3.amazonaws.com/rahultest01/Slack_SNS_Notification.yaml)


## Resources Created as part of this template

* Lambda execution role with necessary permissions
* Lambda function - Nodejs 4.3
* SNS topic
* SNS subscription for Lambda function
* SNS permission to trigger the lammbda function

## Prerequisites

* An [Amazon AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)
* A Slack API token


## Create a Slack Incoming Webhook URL

  Step 1: Go to your slack channel
  Step 2: Click on your team name
  Step 3: You will find a popup Menu, click on App and Custom Integration
  Step 4: You will find the application site of Slack. Type “incoming” in the search box and select the Incoming Webhooks
  Step 5: Install the app in your respective Team
  Step 6: Select the channel and click on Add Incoming Webhook

## What does the Lambda function do?

  1. Receives notification from CloudWatch (via SNS)
  2. Formats the incoming JSON message from CloudWatch
  3. Puts the message in the Slack channel using the webhook


## License

MIT



---
