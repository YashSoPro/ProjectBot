import discord
from discord.ext import commands

class RemoveWatchlist(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.watchlist = []

    @commands.command(name='deletemovie')
    async def delete_movie(self, ctx, *, movie_name):
        if movie_name in self.watchlist:
            self.watchlist.remove(movie_name)
            await ctx.send(f"'{movie_name}' removed from the watchlist!")
        else:
            await ctx.send(f"'{movie_name}' is not in the watchlist!")

def setup(bot):
    bot.add_cog(RemoveWatchlist(bot))
  
