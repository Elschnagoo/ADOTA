import asana from "asana";
const Asana = require('asana');
const util = require('util');





export function CreateProject(root:any,credential:asanaCredentials) {
    const {name,workspaceID, teamID,token} =credential;
    const client = Asana.Client.create().useAccessToken(token);

// Using a PAT for basic authentication. This is reasonable to get
// started with, but Oauth is more secure and provides more features.



    client.users.me()
        .then((user: asana.resources.Users.Type) => {
            const userId = user.id;

           return client.projects.create({name:name,workspace:workspaceID,team:teamID,public:false})

        })
        .then((response: asana.resources.Projects.Type) => {
            // There may be more pages of data, we could stream or return a promise
            // to request those here - for now, let's just return the first page
            // of items.
            let help;
            if (root===undefined||root==null){

                help=[{
                    title:"Noting To Import",
                    notes:"Noting To Import",
                    type:"Task"

                },
                {
                    title:"Noting To Import",
                    notes:"Noting To Import",
                    type:"User Story"

                }];
            }
            else {
                help=root;
            }


            for (let i=0;i<help.length;i++){
                let pre="[";

                if (help[i].type==="Task"){
                    pre+="T";
                }
                else if (help[i].type==="Bug"){
                    pre+="🐞 Bug";
                }
                else {
                    pre+="M";
                }


                    pre+="] ";
                let betterNotes;
                betterNotes="#Type: "+help[i].type;
                betterNotes+="\n"+"#Created by: "+help[i].createdBy;
                betterNotes+="\n"+"#Created at: "+help[i].createdAt;
                betterNotes+="\n"+"#LinkToDevOps:\n "+help[i].link;


                betterNotes+="\nDescription:\n"+help[i].notes;
                client.tasks.create({
                                name:pre+"#"+help[i].id+" "+help[i].title,
                                notes:betterNotes,
                                workspace:workspaceID,
                                team:teamID,
                                projects:[response.gid] })//.then((answer)=>{console.log(answer)});
                if ((i+1)===help.length){
                    return "Done"
                }
            }

        }).then((response: String) => {
            // There may be more pages of data, we could stream or return a promise
            // to request those here - for now, let's just return the first page
            // of items.
            console.log(response)


        })
        .catch((e:any) => {
            console.log(e);
        });
}
