
const ordermodel=require('../model/expensemodel')
const rootDir=require('../util/path')
const path=require('path')
const fs=require('fs')
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'ApiKey',
    secretAccessKey: 'Apisecret'
});


var p=path.join(rootDir,'notes','datas.json')
exports.getordermodel=(req,res)=>{
    
    ordermodel.findAll().then(result=>{
        
        fs.writeFile(p,JSON.stringify(result),(err)=>{
            
            console.log(err)
        })
       
        const uploadFile = (p) => {
            console.log('hello there  mate')
            const fileContent = fs.readFileSync(p);
        
     
            const params = {
                Bucket: 'ladi-upload',
                Key: 'file.json',
                Body: fileContent
            };
         
            // Uploading files to the bucket
            s3.upload(params, function(err, data) {
                if (err) {
                    throw err;
                }
                console.log(`File uploaded successfully. ${data.Location}`);
            });
            
        };
        uploadFile(p)
}).catch(err=>res.json(err))
}


