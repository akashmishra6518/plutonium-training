const getwheatherReport=async function(req,res){

    try{
        let id=req.query.apid
        let a=req.query.q
        let option={
             method:"get",
             url:`http://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${id}`
         }
        let result= await axios(option)
        let final=result.data
        let t=final.main
        res.status(200).send({city:final.name,tempreture:t.temp})
    }catch(error){
        res.status(500).send(error.message)
    }
}

const getwheatherReport1=async function(req,res){

    try{
        let id=req.query.apid
        let a=req.query.q
        let result=[];
        let final=[]
        for(let i=0;i<a.length;i++){
            let option={
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${a[i]}&appid=${id}`
            }
             result[i]=await axios(option)
        }
        for(let i=0;i<a.length;i++){
            final.push({temp:result[i].data.main.temp,city:result[i].data.name})
        }
        final.sort((a, b) => {
            return a.temp - b.temp;
        });
        res.status(200).send({final})
    }catch(error){
        res.status(500).send(error.message)
    }
}
module.exports.getwheatherReport=getwheatherReport
module.exports.getwheatherReport1=getwheatherReport1