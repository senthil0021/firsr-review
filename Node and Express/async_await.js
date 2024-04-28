const {readFile,writeFile}=require('fs');

const getText=(path)=>
{
    return new promises((resolve,reject)=>
    {
         readFile(path,'utf-8',(err,result)=>
        {
            if(err)
            {
            reject(err);
            }
        else{
            resolve(result);
        }
        })
    })

}
const output=async()=>
{
   try{
    const first
   }
   catch{

   }
}




