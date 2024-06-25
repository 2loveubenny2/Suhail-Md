const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348079730737";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_07_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicklHNEQzSW5XeUQ1ODhTMUdFMWJEeExTejZyYzNucUo4d05pWUlZT1Z1cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSXluTGZHTGNSZXFXTUw0OHNpT05tQVwiLFxuICBcInBob25lSWRcIjogXCJjMDU5NmM4My1hMjJmLTRiNWYtYTRmNy04NzY2NTViNjE1YjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTA1LFxuICAgICAgNTAsXG4gICAgICA2OCxcbiAgICAgIDE5MCxcbiAgICAgIDE2NixcbiAgICAgIDExMSxcbiAgICAgIDIyOCxcbiAgICAgIDEyNSxcbiAgICAgIDIzOCxcbiAgICAgIDczLFxuICAgICAgMjMxLFxuICAgICAgMjI0LFxuICAgICAgMjE2LFxuICAgICAgODYsXG4gICAgICAxMDMsXG4gICAgICAxMjUsXG4gICAgICA2MixcbiAgICAgIDE3MSxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDE1NCxcbiAgICAgIDE1OSxcbiAgICAgIDU1LFxuICAgICAgMjI5LFxuICAgICAgMjksXG4gICAgICA1LFxuICAgICAgMTE0LFxuICAgICAgMzMsXG4gICAgICA5MyxcbiAgICAgIDIxNixcbiAgICAgIDc2LFxuICAgICAgMTUzLFxuICAgICAgMTk3LFxuICAgICAgMTM0LFxuICAgICAgNSxcbiAgICAgIDQzLFxuICAgICAgMjE5LFxuICAgICAgODcsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzS1Y5R0c3UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3OTczMDczNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiREUgSEVBVkVOIERFQ09SIEdMT0JBTCBTRVJWSUNFUyBMSU1JVEVEXCIsXG4gICAgXCJsaWRcIjogXCIyMTU3ODc5NDgyMjA2NjQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNU1Z6cWNERUtQajdMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBhbEpKL3N5WjluY1NuTkNpeCt2VHdlR0cvOTZvUEoweURsblpYTVg5RUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1pTb2ljajZ0eEo3dXNnc0Y3Y2gvWUJIeC9CQXpseDlUMnhDTEVCT2thTEJ2MEUrM004MVBCdSs3dndNK3VJRklNSDU5TE5sM25rMUpRdDhhdzNVQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiejU0TkI5dzhNbWRkZ1RRdU11MXJjQ09weHl3eGVPODBRaGJuNGV4bzJvbjNRbXdDN1k0bk5XSDdKKzN5c3IycVdOSEF5Uk9BNWxYVmx4VFJ2R2lMQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3OTczMDczNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzNDk2NzFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
