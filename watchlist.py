import discord
from discord.ext import commands

class Watchlist(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.watchlist = []

    @commands.command(name='addmovie')
    async def add_movie(self, ctx, *, movie_name):
        self.watchlist.append(movie_name)
        await ctx.send(f"'{movie_name}' added to the watchlist!")

def setup(bot):
    bot.add_cog(Watchlist(bot))
  
