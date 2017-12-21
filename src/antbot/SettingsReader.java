package antbot;

import java.io.File;
import java.util.Scanner;

public class SettingsReader {

	private static final String filename = "";
	private Scanner file;
	
	public void openFile()
	{	
		try {
			file = new Scanner(new File(filename)); 
		}
		catch(Exception e)
		{
			System.out.println("File not found");
		}
	}
	
	public String[] readFile()
	{
		while(file.hasNext())
		{
			String[] settingsArr = new String[3];
			settingsArr[0] = file.next();
			settingsArr[1] = file.next();
			settingsArr[2] = file.next();
		}
	}
	
	public void closeFile()
	{
		file.close();
	}
	}
}
