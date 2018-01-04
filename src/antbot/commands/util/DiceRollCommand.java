package antbot.commands.util;

import java.util.Random;

import antbot.commands.Command;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class DiceRollCommand extends Command 
{

    /**Constructor for the DiceRoll command*/
    public DiceRollCommand() 
    {
        super("diceroll", "Rolls a dice");
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
        //TO DO: Vary the dice roll with arguments
        Random rnd = new Random();
        int n = rnd.nextInt(5) + 1;
        event.getChannel().sendMessage(Integer.toString(n));
    }
}

