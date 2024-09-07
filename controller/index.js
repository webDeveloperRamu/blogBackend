// app.get('/api/articles/:name',async(req,res)=>{
//     try{
//         const articlesName=req.params.name;
//         const client=await mongodb.MongoClient.connect(uri)

// const db=client.db('TestCrud');
// const articlesInfo=await db.collection('articles').findOne()
//         return res.json(articlesInfo);
//     }catch(error){
//         res.status(500).json({message:'error:connecting to db',error});
//     }
// })


// app.get('/api/articles/:name/upvotes',async(req,res)=>{
//     try{
//         const articleName= req.params.name;

//     const client=await MongoClient.connect('mongodb://127.0.0.1:27017',{useNewUrlParser:true});
//     const db=client.db('my-blog');
//     const articlesInfo=await db.collection('articles').findOne({name:articleName});
//     // const articlesInfo=await db.collection('articles').find().toArray();
//     await db.collection('articles').updateOne({name:articleName},{
//         $set:{
//             upvotes:articlesInfo.upvotes+1
//         }
//     })
//     const upvotesarticlesInfo=await db.collection('articles').findOne({name:articleName})
//     res.status(200).json(upvotesarticlesInfo);
//     client.close();
// }catch(error){
//     res.status(500).json({message:'error:connecting to db',error});
// }
// })

// const mongodb = require('mongodb'); // Ensure you have the mongodb package

// async function withDB(operation, res) {

//     let client;

//     try {
//         client = await mongodb.MongoClient.connect(uri);
//         const db = client.db("TestCrud");
//         // const collections = await db.listCollections().toArray();
//         // console.log('Collections in database:', await db.collection("blog"));
//         // await operation(db); // Await the result of the operation function

//         return res.json({ message: 'Operation successful', data: await operation(db) });
//     } catch (error) {
//         res.json({ message: 'Error connecting to db', error });
//     } finally {
//         if (client) {
//             client.close(); // Ensure the client is closed in the end
//         }
//     }
// }


// localhost:8000/api/articles/learn-node,
// app.get('/api/articles/:name', (req, res) => {
//     withDB(async (db) => {
//         const articlesName = req.params.name;
//         const articlesInfo = await db.collection('articles').findOne({ name: articlesName });
//         console.log({ message: 'Operation successful', articlesInfo })
//         return (articlesInfo)
//     }, res);
// });

// localhost:8000/api/articles/:name/upvotes

// app.post('/api/articles/:name/upvotes',(req,res)=>{
//     withDB(async(db)=>{
//         const articlesName=req.params.name;
//         const articlesInfo=await db.collection('articles').findOne({name:articlesName});
//         await db.collection('articles').updateOne({name:articlesName},{
//             $set:{
//                 upvotes:articlesInfo.upvotes+1
//             }
//         })
//         const updateArticleInfo=await db.collection('articles').findOne({name:articlesName});
//         res.status(200).json(updateArticleInfo)

//     },res)
// })

// app.post('/api/articles/:name/add-comment', (req, res) => {
//     const { username, text } = req.body;
//     const articleName = req.params.name;


//     res.status(200).json({ username, text })
// })