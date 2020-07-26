import axios from 'axios'
import resolverHelper from '../../helpers/tier2/resolver';
import { Post } from '../services'

export class Slack {
  static async importMessages(req, res) {
    const channels = [
      { id: "CPSSA69GF", name: "full-stack-software-development" },
      { id: "C015BA63N4W", name: "internship-opportunities" },
      { id: "C015X8R6Y8H", name: "research-or-underegrduate-experiences-internships      " },
      { id: "C015MBLF11D", name: "jobs" },
    ];

    for(const channel of channels) {
      const results = await axios.get('https://slack.com/api/conversations.history?token=xoxp-808894202919-1268881153540-1261730836469-407863029e2f44cc844056bfff128572&channel=' + channel.id);

      //add the channel
      const addChannelResults = await resolverHelper.addTableRow('channel', {
        name: channel.name,
        created_by: req.user.id
      });

      for(const message of results.data.messages) {
        if(!message.subtype) {
          //add the posts
          await resolverHelper.addTableRow('post', {
            author: message.user,
            message: message.text,
            channel: addChannelResults.id,
            created_by: req.user.id
          });
        }
      }
    }

    res.send({});
  }

  static async handleWebhook(req, res) {
    const message = req.body;
    if(!message.subtype && message.channel) {
      //add the posts
      await Post.addRecord(req, {
        author: message.user,
        message: message.text,
        channel_name: message.channel,
        created_by: req.user.id
      });
    }

    res.send(req.body.challenge);
  }
}