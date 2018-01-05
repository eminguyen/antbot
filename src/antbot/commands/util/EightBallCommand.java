package antbot.commands.util;

import java.util.Random;

import antbot.commands.Command;
import net.dv8tion.jda.core.events.message.MessageReceivedEvent;

public class EightBallCommand extends Command 
{

    /**Constructor for the 8Ball command*/
    public EightBallCommand() 
    {
        super("8ball", "Answers a question using eightball");
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
        int n = rnd.nextInt(20);
        String[] ballAnswers = {"It is certain", "It is decidedly so", "Without a doubt",
                                "Yes definitely", "You may rely on it", "As I see it, yes",
                                "Most likely", "Outlook good", "Yes", "Signs point to yes",
                                "Reply hazy try again", "Ask again later", "Better not tell you now",
                                "Cannot predict now", "Concentrate and ask again",
                                "Don't count on it", "My reply is no", "My sources say no",
                                "Outlook not so good", "Very doubtful"};
        event.getChannel().sendMessage(ballAnswers[n]);                                
    }
}

