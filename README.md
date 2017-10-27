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


## Create a Slack token

You can obtain a Slack API token by creating a bot user (or you can use the token from an existing bot user if you have one) – [this direct link](https://slack.com/apps/new/A0F7YS25R-bots) should take you there, but you can navigate from the [App Directory](https://slack.com/apps) via `Browse Apps > Custom Integrations > Bots`.

Pick any name, and when you click "Add integration" Slack will generate an API token that looks something like `xoxb-<numbers>-<letters>`

![Add Slack bot](https://lambci.s3.amazonaws.com/assets/slack_bot.png)


## License

MIT



---
