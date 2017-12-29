package antbot.commands;

import net.dv8tion.jda.core.entities.Message;

public class CommandParser 
{
    public CommandParser()
    {
        
    }
    
    public String[] getArguments(Message message)
    {
        return message.toString().split(" ");
    }
    
    public String[] getArguments(String string)
    {   
        return string.split(" ");
    }
}
