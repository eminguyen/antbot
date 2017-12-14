package antbot;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.entities.*;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import net.dv8tion.jda.core.exceptions.*;
import net.dv8tion.jda.core.hooks.*;

public class Listener extends ListenerAdapter {
    public static void main(String[] args)
        throws LoginException, RateLimitedException, InterruptedException
    {
    	try
    	{
            JDA jda = new JDABuilder(AccountType.BOT)
                .setToken("MzkwNzE0OTI2Mjc0MTgzMTc4.DROPcQ.fVZWPvOI-jk89-GHQHviHNBhb3A")
                .buildBlocking();
            jda.addEventListener(new Listener());
    	}
    	catch(LoginException e)
    	{
    		e.printStackTrace();
    	}
    	catch(InterruptedException e)
    	{
    		e.printStackTrace();
    	}
    	catch(RateLimitedException e)
    	{
    		e.printStackTrace();
    	}
    }

    @Override
    public void onMessageReceived(MessageReceivedEvent event)
    {
    	String content = null;
	    if(event.isFromType(ChannelType.TEXT))
        {
        content = event.getMessage().getContent();
        }
	    if(content.equals("ping"))
        {
        event.getChannel().sendMessage("pong").queue();
        }
    }
}
