package antbot.commands;

import net.dv8tion.jda.core.entities.Message;

public class CommandParser 
{   
    
    public String[] getArguments(Message message)
    {
        return removeFirst(splitMessage(message));
    }
    
    public String[] getArguments(String string)
    {
        return removeFirst(splitMessage(string));
    }
    
    public String[] splitMessage(Message message)
    {
        return splitMessage(message.toString());
    }
    
    public String[] splitMessage(String string)
    {   
        return string.split(" ");
    }
    
    public String[] removeFirst(String[] array)
    {
        String[] newArray = new String[array.length-1];
        for(int i = 1; i < array.length; i++)
        {
            newArray[i-1] = array[i];
        }
        return newArray;
    }
}
