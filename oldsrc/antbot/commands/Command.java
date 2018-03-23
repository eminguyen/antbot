package antbot.commands;

import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public abstract class Command
{
    private String name;
    private String help;
    
    /**Default constructor for a command
     * @param name the name of the command
     * @param help the description of the command
     */
    public Command(String name, String help)
    {
        this.name = name;
        this.help = help;
    }
    
    /**Gives the name of a command
     * @return String name of the command
     */
    public String getName()
    {
        return this.name;
    }
    
    /**Gives the description of the command
     * @return String command's help info
     */
    public String getHelp()
    {
        return this.help;
    }
    
    /**Verifies if the command can be run
     * @param args the arguments for the command
     * @param event the event of the command's call
     * @return String returns true if command is allowed, else returns
     * an error message
     */
    public String allow(String[] args, MessageReceivedEvent event) 
    {
		return "The command has not been implemented";
	}
    
    /**The action the command performs after being allowed
     * @param args the arguments for the command
     * @param event the event of the command's call
     */
    public void action(String[] args, MessageReceivedEvent event) 
    {
	}
}
