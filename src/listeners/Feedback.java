package listeners;

import net.dv8tion.jda.core.entities.*;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;
import net.dv8tion.jda.core.hooks.ListenerAdapter;

public class Feedback extends ListenerAdapter {
	
    @Override
    public void onMessageReceived(MessageReceivedEvent event)
    {
    	User author = event.getAuthor(); //author of the message
    	Message message = event.getMessage(); //message that was received
    	String content = message.getContent(); //String version of the message
    	MessageChannel channel = event.getChannel(); //channel that the message was sent from
    	long responseNumber = event.getResponseNumber(); //response number of the event
    	
    	
	    if(event.isFromType(ChannelType.TEXT))
        {
        }
	    if(content.equals("!ping"))
        {
            event.getChannel().sendMessage("pong").queue();
        }
    }
}
