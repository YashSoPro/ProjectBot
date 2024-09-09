import discord
from discord.ext import commands
from discord.ui import Button, View

class Welcome(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.join_messages = [
            "{} appeared with pizza!",
            "{} just landed!",
            "{} just woke up!",
            "{} has joined the crew!",
            "{} is now part of the gang!",
            "{} has entered the building!",
            "{} has made an entrance!",
        ]
        self.greeting_responses = [
            "{} greeted everyone with a juice!",
            "{} waved hand to {}!",
            "{} gave everyone a high five!",
            "{} sent out virtual hugs!",
            "{} shared a smile with {}!",
            "{} dropped a welcome gift for {}!",
            "{} offered everyone a warm welcome!",
        ]

    @commands.Cog.listener()
    async def on_member_join(self, member):
        channel = discord.utils.get(member.guild.text_channels, name='general')
        if channel:
            message = self.join_messages[member.id % len(self.join_messages)].format(member.name)
            await channel.send(message)
            
            button = Button(label="Welcome", style=discord.ButtonStyle.green)

            async def button_callback(interaction):
                greeting = self.greeting_responses[interaction.user.id % len(self.greeting_responses)].format(interaction.user.name, member.name)
                await interaction.response.send_message(greeting)

            button.callback = button_callback
            view = View()
            view.add_item(button)

            await channel.send(f"Welcome {member.name}!", view=view)

def setup(bot):
    bot.add_cog(Welcome(bot))
  
