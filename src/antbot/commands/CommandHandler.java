package antbot.commands;

import java.util.HashMap;
import antbot.commands.util.*;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class CommandHandler 
{
	private HashMap<String, Command> commands;
	private boolean init;

	public CommandHandler()
	{
		commands = new HashMap<String, Command>();
		init = false;
	}
	
	public void load()
	{
		//TO DO: Figure out how to load commands without hardcode
		//Idea: Use wildcards
		commands.put(new PingCommand().getName(), new PingCommand());
		init = true;
	}
	
	public void handleCommand(MessageReceivedEvent event)
	{
		if(!init)
		{
			System.out.println("CommandHandler not initialized");
	        return;
		}
		//parse command
		String[] args = new String[0];
		String name = args[0];
		commands.get(name).action(args, event);
	}
}
