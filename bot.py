import discord
from discord.ext import commands
import os

from keep_alive import keep_alive

intents = discord.Intents.default()
intents.members = True
client = commands.Bot(command_prefix="!", intents=intents)

# Load extensions (cogs)
client.load_extension('autotranslate')
client.load_extension('welcome')
client.load_extension('watchlist')
client.load_extension('removewatchlist')

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

keep_alive()
client.run(os.getenv('TOKEN'))
