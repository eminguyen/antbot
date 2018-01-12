package antbot;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.core.AccountType;
import net.dv8tion.jda.core.JDA;
import net.dv8tion.jda.core.JDABuilder;

public class Ant
{
    public static void main(String[] args)
    throws InterruptedException
    {
        try
        {
            //Initialize the bot; logs in and implements settings
            Settings settings = new Settings("src/antbot/settings.properties");
            JDA jda = new JDABuilder(AccountType.BOT)
            .setToken(settings.getToken())
            .buildBlocking();
    	}
        catch(LoginException | IllegalArgumentException e)
        {
            e.printStackTrace();
        }
    }
}
