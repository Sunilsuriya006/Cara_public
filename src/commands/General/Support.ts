import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            description: 'link you to support menu',
            category: 'general',
            usage: `${client.config.prefix}support`,
            aliases: ['support'],
            baseXp: 20
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await this.client.sendMessage(
            M.sender.jid,
            `*🎗️ 🅂🅄🄽🄸🄻-🄱🄾🅃🅃🄾*\n\n *📮【About】:* *Fun Bot*\n\n*🛸【Group】:* https://chat.whatsapp.com/C8omneFl0I3Ha7PJRl9aDq \n`,
            MessageType.text
        )
        return void M.reply('Sent you the support link in personal message'); //.catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}


