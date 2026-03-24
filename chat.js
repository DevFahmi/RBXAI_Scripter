export default async function handler(req,res){
try{
const r=await fetch("https://api.anthropic.com/v1/messages",{
method:"POST",
headers:{
"x-api-key":process.env.ANTHROPIC_API_KEY,
"anthropic-version":"2023-06-01",
"content-type":"application/json"
},
body:JSON.stringify({
model:"claude-3-haiku-20240307",
max_tokens:1000,
messages:req.body.messages
})
});
const d=await r.json();
res.status(200).json(d);
}catch(e){res.status(500).json({error:e.message});}
}
