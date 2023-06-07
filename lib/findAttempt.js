export default function findAttempt(result){
    
    const ids = result.map(object => {
        return object.attemptNo;
      });
    // console.log(ids,"ids")
      if(ids.length==0){
        return 1;
    }
      const max = Math.max(...ids);
      return max+1;
}