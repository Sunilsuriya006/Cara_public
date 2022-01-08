 
 ​if​ ​(​m​.​mtype​ ​==​ ​'viewOnceMessage'​ ​&&​ ​isViewonce​ ​===​ ​true​)​{ 
 ​  ​msg​ ​=​ ​{​...​mek​} 
 ​  ​msg​.​message​ ​=​ ​mek​.​message​.​viewOnceMessage​.​message 
 ​  ​msg​.​message​[​Object​.​keys​(​msg​.​message​)​[​0​]​]​.​viewOnce​ ​=​ ​false 
 ​  ​m​.​reply​(​'ViewOnce detected!'​) 
 ​  ​client​.​copyNForward​(​from​,​ ​msg​) 
 ​}
