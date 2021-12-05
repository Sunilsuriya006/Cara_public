import MessageHandler from '../Handlers/MessageHandler'

import {MessageType} from '@adiwajshing/baileys';

import BaseCommand from '../lib/BaseCommand'

import WAClient from '../lib/WAClient'

import { IParsedArgs, ISimplifiedMessage } from '../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'support',

            description: 'send you a Support link',

            category: 'general',

            usage: `${client.config.prefix}support`

        })

    }

    

    run = async (M: ISimplifiedMessage, args: IParsedArgs): Promise<void> => {

const text = your link goes here

M.reply('send you link regarding this);

this.client.sendMessage(M.sender.jid,text,MessageType.text);

}

}
