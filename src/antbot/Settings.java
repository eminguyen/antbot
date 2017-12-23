package antbot;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Settings
{
	private Properties prop;
	private String fileName;
	
	/**Constructor
	 * @param propFile the string of the properties file
	 */
	public Settings(String propFile)
	{
		fileName = propFile;
		prop = new Properties();
		readSettings();
	}
	
	/**Loads the settings from the file*/
	public void readSettings()
	{
		try 
		{
			InputStream input = new FileInputStream(fileName);
			prop.load(input);
		} 
		catch (FileNotFoundException e) 
		{
			e.printStackTrace();
		} 
		catch (IOException e) 
		{
			e.printStackTrace();
		}
	}
	
	/**Getter method for the token
	 * @return String bot's token
	 */
	public String getToken()
	{
		return prop.getProperty("token");
	}
	
	/**Getter method for the owner
	 * @return String owner's ID
	 */
	public String getOwner()
	{
		return prop.getProperty("owner");
	}
	
	/**Getter method for the NSFW property
	 * @return boolean true if nsfw is allowed, false if not
	 */
	public boolean getNSFW()
	{
		return Boolean.parseBoolean(prop.getProperty("nsfw"));
	}
	
	/**Getter method for the prefix
	 * @return String prefix for bot's commands
	 */
	public String getPrefix()
	{
		return prop.getProperty("prefix");
	}
	
	/**Getter method for the bot invite
	 * @return String invite link to add bot to a server
	 */
	public String getBotInvite()
	{
	    return prop.getProperty("botinvite");
	}
	
	/**Getter method for the server invite
	 * @return String invite link for the bot's server
	 */
	public String getServerInvite()
	{
	    return prop.getProperty("serverinvite");
	}
}