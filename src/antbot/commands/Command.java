package antbot.commands;

import net.dv8tion.jda.core.entities.Message;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public abstract class Command extends ListenerAdapter
{
    public abstract void onCommand(MessageReceivedEvent e, String[] args);
    
    @Override
    public void onMessageReceived(MessageReceivedEvent e)
    {
    	onCommand(e, commandArgs(e.getMessage()));
    }
    
    protected String[] commandArgs(Message message)
    {
    	return commandArgs(message.getContent());
    }
    
    protected String[] commandArgs(String message)
    {
    	return message.split(" ");
    }
   
}
