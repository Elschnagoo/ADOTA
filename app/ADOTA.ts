import {run} from './queryGetter'
import {CreateProject} from "./AssanaProjectCreator";
import {WorkItem} from "azure-devops-node-api/interfaces/WorkItemTrackingInterfaces";

const htmlToText = require('html-to-text');


export default function ADOTA(asana:asanaCredentials,azure:azureDevOpsCredentials){
    run(azure).then((ek)=>{
        //console.log(ek[0])
           CreateProject(convertToRoot(ek),asana);

    }).catch((err)=>{

        console.log(err)
    });
}




function  convertToRoot(root:WorkItem[] ){

    let out=[];

    for (let i=0;root!==undefined&&i<root.length;i++){
        const cur=root[i];
        const field=cur.fields;
        if (field===undefined){
            continue;
        }
        const dec=field["System.Description"];

        const text = htmlToText.fromString( dec, {wordwrap: 130});
        let parent;
        console.log(cur._links);
        if (cur._links.parent!==undefined&&cur._links.parent!==null){
            parent=cur._links.parent.href;
        }
        out.push({
            id:cur.id,
            url:cur.url,
            type:field["System.WorkItemType"],
            createdAt:field["System.CreatedDate"],
            createdBy:field["System.CreatedBy"].displayName,
            notes:text,
            title:field["System.Title"],
            link:cur._links.html.href,
            parent:parent,
        })

    }
    return out;

}