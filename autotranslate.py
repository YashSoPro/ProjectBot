import discord
from discord.ext import commands
from googletrans import Translator

class AutoTranslate(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.translator = Translator()

    @commands.Cog.listener()
    async def on_message(self, message):
        if message.author == self.bot.user:
            return

        if message.channel.name == 'global-chat':
            detected_lang = self.translator.detect(message.content).lang
            if detected_lang != 'en':
                translation = self.translator.translate(message.content, dest='en').text
                translated_channel = discord.utils.get(message.guild.text_channels, name='translated-message')
                if translated_channel:
                    await translated_channel.send(f"**{message.author.name}**: {translation}")

def setup(bot):
    bot.add_cog(AutoTranslate(bot))
