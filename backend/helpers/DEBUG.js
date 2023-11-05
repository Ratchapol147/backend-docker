exports.DEBUG = (message)=>{
    if(process.env.NODE_ENV === 'development'){
        console.log("development");
        console.log(message);
    }else if(process.env.NODE_ENV === 'production'){
        console.log("production");

    }
}