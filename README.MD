#  Azure DevOps to Asana Importer - ADOTA

> This tool copy user stories, tasks, bugs and more from Azure DevOps to Asana 



<img src="https://devblogs.microsoft.com/devops/wp-content/uploads/sites/6/2019/02/AzureDevOps.png"  width="300" height="250" />
<span>  to  </span>
<img src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/asana/asana-logo.png"  width="300" height="250" />

## Get Started

### Install the package

    npm i @elschnagoo/adota

### Import the importer function ES6
    
    import adota from "@elschnagoo/adota";
 
### Import the importer function without ES6
     
    var adota =require("@elschnagoo/adota");  
 
 ## Setup the configuration for the importer
    
    var asanaCred;
    var azureCred;
    
### Asana Config
    asanaCred={
        name: "New Asana Project",                   // Name for new Project
        teamID: "123456789101112",                   // Asana Team ID
        token: "0/12345678910111212345678910111222", // Asana Access Token
        workspaceID: "123456789101112"               // Asana Workspace ID
    };
    
#### Name

Name for the new Project 

#### TeamID

1. Login to Asana 

2. Click on the Team you want to Select 

3. Copy the Team ID from your URL Panle     
    https://app.asana.com/0/xxxxxxxxxxxxxx/overview
     
    on the xxx position is the Team ID

#### Token

Personal Access Token from Asana 

Go https://asana.com/de/guide/help/api/api and find out more about getting your Access Token  

#### WorkspaceID

1. Login to asana 
2. Open https://app.asana.com/api/1.0/workspaces in a new Tab
3. Copy the `gid` from your Workspace
4. Thats your Workspace ID  
    
### Azure Config
    azureCred={
        orgUrl: "https://dev.azure.com/yourorgname",                    // Azure URL
        queryID: "abcd1234-ab12-1234-abcde-abcdef123456",               // Query ID
        token: "12345678910abcdefghij12345678910abcdefghij1234567891"   // Azure Access Token
    };
    
#### orgUrl

Insert the root URL of your DevOps Site
     
#### queryID

1. Go to your Azure Dev Ops Platform
2.  Under `Boards>Querys` you can create Querys to select all the Items you want to import.
3. After saving your query copy the Query ID



>  Read mode at https://docs.microsoft.com/en-us/azure/devops/boards/queries/using-queries?view=azure-devops

#### token

Azure Dev Ops Personal Access Token

> Go to the link to find out more how to get your token 
>> https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page

###Important : 
While set up your Azure Access Token, you must enable read access for Work items !!! 
    
### Run the importer
    adota(asanaCred,azureCred);

## Example with ES6

     
    import adota from "@elschnagoo/adota";
 
    
    let asanaCred;
    let azureCred;
    
    asanaCred={
        name: "New Asana Project",                   // Name for new Project
        teamID: "123456789101112",                   // Asana Team ID
        token: "0/12345678910111212345678910111222", // Asana Access Token
        workspaceID: "123456789101112"               // Asana Workspace ID
    };
    
    azureCred={
        orgUrl: "https://dev.azure.com/yourorgname",                    // Azure URL
        queryID: "abcd1234-ab12-1234-abcde-abcdef123456",               // Query ID
        token: "12345678910abcdefghij12345678910abcdefghij1234567891"   // Azure Access Token
    };
    
    
    adota(asanaCred,azureCred);



## Example without ES6

     
    var adota =require("@elschnagoo/adota");  
 
    
    var asanaCred;
    var azureCred;
    
    asanaCred={
        name: "New Asana Project",                   // Name for new Project
        teamID: "123456789101112",                   // Asana Team ID
        token: "0/12345678910111212345678910111222", // Asana Access Token
        workspaceID: "123456789101112"               // Asana Workspace ID
    };
    
    azureCred={
        orgUrl: "https://dev.azure.com/yourorgname",                    // Azure URL
        queryID: "abcd1234-ab12-1234-abcde-abcdef123456",               // Query ID
        token: "12345678910abcdefghij12345678910abcdefghij1234567891"   // Azure Access Token
    };
    
    
    adota(asanaCred,azureCred);
