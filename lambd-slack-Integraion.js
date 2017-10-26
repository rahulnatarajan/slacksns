console.log('Loading function');

const https = require('https');
const url = require('url');
const slack_url = 'https://hooks.slack.com/services/...';
const slack_req_opts = url.parse(slack_url);
slack_req_opts.method = 'POST';
slack_req_opts.headers = {
    'Content-Type': 'application/json'
};

exports.handler = function(event, context) {
    (event.Records || []).forEach(function(rec) {
        if (rec.Sns) {
            var req = https.request(slack_req_opts, function(res) {
                if (res.statusCode === 200) {
                    context.succeed('posted to slack');
                } else {
                    context.fail('status code: ' + res.statusCode);
                }
            });

            req.on('error', function(e) {
                console.log('problem with request: ' + e.message);
                context.fail(e.message);
            });

            var text_msg = JSON.stringify(rec.Sns.Message, null, '  ');
            try {
                var msg_data = [];
                var parsed = JSON.parse(rec.Sns.Message);
                for (var key in parsed) {
                    msg_data.push(key + ': ' + parsed[key]);
                }
                text_msg = msg_data.join("\n");
            } catch (e) {
                console.log(e);
            }

            var params = {
                attachments: [{
                    fallback: text_msg,
                    pretext: rec.Sns.Subject,
                    color: "#D00000",
                    fields: [{
                        "value": text_msg,
                        "short": false
                    }]
                }]
            };
            req.write(JSON.stringify(params));

            req.end();
        }
    });
};