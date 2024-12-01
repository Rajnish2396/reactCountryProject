export default async function ApiFetching(apiUrl){

    try{
      let res = await fetch(apiUrl)
     //console.log(apiUrl)
      if(!res.ok){
        console.log(`http Error : ${res.status}`)
      }
      const data = await res.json()

      return data
    }
    catch(err){
      console.log(`Error fetching problem ${err}`)
    }
 }


