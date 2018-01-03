package antbot.commands.util;

import java.util.Random;

import antbot.commands.Command;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class CoinFlipCommand extends Command 
{

    /**Constructor for the CoinFlip command*/
    public CoinFlipCommand() 
    {
        super("coinflip", "Flips a coin");
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
        Random rnd = new Random();
        int n = rnd.nextInt(1);
        if(n == 0)
        {
            event.getChannel().sendMessage("Heads");
        }
        else
        {
            event.getChannel().sendMessage("Tails");
        }
    }
}
