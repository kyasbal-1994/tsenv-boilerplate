export default async function():Promise<void>{
  return new Promise<void>((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },1000);
  });
}
