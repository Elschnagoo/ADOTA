import * as azdev from "azure-devops-node-api";




//

export async function run(credentials:azureDevOpsCredentials){

    const {queryID,orgUrl,token} = credentials;
    let authHandler = azdev.getPersonalAccessTokenHandler(token);
    let connection = new azdev.WebApi(orgUrl, authHandler);

    let output;
    const witApi= await connection.getWorkItemTrackingApi();
    const result= witApi.queryById(queryID);
    const cur= await result;
    let ids : number[] = [];


    for (let i=0; cur.workItems!==undefined&&i<cur.workItems.length;i++){
        const {id} = cur.workItems[i];
        if (id != null) {
            ids.push( id );
        }
    }

    // @ts-ignore
    output=witApi.getWorkItems( ids,undefined,undefined,"all");

    return await output;
}

