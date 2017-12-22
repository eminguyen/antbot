package antbot;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;
import net.dv8tion.jda.core.entities.*;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import net.dv8tion.jda.core.exceptions.*;
import net.dv8tion.jda.core.hooks.*;

public class Ant {
    public static void main(String[] args)
        throws LoginException, RateLimitedException, InterruptedException
    {
    	try
    	{
    		Settings settings = new Settings("src/antbot/settings.properties");
            JDA jda = new JDABuilder(AccountType.BOT)
                .setToken(settings.getToken())
                .buildBlocking();
            jda.addEventListener(new Ant());
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
}
