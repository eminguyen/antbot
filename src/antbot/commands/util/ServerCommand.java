package antbot.commands.util;

import antbot.commands.Command;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class ServerCommand extends Command 
{

    /**Constructor for the server command*/
    public ServerCommand() 
    {
        super("server", "Sends an invite link for the main server");
    }
    
    /**Verifies if the command can be run
     * @param args the arguments for the command
     * @param event the event of the command's call
     * @return String returns true if command is allowed, else returns
     * an error message
     */
    public String allow(String[] args, MessageReceivedEvent event)
    {
        return "true";
    }
    
    /**The action the command performs after being allowed
     * @param args the arguments for the command
     * @param event the event of the command's call
     */
    public void action(String[] args, MessageReceivedEvent event) 
    {
        event.getChannel().sendMessage("https://discord.gg/FFSjAvX"); 
    }
}

